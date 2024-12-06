import React from 'react';
import { Shield } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-indigo-600 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Cyber Hero Academy</h1>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#challenges" className="hover:text-indigo-200">Challenges</a></li>
            <li><a href="#leaderboard" className="hover:text-indigo-200">Leaderboard</a></li>
            <li><a href="#resources" className="hover:text-indigo-200">Resources</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}