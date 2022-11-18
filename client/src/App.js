import "./App.css";
import React, { useEffect, useState } from "react";
import { getImage } from "./api";

const App = () => {
  const [imageList, setImageList] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const respData = await getImage();
      setImageList(respData.resources);
      setNextCursor(respData.next_cursor);
    };
    fetchData();
  }, []);

  const handleLoadMoreButtonClick = async () => {
    const respData = await getImage(nextCursor);
    setImageList((currentImageList) => [
      ...currentImageList,
      ...respData.resources,
    ]);
    setNextCursor(respData.next_cursor);
  };

  return (
    <div className="App">
      <h2>Photo Gallery</h2>

      <div className="search-bar">
        <input
          className="search"
          type="text"
          placeholder="enter a search value.."
        />
        <button className="btn btn-search">Search</button>
        <button className="btn btn-clear">Clear</button>
      </div>

      <div className="images-grid">
        {imageList.map((img) => (
          <img src={img.url} alt={img.public_id} />
        ))}
      </div>

      <div className="load-more">
        {nextCursor && (
          <button onClick={handleLoadMoreButtonClick}>Load more</button>
        )}
      </div>
    </div>
  );
};

export default App;
