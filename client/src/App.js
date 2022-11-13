import "./App.css";
import images from "./api-mock.json";
import { useState } from "react";

function App() {
  const [imageList, setImageList] = useState(images.resources);
  return (
    <div className="App">
      <h2>Photo Gallery</h2>

      <div className="images-grid">
        {imageList.map((img) => (
          <img src={img.url} alt={img.asset_id} />
        ))}
      </div>
    </div>
  );
}

export default App;
