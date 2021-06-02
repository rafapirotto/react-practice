export const headers = () => {
  const token = process.env.REACT_APP_TOKEN;
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
