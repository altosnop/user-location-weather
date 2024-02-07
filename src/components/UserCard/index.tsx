import React from 'react';
import { User, Weather } from '../../pages/MainPage';

interface UserCardProps {
  user: User;
  weather: Weather;
  saveBtn?: boolean;
}

const UserCard = ({ user, weather, saveBtn = true }: UserCardProps) => {
  const onCardSave = (user: User, weather: Weather) => {
    const storedCards = JSON.parse(
      localStorage.getItem('userCardsData') || '[]',
    );

    const updatedCards = [...storedCards, { user, weather }];
    localStorage.setItem('userCardsData', JSON.stringify(updatedCards));
  };

  return (
    <div className="border-2">
      <img src={user.picture.large} alt={user.name.first} />
      <h1>
        {user.name.first} {user.name.last}
      </h1>
      <p>{user.gender}</p>
      <a href={`mailto:${user.email}`}>{user.email}</a>
      <p>
        {user.location.city}, {user.location.country}
      </p>
      <div>
        <span>{Math.min.apply(null, weather.hourly.temperature_2m)}</span>
        <b>{weather.current_weather.temperature}</b>
        <span>{Math.max.apply(null, weather.hourly.temperature_2m)}</span>
      </div>
      {saveBtn && (
        <button
          onClick={() => {
            onCardSave(user, weather);
          }}
        >
          Save
        </button>
      )}
    </div>
  );
};

export default UserCard;
