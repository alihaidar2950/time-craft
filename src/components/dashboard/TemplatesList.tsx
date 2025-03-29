import React from 'react';
import TemplateCard from './TemplateCard';

// Mock data for templates
const TEMPLATES = [
  {
    id: 1,
    title: 'Newsletter Creator',
    description: 'Allocate time for researching, writing, and growing a newsletter.',
    weeklyHours: 8,
    categories: ['Writing', 'Marketing', 'Content Creation']
  },
  {
    id: 2,
    title: 'Fitness Enthusiast',
    description: 'Balance cardio, strength training, and recovery for optimal fitness.',
    weeklyHours: 6,
    categories: ['Exercise', 'Health', 'Personal Care']
  },
  {
    id: 3,
    title: 'Language Learner',
    description: 'Structured approach to vocabulary, grammar, and conversation practice.',
    weeklyHours: 5,
    categories: ['Education', 'Skills', 'Personal Growth']
  },
  {
    id: 4,
    title: 'Side Project Developer',
    description: 'Time blocks for coding, testing, and marketing your side project.',
    weeklyHours: 10,
    categories: ['Programming', 'Business', 'Creativity']
  }
];

export default function TemplatesList() {
  const handleApplyTemplate = (templateId: number) => {
    // This would be replaced with actual implementation to apply the template
    console.log(`Applying template with ID: ${templateId}`);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-6">Template Library</h2>
      <p className="text-gray-600 mb-6">
        Apply a pre-built template to quickly allocate your discretionary time.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TEMPLATES.map((template) => (
          <TemplateCard
            key={template.id}
            title={template.title}
            description={template.description}
            weeklyHours={template.weeklyHours}
            categories={template.categories}
            onApply={() => handleApplyTemplate(template.id)}
          />
        ))}
      </div>
    </div>
  );
} 