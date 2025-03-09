import React, { useState } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [classification, setClassification] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(calculatedBMI);
      setClassification(getClassification(calculatedBMI));
    } else {
      alert('Please enter both weight and height.');
    }
  };

  const getClassification = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 24.9) return 'Normal weight';
    if (bmi >= 25 && bmi < 29.9) return 'Overweight';
    return 'Obesity';
  };

  const resetCalculator = () => {
    setWeight('');
    setHeight('');
    setBMI(null);
    setClassification('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white">
      <div className="bg-white text-gray-900 p-10 rounded-3xl shadow-2xl w-full max-w-lg">
      <h1 className="text-4xl font-bold text-center mb-8 text-black">
  BMI Calculator
</h1>

        <div className="mb-6">
          <label className="block text-xl font-medium mb-2" htmlFor="weight">
            Weight (kg):
          </label>
          <input
            type="number"
            id="weight"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight in kilograms"
          />
        </div>
        <div className="mb-6">
          <label className="block text-xl font-medium mb-2" htmlFor="height">
            Height (cm):
          </label>
          <input
            type="number"
            id="height"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height in centimeters"
          />
        </div>
        <button
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          onClick={calculateBMI}
        >
          Calculate BMI
        </button>
        {bmi && (
          <div className="mt-8 p-6 bg-gray-100 rounded-xl shadow-lg">
            <p className="text-2xl font-semibold text-center mb-4">
              Your BMI: <span className="text-blue-600">{bmi}</span>
            </p>
            <p className="text-xl text-center">
              Classification: <span className="font-bold text-green-600">{classification}</span>
            </p>
          </div>
        )}
        <button
          className="w-full mt-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          onClick={resetCalculator}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default BMICalculator;
