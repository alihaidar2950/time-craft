import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper functions for auth
export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

export const getCurrentUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  return { user: data.user, error };
};

// Helper functions for time audits
export const saveTimeAudit = async (
  userId: string,
  workHours: number,
  sleepHours: number,
  commuteHours: number,
  essentialHours: number,
  discretionaryHours: number,
  notes?: string
) => {
  const { data, error } = await supabase.from('time_audits').insert([
    {
      user_id: userId,
      work_hours: workHours,
      sleep_hours: sleepHours,
      commute_hours: commuteHours,
      essential_hours: essentialHours,
      discretionary_hours: discretionaryHours,
      notes,
    },
  ]);
  return { data, error };
};

export const getTimeAudits = async (userId: string) => {
  const { data, error } = await supabase
    .from('time_audits')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  return { data, error };
};

// Helper functions for templates
export const getTemplates = async () => {
  const { data, error } = await supabase
    .from('templates')
    .select(`
      *,
      template_categories(category)
    `)
    .eq('is_public', true);
  return { data, error };
};

export const getUserTemplates = async (userId: string) => {
  const { data, error } = await supabase
    .from('user_templates')
    .select(`
      *,
      templates(*)
    `)
    .eq('user_id', userId);
  return { data, error };
};

export const applyTemplate = async (userId: string, templateId: string) => {
  const { data, error } = await supabase.from('user_templates').insert([
    {
      user_id: userId,
      template_id: templateId,
      is_active: true,
    },
  ]);
  return { data, error };
}; 