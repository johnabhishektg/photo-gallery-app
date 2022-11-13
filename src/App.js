import "./App.css";
import { useState } from "react";
// import { getImages } from "./api";
import apiMock from "./api-mock.json";

function App() {
  const [imageList, setImageList] = useState(apiMock.resources);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const respData = await getImages();
  //     setImageList(respData.resources);
  //   };
  //   fetchData();
  // }, []);
  console.log(imageList);
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
