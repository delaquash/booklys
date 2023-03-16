import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true)
      try {
        const res =await axios.get(url);
        setData(res.data);
      } catch (err:any) {
        setError(err)
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
    } catch (err:any) {
      setError(err);
    }
    setLoading(false);
  };
  return { data, loading, error, reFetch}
};

export default useFetch;
