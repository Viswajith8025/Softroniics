import React from "react";

const MotivationComponent = () => {
  const motivationalTips = [
    "Visualize your goals every morning and remind yourself why you started.",
    "Create a workout playlist with songs that energize and inspire you.",
    "Surround yourself with positive influences and fitness role models.",
    "Break big goals into smaller, actionable steps to stay focused.",
    "Remind yourself that progress, not perfection, is the key to success.",
  ];

  const challenges = [
    "Do 100 squats every day for 7 days and track your strength improvement.",
    "Drink only water (no sugary drinks or alcohol) for an entire week.",
    "Replace one processed snack with a whole food option each day this week.",
    "Commit to waking up 30 minutes earlier and using that time for self-care.",
    "Perform a 1-minute plank every day, increasing the duration by 10 seconds daily.",
  ];

  const motivationalQuote = `"Motivation gets you started. Discipline keeps you going." – CBUM`;

  return (
    <div className="bg-gradient-to-br from-purple-700 to-indigo-900 text-white rounded-lg shadow-xl p-8 space-y-10">
      <h2 className="text-4xl font-extrabold text-center mb-6">Stay Motivated</h2>

      <div>
        <h3 className="text-3xl font-semibold mb-4 border-b-2 border-indigo-400 inline-block">
          Power-Up Your Motivation
        </h3>
        <ul className="list-disc list-inside text-lg space-y-3 pl-4">
          {motivationalTips.map((tip, index) => (
            <li key={index} className="hover:text-indigo-300 transition-colors">
              {tip}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-3xl font-semibold mb-4 border-b-2 border-purple-400 inline-block">
          This Week’s Challenges
        </h3>
        <ul className="list-disc list-inside text-lg space-y-3 pl-4">
          {challenges.map((challenge, index) => (
            <li
              key={index}
              className="hover:text-purple-300 transition-colors"
            >
              {challenge}
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center italic bg-white bg-opacity-20 p-6 rounded-lg shadow-md border-l-4 border-indigo-300">
        <p className="text-xl">{motivationalQuote}</p>
      </div>
    </div>
  );
};

export default MotivationComponent;
