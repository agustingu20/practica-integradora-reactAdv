import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [dataFetch, setDataFetch] = useState({
    data: null,
    loading: true,
    error: null,
  });

  const getData = async () => {
    const { data } = await axios(url);
    setDataFetch({
      data,
      loading: false,
      error: null,
    });
  };
  useEffect(() => {
    getData();
  }, [url]);
  return dataFetch;
};

export default useFetch;