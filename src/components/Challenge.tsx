import React from 'react';
import { AlertTriangle, Lock, Mail, Shield } from 'lucide-react';

interface ChallengeProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  onStart: () => void;
}

export function Challenge({ title, description, icon, difficulty, points, onStart }: ChallengeProps) {
  const difficultyColors = {
    easy: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    hard: 'bg-red-100 text-red-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-indigo-100 rounded-full">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className={`text-sm px-2 py-1 rounded-full ${difficultyColors[difficulty]}`}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </span>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-indigo-600 font-semibold">{points} points</span>
        <button
          onClick={onStart}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Start Challenge
        </button>
      </div>
    </div>
  );
}