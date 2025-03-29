-- Create users table extension (already handled by Supabase Auth)
-- This is just a reference to the built-in auth.users table

-- Create profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users NOT NULL PRIMARY KEY,
  email TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create RLS policies for profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Create time_audits table
CREATE TABLE time_audits (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  work_hours INTEGER NOT NULL,
  sleep_hours INTEGER NOT NULL,
  commute_hours INTEGER NOT NULL,
  essential_hours INTEGER NOT NULL,
  discretionary_hours INTEGER NOT NULL,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create RLS policies for time_audits
ALTER TABLE time_audits ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own time audits" ON time_audits
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own time audits" ON time_audits
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own time audits" ON time_audits
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete their own time audits" ON time_audits
  FOR DELETE USING (auth.uid() = user_id);

-- Create templates table
CREATE TABLE templates (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  weekly_hours INTEGER NOT NULL,
  is_public BOOLEAN DEFAULT true NOT NULL,
  user_id UUID REFERENCES auth.users,  -- NULL for system templates
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create RLS policies for templates
ALTER TABLE templates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view public templates" ON templates
  FOR SELECT USING (is_public = true);
CREATE POLICY "Users can view their own private templates" ON templates
  FOR SELECT USING (auth.uid() = user_id AND is_public = false);
CREATE POLICY "Users can create their own templates" ON templates
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own templates" ON templates
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete their own templates" ON templates
  FOR DELETE USING (auth.uid() = user_id);

-- Create template_categories table
CREATE TABLE template_categories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  template_id UUID REFERENCES templates NOT NULL,
  category TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create RLS policies for template_categories
ALTER TABLE template_categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view public template categories" ON template_categories
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM templates 
      WHERE templates.id = template_categories.template_id 
      AND templates.is_public = true
    )
  );
CREATE POLICY "Users can view their own private template categories" ON template_categories
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM templates 
      WHERE templates.id = template_categories.template_id 
      AND templates.user_id = auth.uid() 
      AND templates.is_public = false
    )
  );

-- Create user_templates table (templates applied by users)
CREATE TABLE user_templates (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  template_id UUID REFERENCES templates NOT NULL,
  is_active BOOLEAN DEFAULT true NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create RLS policies for user_templates
ALTER TABLE user_templates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own applied templates" ON user_templates
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own applied templates" ON user_templates
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own applied templates" ON user_templates
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete their own applied templates" ON user_templates
  FOR DELETE USING (auth.uid() = user_id);

-- Trigger for updating the updated_at column
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply the trigger to all tables with updated_at
CREATE TRIGGER update_profiles_updated_at
BEFORE UPDATE ON profiles
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_time_audits_updated_at
BEFORE UPDATE ON time_audits
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_templates_updated_at
BEFORE UPDATE ON templates
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_user_templates_updated_at
BEFORE UPDATE ON user_templates
FOR EACH ROW EXECUTE FUNCTION update_updated_at();
