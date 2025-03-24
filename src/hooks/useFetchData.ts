import { useState, useEffect } from "react";

const useFetchData = <T>(endpoint: string, page: number) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const apiUrl = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${apiUrl}/${endpoint}?page=${page}&limit=100`
        );
        const result: T[] = await response.json();
        setData((prevData) => [...prevData, ...result]);
        if (result.length < 100) {
          setHasMore(false);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error("An unknown error occurred"));
        }
      } finally {
        setLoading(false);
      }
    };

    if (hasMore) {
      fetchData();
    }
  }, [endpoint, page, hasMore]);

  return { data, loading, error, hasMore };
};

export default useFetchData;
