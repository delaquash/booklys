import axios from "axios";
import { useEffect, useState } from "react";
import "../Styles/FeaturedProperty.css";

const URL = "http://localhost:5000/api/v1/hotel?featured=false&limit=2";

interface IData {
  id: string;
  name: string;
  address: string;
  city: string;
  cheapestPrice: number;
  desc: string;
  featured: boolean;
  photos: string[];
  rating: number;
  rooms: string[];
  title: string;
  type: string;
  distance?: string;
  price?: number;
  maxPeople?: number;
  roomNumbers?: number;
}

const Featuredproperty: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<IData[]>([]);

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

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((data) => (
            <div className="fpitem" key={data.id}>
              <img
                className="fpImg"
                src={data.photos[0]}
                alt=""
              />
              <span className="fpName">{data.name}</span>
              <span className="fpCity">{data.city}</span>
              <span className="fpPrice">
                Starting price is {data.cheapestPrice}
              </span>
              {data.rating && (
                <div className="fpRating">
                  <button>{data.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Featuredproperty;
