import "./App.css";
import React, { useEffect, useState } from "react";
import { getImage, searchImages } from "./api";

const App = () => {
  const [imageList, setImageList] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [searchValue, setSearchValue] = useState("");

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const respData = await searchImages(searchValue, nextCursor);
    setImageList(respData.resources);
    setNextCursor(respData.next_cursor);
  };

  return (
    <div className="App">
      <h2>Photo Gallery</h2>

      <form onSubmit={handleSubmit} className="search-bar">
        <input
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          required="required"
          className="search"
          type="text"
          placeholder="enter a search value.."
        />
        <button type="submit" className="btn btn-search">
          Search
        </button>
        <button
          onClick={() => {
            setSearchValue("");
          }}
          type="button"
          className="btn btn-clear"
        >
          Clear
        </button>
      </form>

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
