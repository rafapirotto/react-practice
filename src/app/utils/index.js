export const headers = () => {
  const token = process.env.REACT_APP_TOKEN;
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const randomIntegerBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomIndex = (array) => Math.floor(Math.random() * array.length);

export const isAuthenticated = () => localStorage.getItem('token');
