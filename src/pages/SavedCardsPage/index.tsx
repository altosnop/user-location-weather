import React, { useEffect, useState } from 'react';
import UserCard from '../../components/UserCard';
import { User, Weather } from '../../types/types';

interface SavedData {
  user: User;
  weather: Weather;
}

const SavedCardsPage = () => {
  const [data, setData] = useState<SavedData[]>([]);

  const clearStorage = () => {
    localStorage.clear();
    setData([]);
  };

  useEffect(() => {
    const storedCards = JSON.parse(
      localStorage.getItem('userCardsData') || '[]',
    );

    setData(storedCards);
  }, []);

  return (
    <div>
      <button
        className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 absolute top-5 right-5"
        onClick={clearStorage}
      >
        Clear storage
      </button>
      <div className="flex flex-wrap p-5">
        {data.map((card, i) => (
          <UserCard
            key={i}
            user={card.user}
            weather={card.weather}
            saveBtn={false}
          />
        ))}
      </div>
    </div>
  );
};

export default SavedCardsPage;
