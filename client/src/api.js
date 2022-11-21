const API_URL = process.env.REACT_APP_API_URL;

console.log(API_URL);

export const getImage = async (nextCursor) => {
  const params = new URLSearchParams();

  if (nextCursor) {
    params.append("next_cursor", nextCursor);
  }

  const resp = await fetch(`${API_URL}/photos?${params}`);
  const respData = await resp.json();

  return respData;
};

export const searchImages = async (searchValue, nextCursor) => {
  const params = new URLSearchParams();
  params.append("expression", searchValue);

  if (nextCursor) {
    params.append("next_cursor", nextCursor);
  }

  const resp = await fetch(`${API_URL}/search?${params}`);
  const respData = await resp.json();

  return respData;
};
