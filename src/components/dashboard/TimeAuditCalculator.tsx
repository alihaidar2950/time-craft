import React, { useState } from 'react';

interface TimeInputs {
  work: number;
  sleep: number;
  commute: number;
  essentials: number;
}

export default function TimeAuditCalculator() {
  const [timeInputs, setTimeInputs] = useState<TimeInputs>({
    work: 40,
    sleep: 56, // 8 hours * 7 days
    commute: 5,
    essentials: 15,
  });
  
  const [discretionaryHours, setDiscretionaryHours] = useState<number>(52);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = parseInt(value) || 0;
    
    setTimeInputs(prev => ({
      ...prev,
      [name]: numValue
    }));
  };

  const calculateDiscretionaryTime = () => {
    const totalWeeklyHours = 168; // 24 hours * 7 days
    const usedHours = Object.values(timeInputs).reduce((sum, hours) => sum + hours, 0);
    const discretionary = totalWeeklyHours - usedHours;
    
    setDiscretionaryHours(discretionary);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6">Time Audit Calculator</h2>
      <p className="text-gray-600 mb-6">
        Enter your weekly hours for each category to calculate your discretionary time.
      </p>
      
      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="work" className="block text-sm font-medium text-gray-700 mb-1">
            Work Hours (per week)
          </label>
          <input
            type="number"
            id="work"
            name="work"
            value={timeInputs.work}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        
        <div>
          <label htmlFor="sleep" className="block text-sm font-medium text-gray-700 mb-1">
            Sleep Hours (per week)
          </label>
          <input
            type="number"
            id="sleep"
            name="sleep"
            value={timeInputs.sleep}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <p className="text-xs text-gray-500 mt-1">Default: 8 hours × 7 days = 56 hours</p>
        </div>
        
        <div>
          <label htmlFor="commute" className="block text-sm font-medium text-gray-700 mb-1">
            Commute Hours (per week)
          </label>
          <input
            type="number"
            id="commute"
            name="commute"
            value={timeInputs.commute}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        
        <div>
          <label htmlFor="essentials" className="block text-sm font-medium text-gray-700 mb-1">
            Essential Activities (per week)
          </label>
          <input
            type="number"
            id="essentials"
            name="essentials"
            value={timeInputs.essentials}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <p className="text-xs text-gray-500 mt-1">Cooking, eating, hygiene, chores, etc.</p>
        </div>
      </div>
      
      <button
        onClick={calculateDiscretionaryTime}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Calculate Discretionary Time
      </button>
      
      <div className="mt-8 p-4 bg-indigo-50 rounded-md">
        <h3 className="text-lg font-medium text-indigo-800 mb-2">Your Results</h3>
        <p className="text-indigo-700">
          You have approximately <span className="font-bold text-xl">{discretionaryHours}</span> hours of discretionary time per week.
        </p>
        {discretionaryHours < 0 ? (
          <p className="text-red-600 mt-2 text-sm">
            Your schedule is overcommitted. Try reducing some hours to create a more sustainable schedule.
          </p>
        ) : discretionaryHours > 50 ? (
          <p className="text-green-600 mt-2 text-sm">
            You have a healthy amount of discretionary time. Consider allocating it to personal growth, relationships, and intentional leisure.
          </p>
        ) : (
          <p className="text-orange-600 mt-2 text-sm">
            You have a moderate amount of discretionary time. Focus on optimizing it for what matters most to you.
          </p>
        )}
      </div>
    </div>
  );
} 