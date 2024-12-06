import React, { useState } from 'react';
import { Header } from './components/Header';
import { Challenge } from './components/Challenge';
import { Leaderboard } from './components/Leaderboard';
import { AlertTriangle, Lock, Mail, Shield } from 'lucide-react';

function App() {
  const [currentChallenge, setCurrentChallenge] = useState<string | null>(null);

  const challenges = [
    {
      id: 'phishing',
      title: 'Phishing Detection',
      description: 'Learn to identify and avoid dangerous phishing attempts in emails and messages.',
      icon: <Mail className="w-6 h-6 text-indigo-600" />,
      difficulty: 'easy',
      points: 100
    },
    {
      id: 'passwords',
      title: 'Password Security',
      description: 'Master the art of creating strong, unique passwords and understand password management.',
      icon: <Lock className="w-6 h-6 text-indigo-600" />,
      difficulty: 'medium',
      points: 150
    },
    {
      id: 'social-engineering',
      title: 'Social Engineering',
      description: 'Recognize and defend against common social engineering tactics.',
      icon: <AlertTriangle className="w-6 h-6 text-indigo-600" />,
      difficulty: 'hard',
      points: 200
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Become a Cyber Security Hero</h2>
            <p className="text-xl text-gray-600">Learn essential cybersecurity skills through interactive challenges</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="challenges">
            {challenges.map((challenge) => (
              <Challenge
                key={challenge.id}
                {...challenge}
                onStart={() => setCurrentChallenge(challenge.id)}
              />
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8" id="leaderboard">
          <div>
            <h2 className="text-2xl font-bold mb-6">Your Progress</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-12 h-12 text-indigo-600" />
                <div>
                  <h3 className="text-xl font-semibold">Current Level</h3>
                  <p className="text-gray-600">Cyber Rookie</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm font-medium">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Challenges Completed: 2/5</span>
                  <span>Points: 250</span>
                </div>
              </div>
            </div>
          </div>
          
          <Leaderboard />
        </section>
      </main>
    </div>
  );
}

export default App;