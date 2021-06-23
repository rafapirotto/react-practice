export const headers = () => {
  const token = getToken();

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const randomIntegerBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomIndex = (array) => Math.floor(Math.random() * array.length);

export const getToken = () => localStorage.getItem('token');

export const isAuthenticated = () => getToken() !== null;

export const saveUserDataInLocalStorage = (token) => localStorage.setItem('token', token);

export const logout = () => localStorage.removeItem('token');
