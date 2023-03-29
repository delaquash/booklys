import axios from "axios";
import { useEffect, useState } from "react";

interface IData {
  id?: string;
  name: string;
  address: string;
  city: string;
  cheapestPrice: number;
  desc: string;
  featured: boolean;
  photos?: [];
  rating: number;
  rooms: string[];
  title: string;
  type: string;
  distance: string;
  price?: number;
  maxPeople?: number;
  roomNumbers?: number;
}

const useFetch = (url: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<IData | string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true)
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err: any) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err: any) {
      setError(err);
    }
    setLoading(false);
  };
  return { data, loading, error, reFetch };
};

export default useFetch;
