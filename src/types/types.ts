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
