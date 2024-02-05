import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Styles/PropertyList.css";

const URL = "http://localhost:5000/api/v1/hotel/findByType";

interface IPList {
  type: string;
  count: string;
}

const PropertyList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<IPList[]>([]);

  useEffect(() => {
    const resList = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(URL, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setData(data);
      } catch (err: any) {
        setError(err);
      }
      setLoading(false);
    };
    resList();
  }, [URL]);

  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  ];

  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {images.map((img, i) => (
            <div className="pListItem" key={i}>
              <img src={img} alt="" className="pListImg" />

              <div className="pListTitles">
                {/* <h1>{data.type}</h1> */}
                <h2>{/* {data.count} {data.type} */}</h2>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
