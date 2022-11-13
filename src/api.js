const API_URL = process.env.REACT_APP_API_URL;

export const getImages = async () => {
  const response = await fetch(`${API_URL}/photos`);
  const respData = await response.json();

  return respData;
};
