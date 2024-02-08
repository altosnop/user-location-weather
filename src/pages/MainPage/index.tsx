import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from '../../components/UserCard';
import { User, Weather } from '../../types/types';

const MainPage = () => {
  const [user, setUser] = useState<User>({
    id: {
      name: '',
    },
    name: {
      first: '',
      last: '',
    },
    gender: '',
    picture: {
      large: '',
    },
    email: '',
    location: {
      city: '',
      country: '',
      coordinates: {
        latitude: '',
        longitude: '',
      },
    },
  });
  const [weather, setWeather] = useState<Weather>({
    current_weather: {
      temperature: '',
    },
    hourly: {
      time: [],
      temperature_2m: [],
    },
  });
  const [loading, setLoading] = useState<boolean>(false);

  const getData = async () => {
    setLoading(true);

    try {
      const userData = await axios.get<{ results: User[] }>(
        'https://randomuser.me/api/',
      );

      const latitude = userData.data.results[0].location.coordinates.latitude;
      const longitude = userData.data.results[0].location.coordinates.longitude;

      const weatherData =
        await axios.get<Weather>(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m
      `);

      setUser(userData.data.results[0]);
      setWeather(weatherData.data);
      setLoading(false);
    } catch (error) {
      console.log('Error!');
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-5">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <UserCard user={user} weather={weather} loading={loading} />
      )}
    </div>
  );
};

export default MainPage;
