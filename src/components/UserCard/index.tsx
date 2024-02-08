import React from 'react';
import { User, Weather } from '../../types/types';

interface UserCardProps {
  user: User;
  weather: Weather;
  loading?: boolean;
  saveBtn?: boolean;
}

const UserCard = ({
  user,
  weather,
  loading = false,
  saveBtn = true,
}: UserCardProps) => {
  const onCardSave = (user: User, weather: Weather) => {
    const storedCards = JSON.parse(
      localStorage.getItem('userCardsData') || '[]',
    );

    const updatedCards = [...storedCards, { user, weather }];
    localStorage.setItem('userCardsData', JSON.stringify(updatedCards));
  };

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md mr-10">
          <div className="relative">
            <img
              className="object-cover w-full h-64"
              src="https://s9.travelask.ru/uploads/post/000/031/075/main_image/facebook-8914d62843be1ab0fb0b70e9f8199732.jpg"
              alt="Article"
            />

            {saveBtn && (
              <button
                className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 absolute top-5 right-5"
                onClick={() => {
                  onCardSave(user, weather);
                }}
              >
                Save
              </button>
            )}
          </div>

          <div className="p-6">
            <div>
              <span className="text-xs font-medium text-blue-600 uppercase">
                {user.gender}
              </span>
              <span
                className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform hover:text-gray-600"
                role="link"
              >
                {user.location.city}, {user.location.country}
              </span>
              <p className="mt-2 text-sm text-gray-600">
                <span>
                  min {Math.min.apply(null, weather.hourly.temperature_2m)}°C
                </span>
                <span className="ml-3 mr-3 text-gray-800 font-semibold">
                  {weather.current_weather.temperature}°C
                </span>
                <span>
                  max {Math.max.apply(null, weather.hourly.temperature_2m)}°C
                </span>
              </p>
            </div>

            <div className="mt-4 flex flex-wrap">
              <div className="flex items-center">
                <div className="flex items-center">
                  <img
                    className="object-cover h-10 rounded-full"
                    src={user.picture.large}
                    alt="Avatar"
                  />
                  <span
                    className="mx-2 font-semibold text-gray-700"
                    role="link"
                  >
                    {user.name.first} {user.name.last}
                  </span>
                </div>
                <span className="mx-1 text-xs text-gray-600">{user.email}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
