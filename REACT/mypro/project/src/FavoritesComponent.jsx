import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from './favoritesSlice';

const FavoritesComponent = () => {
  const favorites = useSelector(state => state.favorites.favorites);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 to-green-900 text-white">
      <div className="max-w-screen-xl mx-auto p-8">
        <h1 className="text-5xl font-extrabold text-center text-white mb-12">Your Favorite Exercises</h1>
        {favorites.length === 0 ? (
          <p className="text-center text-3xl text-gray-300">No favorites added yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {favorites.map(favorite => (
              <div
                key={favorite.id}
                className="bg-white text-gray-900 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {favorite.image && (
                  <img
                    src={favorite.image}
                    alt={favorite.exercise}
                    className="w-full h-56 object-cover rounded-t-lg"
                  />
                )}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{favorite.exercise}</h3>
                  <p className="text-gray-600 text-lg">Muscle Group: {favorite.muscleGroup}</p>
                  {favorite.sets && (
                    <p className="text-gray-600 text-lg">Sets: {favorite.sets}</p>
                  )}
                  {favorite.duration && (
                    <p className="text-gray-600 text-lg">Duration: {favorite.duration}</p>
                  )}
                  <button
                    className="w-full mt-4 px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors duration-300"
                    onClick={() => dispatch(removeFavorite(favorite))}
                  >
                    Remove from Favorites
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesComponent;
