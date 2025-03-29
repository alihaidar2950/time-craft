import React from 'react';

interface TemplateCardProps {
  title: string;
  description: string;
  weeklyHours: number;
  categories: string[];
  onApply: () => void;
}

export default function TemplateCard({ 
  title, 
  description, 
  weeklyHours, 
  categories,
  onApply 
}: TemplateCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:border-indigo-300 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
          {weeklyHours} hrs/week
        </span>
      </div>
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Categories:</h4>
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <span 
              key={index} 
              className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
      
      <button
        onClick={onApply}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Apply Template
      </button>
    </div>
  );
} 