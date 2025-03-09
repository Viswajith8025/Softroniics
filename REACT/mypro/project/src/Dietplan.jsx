import React, { useState } from 'react';

const DietPlan = () => {
  const [bmi, setBMI] = useState('');
  const [dietPlan, setDietPlan] = useState('');

  const determineDietPlan = () => {
    if (!bmi) {
      alert('Please enter your BMI.');
      return;
    }

    const bmiValue = parseFloat(bmi);

    if (bmiValue < 18.5) {
      setDietPlan(
        <>
          <h2 className="text-2xl font-bold text-green-600">Weight Gain Diet</h2>
          <ul className="list-disc list-inside mt-4 text-lg text-gray-700">
            <li>Increase caloric intake with healthy fats and carbohydrates.</li>
            <li>Eat protein-rich foods like eggs, chicken, lentils, and tofu.</li>
            <li>Snack on nuts, seeds, and whole-grain bread with nut butter.</li>
            <li>Include dairy products like cheese, yogurt, and milk.</li>
            <li>Focus on strength training and muscle-building exercises.</li>
          </ul>
        </>
      );
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setDietPlan(
        <>
          <h2 className="text-2xl font-bold text-blue-600">Maintenance Diet</h2>
          <ul className="list-disc list-inside mt-4 text-lg text-gray-700">
            <li>Maintain a balanced diet with moderate portions of protein, carbs, and fats.</li>
            <li>Eat lean protein sources like fish, chicken, beans, and legumes.</li>
            <li>Include plenty of fruits and vegetables for vitamins and fiber.</li>
            <li>Limit processed foods and sugary drinks.</li>
            <li>Engage in regular physical activity to sustain your fitness level.</li>
          </ul>
        </>
      );
    } else if (bmiValue >= 25) {
      setDietPlan(
        <>
          <h2 className="text-2xl font-bold text-red-600">Weight Loss Diet</h2>
          <ul className="list-disc list-inside mt-4 text-lg text-gray-700">
            <li>Reduce calorie intake and focus on portion control.</li>
            <li>Prioritize lean protein like chicken breast, fish, and egg whites.</li>
            <li>Consume whole grains like quinoa, oats, and brown rice in moderation.</li>
            <li>Include low-calorie vegetables like spinach, broccoli, and zucchini.</li>
            <li>Cut back on sugar and refined carbohydrates.</li>
            <li>Incorporate cardiovascular exercises like running, cycling, or swimming.</li>
          </ul>
        </>
      );
    } else {
      setDietPlan(<p className="text-red-500">Invalid BMI entered. Please check again!</p>);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-green-400 text-gray-800 p-8">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Personalized Diet Plan</h1>
        
        <label className="block text-lg font-semibold mb-4 text-gray-800" htmlFor="bmi">
          Enter Your BMI:
        </label>
        <input
          type="number"
          id="bmi"
          className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-lg"
          value={bmi}
          onChange={(e) => setBMI(e.target.value)}
          placeholder="e.g., 22.5"
        />

        <button
          onClick={determineDietPlan}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition-all duration-300 mb-4 transform hover:scale-105"
        >
          Get Diet Plan
        </button>

        <div className="mt-6 text-center">{dietPlan}</div>
      </div>
    </div>
  );
};

export default DietPlan;
