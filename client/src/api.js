const API_URL = process.env.REACT_APP_API_URL;

console.log(API_URL);

export const getImage = async () => {
  const resp = await fetch(`${API_URL}/photos`);
  const respData = await resp.json();

  return respData;
};
