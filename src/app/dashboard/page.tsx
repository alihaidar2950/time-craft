import React from 'react';
import Navigation from '@/components/ui/Navigation';
import TimeAuditCalculator from '@/components/dashboard/TimeAuditCalculator';
import TemplatesList from '@/components/dashboard/TemplatesList';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">TimeCraft Dashboard</h1>
        
        <div className="grid grid-cols-1 gap-8">
          <TimeAuditCalculator />
          
          <div className="mt-8">
            <TemplatesList />
          </div>
        </div>
      </main>
    </div>
  );
}
