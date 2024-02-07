import React, { useEffect, useState } from 'react';
import { User, Weather } from '../MainPage';
import UserCard from '../../components/UserCard';

interface SavedData {
  user: User;
  weather: Weather;
}

const SavedCardsPage = () => {
  const [data, setData] = useState<SavedData[]>([]);
  const [trigger, setTrigger] = useState<number>(0);

  const clearStorage = () => {
    localStorage.clear();
    setTrigger(trigger + 1);
  };

  useEffect(() => {
    const storedCards = JSON.parse(
      localStorage.getItem('userCardsData') || '[]',
    );

    setData(storedCards);
  }, []);

  return (
    <div>
      <h1>Saved Cards Page</h1>
      <button onClick={clearStorage}>Clear storage</button>
      {data.map((card, i) => (
        <UserCard
          key={i}
          user={card.user}
          weather={card.weather}
          saveBtn={false}
        />
      ))}
    </div>
  );
};

export default SavedCardsPage;
