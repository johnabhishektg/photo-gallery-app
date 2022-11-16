import "./App.css";
import React, { useEffect, useState } from "react";
import { getImage } from "./api";

const App = () => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const respData = await getImage();
      setImageList(respData.resources);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h2>Photo Gallery</h2>

      <div className="images-grid">
        {imageList.map((img) => (
          <img src={img.url} alt={img.public_id} />
        ))}
      </div>
    </div>
  );
};

export default App;
