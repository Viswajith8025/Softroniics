import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addFavorite } from "./favoritesSlice";
import { Link } from "react-router-dom";

const FitnessComponent = () => {
  const [exercises, setExercises] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favoritedExercises, setFavoritedExercises] = useState(new Set());
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/exercises");
      setExercises(response.data);
    } catch (err) {
      setError("Error fetching data. Please try again later.");
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const muscleGroups = [
    "All",
    ...new Set(exercises.map((item) => item.muscleGroup)),
  ];
  const filteredExercises =
    selectedGroup === "All"
      ? exercises
      : exercises.filter((exercise) => exercise.muscleGroup === selectedGroup);

  const handleAddToFavorites = (exercise) => {
    dispatch(addFavorite(exercise));
    setFavoritedExercises((prev) => new Set(prev).add(exercise.id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-900 text-white">
      <div className="max-w-screen-xl mx-auto p-8">
        <h1 className="text-5xl font-extrabold text-center text-white mb-12">
          Fitness Tracker
        </h1>

        <div className="flex justify-center space-x-8 mb-10">
  <Link
    to="/bmi"
    className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
  >
    Go to BMI Calculator
  </Link>
  <Link
    to="/diet"
    className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
  >
    Diet Plan
  </Link>
  <Link
    to="/favorite"
    className="px-8 py-4 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
  >
    View Favorites
  </Link>
  <Link
    to="/motivation"
    className="px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
  >
    Motivation
  </Link> 
</div>


        {loading ? (
          <p className="text-center text-3xl">Loading...</p>
        ) : error ? (
          <p className="text-center text-3xl text-red-500">{error}</p>
        ) : (
          <>
            <div className="flex justify-center flex-wrap gap-6 mb-10">
              {muscleGroups.map((group, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 text-lg font-semibold rounded-xl transition-all duration-300 ${
                    selectedGroup === group
                      ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                      : "bg-gray-800 hover:bg-gray-600 text-gray-100"
                  }`}
                  onClick={() => setSelectedGroup(group)}
                >
                  {group}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredExercises.map((exercise) => (
                <div
                  key={exercise.id}
                  className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  {exercise.image && (
                    <img
                      src={exercise.image}
                      alt={exercise.exercise}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                      {exercise.exercise}
                    </h3>
                    <p className="text-lg text-gray-700">
                      Muscle Group: {exercise.muscleGroup}
                    </p>
                    {exercise.sets && (
                      <p className="text-lg text-gray-700">
                        Sets: {exercise.sets}
                      </p>
                    )}
                    {exercise.duration && (
                      <p className="text-lg text-gray-700">
                        Duration: {exercise.duration}
                      </p>
                    )}
                    <button
                      className={`mt-4 w-full py-2 rounded-md text-white font-semibold ${
                        favoritedExercises.has(exercise.id)
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-indigo-600 hover:bg-indigo-700"
                      } transition-all duration-300`}
                      onClick={() => handleAddToFavorites(exercise)}
                    >
                      {favoritedExercises.has(exercise.id)
                        ? "Added"
                        : "Add to Favorites"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FitnessComponent;
