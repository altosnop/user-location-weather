import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from '../../components/UserCard';

export interface User {
  id: {
    name: string;
  };
  name: {
    first: string;
    last: string;
  };
  gender: string;
  picture: {
    large: string;
  };
  email: string;
  location: {
    city: string;
    country: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
  };
}

export interface Weather {
  current_weather: {
    temperature: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
  };
}

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

  const getData = async () => {
    const userData = await axios.get<{ results: User[] }>(
      'https://randomuser.me/api/',
    );

    const latitude = userData.data.results[0].location.coordinates.latitude;
    const longitude = userData.data.results[0].location.coordinates.longitude;

    setUser(userData.data.results[0]);

    const weatherData =
      await axios.get<Weather>(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m
    `);

    setWeather(weatherData.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <UserCard user={user} weather={weather} />
    </div>
  );
};

export default MainPage;
