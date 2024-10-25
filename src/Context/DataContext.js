import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [citiesData, setCitiesData] = useState([]);
  const [statesData, setStatesData] = useState([]);
  const [countriesData, setCountriesData] = useState([]);
  const [storesData, setStoresData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDataFromLocalStorage = (key, setter) => {
    const data = localStorage.getItem(key);
    if (data) {
      try {
        const parsedData = JSON.parse(data);
        setter(Array.isArray(parsedData) ? parsedData : []);
      } catch (error) {
        console.error(`Error parsing ${key} data from localStorage:`, error);
        setter([]);
      }
    } else {
      console.warn(`No ${key} data found in localStorage`);
      setter([]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      fetchDataFromLocalStorage("citiesData", setCitiesData);
      fetchDataFromLocalStorage("statesData", setStatesData);
      fetchDataFromLocalStorage("countriesData", setCountriesData);
      fetchDataFromLocalStorage("storesData", setStoresData);

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{ citiesData, statesData, countriesData, storesData, loading }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
