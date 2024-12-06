import React from 'react';
import { Trophy } from 'lucide-react';

const MOCK_LEADERS = [
  { id: 1, name: 'Alice Smith', points: 2500, badge: '🛡️ Security Expert' },
  { id: 2, name: 'Bob Johnson', points: 2100, badge: '🔒 Security Pro' },
  { id: 3, name: 'Carol Williams', points: 1800, badge: '🎯 Rising Star' },
];

export function Leaderboard() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="w-6 h-6 text-yellow-500" />
        <h2 className="text-2xl font-bold">Top Cyber Heroes</h2>
      </div>
      <div className="space-y-4">
        {MOCK_LEADERS.map((leader, index) => (
          <div
            key={leader.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-gray-500">#{index + 1}</span>
              <div>
                <h3 className="font-semibold">{leader.name}</h3>
                <span className="text-sm text-gray-600">{leader.badge}</span>
              </div>
            </div>
            <span className="font-bold text-indigo-600">{leader.points} pts</span>
          </div>
        ))}
      </div>
    </div>
  );
}