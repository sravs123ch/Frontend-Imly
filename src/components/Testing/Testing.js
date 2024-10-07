// import React, { useContext, useState, useEffect } from "react";
// import { DataContext } from "../../Context/DataContext"; // Adjust the path as necessary
// import { Combobox } from "@headlessui/react";

// const Testing = () => {
//   //   const { citiesData, statesData, countriesData, storesData, loading } =
//   //     useContext(DataContext);
//   //   const [stores, setStores] = useState([]);
//   //   const [selectedStore, setSelectedStore] = useState("");
//   //   useEffect(() => {
//   //     if (!loading && countriesData && statesData && citiesData && storesData) {
//   //       setCountries(countriesData.data || []);
//   //       setStates(statesData.data || []);
//   //       setCities(citiesData.data || []);
//   //       setStores(storesData || []);
//   //     }
//   //   }, [countriesData, statesData, citiesData, storesData, loading]);

//   const { citiesData, statesData, countriesData } = useContext(DataContext);
//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [selectedCountry, setSelectedCountry] = useState("");
//   const [selectedState, setSelectedState] = useState("");
//   const [selectedCity, setSelectedCity] = useState("");

//   useEffect(() => {
//     if (countriesData && statesData && citiesData) {
//       setCountries(countriesData.data || []);
//       setStates(statesData.data || []);
//       setCities(citiesData.data || []);
//     }
//   }, [countriesData, statesData, citiesData]);

//   // Filter states based on selected country
//   const filteredStates = states.filter(
//     (state) => state.CountryID === selectedCountry.CountryID
//   );

//   // Filter cities based on selected state
//   const filteredCities = cities.filter(
//     (city) => city.StateID === selectedState.StateID
//   );

//   //   if (loading) {
//   //     return <div>Loading...</div>;
//   //   }

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="flex flex-col space-y-4">
//         {/* Countries Combobox */}
//         <div className="relative">
//           <Combobox value={selectedCountry} onChange={setSelectedCountry}>
//             <Combobox.Label className="block text-sm font-medium text-gray-700">
//               Countries
//             </Combobox.Label>
//             <Combobox.Button className="mt-1 block w-full border border-gray-300 rounded-md text-left px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
//               {selectedCountry.CountryName || "Select Country"}
//             </Combobox.Button>
//             <Combobox.Options className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto shadow-lg">
//               {countries.length > 0 ? (
//                 countries.map((country) => (
//                   <Combobox.Option
//                     key={country.CountryID}
//                     value={country}
//                     className={({ active }) =>
//                       `px-3 py-2 cursor-pointer ${
//                         active ? "bg-blue-500 text-white" : "text-gray-900"
//                       }`
//                     }
//                   >
//                     {country.CountryName}
//                   </Combobox.Option>
//                 ))
//               ) : (
//                 <li className="px-3 py-2 text-gray-500">
//                   No countries available
//                 </li>
//               )}
//             </Combobox.Options>
//           </Combobox>
//         </div>

//         {/* States Combobox */}
//         <div className="relative">
//           <Combobox value={selectedState} onChange={setSelectedState}>
//             <Combobox.Label className="block text-sm font-medium text-gray-700">
//               States
//             </Combobox.Label>
//             <Combobox.Button className="mt-1 block w-full border border-gray-300 rounded-md text-left px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
//               {selectedState.StateName || "Select State"}
//             </Combobox.Button>
//             <Combobox.Options className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto shadow-lg">
//               {filteredStates.length > 0 ? (
//                 filteredStates.map((state) => (
//                   <Combobox.Option
//                     key={state.StateID}
//                     value={state}
//                     className={({ active }) =>
//                       `px-3 py-2 cursor-pointer ${
//                         active ? "bg-blue-500 text-white" : "text-gray-900"
//                       }`
//                     }
//                   >
//                     {state.StateName}
//                   </Combobox.Option>
//                 ))
//               ) : (
//                 <li className="px-3 py-2 text-gray-500">No states available</li>
//               )}
//             </Combobox.Options>
//           </Combobox>
//         </div>

//         {/* Cities Combobox */}
//         <div className="relative">
//           <Combobox value={selectedCity} onChange={setSelectedCity}>
//             <Combobox.Label className="block text-sm font-medium text-gray-700">
//               Cities
//             </Combobox.Label>
//             <Combobox.Button className="mt-1 block w-full border border-gray-300 rounded-md text-left px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
//               {selectedCity.CityName || "Select City"}
//             </Combobox.Button>
//             <Combobox.Options className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto shadow-lg">
//               {filteredCities.length > 0 ? (
//                 filteredCities.map((city) => (
//                   <Combobox.Option
//                     key={city.CityID}
//                     value={city}
//                     className={({ active }) =>
//                       `px-3 py-2 cursor-pointer ${
//                         active ? "bg-blue-500 text-white" : "text-gray-900"
//                       }`
//                     }
//                   >
//                     {city.CityName}
//                   </Combobox.Option>
//                 ))
//               ) : (
//                 <li className="px-3 py-2 text-gray-500">No cities available</li>
//               )}
//             </Combobox.Options>
//           </Combobox>
//         </div>

//         {/* Stores Combobox
//         <div className="relative">
//           <Combobox value={selectedStore} onChange={setSelectedStore}>
//             <Combobox.Label className="block text-sm font-medium text-gray-700">
//               Stores
//             </Combobox.Label>
//             <Combobox.Button className="mt-1 block w-full border border-gray-300 rounded-md text-left px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
//               {selectedStore.StoreName || "Select Store"}
//             </Combobox.Button>
//             <Combobox.Options className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto shadow-lg">
//               {stores.length > 0 ? (
//                 stores.map((store) => (
//                   <Combobox.Option
//                     key={store.StoreID}
//                     value={store}
//                     className={({ active }) =>
//                       `px-3 py-2 cursor-pointer ${
//                         active ? "bg-blue-500 text-white" : "text-gray-900"
//                       }`
//                     }
//                   >
//                     {store.StoreName}
//                   </Combobox.Option>
//                 ))
//               ) : (
//                 <li className="px-3 py-2 text-gray-500">No stores available</li>
//               )}
//             </Combobox.Options>
//           </Combobox>
//         </div> */}

//       </div>
//     </div>
//   );
// };

// export default Testing;
import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../Context/DataContext"; // Adjust the path as necessary
import { Combobox } from "@headlessui/react";

const Testing = () => {
  const { citiesData, statesData, countriesData } = useContext(DataContext);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    if (countriesData && statesData && citiesData) {
      setCountries(countriesData.data || []);
      setStates(statesData.data || []);
      setCities(citiesData.data || []);
      setSelectedState("");
      setSelectedCity("");
    }
  }, [countriesData, statesData, citiesData, selectedCountry]);

  useEffect(() => {
    if (statesData) {
      setSelectedCity("");
    }
  }, [statesData, selectedState]);

  // Filter states based on selected country
  const filteredStates = states.filter(
    (state) => state.CountryID === selectedCountry.CountryID
  );

  // Filter cities based on selected state
  const filteredCities = cities.filter(
    (city) => city.StateID === selectedState.StateID
  );

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
      <div className="flex flex-col space-y-4">
        {/* Countries Combobox */}
        <div className="relative">
          <Combobox value={selectedCountry} onChange={setSelectedCountry}>
            <Combobox.Label className="block text-sm font-medium text-gray-700">
              Countries
            </Combobox.Label>
            <Combobox.Button className="mt-1 block w-full border border-gray-300 rounded-md text-left px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              {selectedCountry.CountryName || "Select Country"}
            </Combobox.Button>
            <Combobox.Options className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto shadow-lg">
              {countries.length > 0 ? (
                countries.map((country) => (
                  <Combobox.Option
                    key={country.CountryID}
                    value={country}
                    className={({ active }) =>
                      `px-3 py-2 cursor-pointer ${
                        active ? "bg-blue-500 text-white" : "text-gray-900"
                      }`
                    }
                  >
                    {country.CountryName}
                  </Combobox.Option>
                ))
              ) : (
                <li className="px-3 py-2 text-gray-500">
                  No countries available
                </li>
              )}
            </Combobox.Options>
          </Combobox>
        </div>

        {/* States Combobox */}
        <div className="relative">
          <Combobox value={selectedState} onChange={setSelectedState}>
            <Combobox.Label className="block text-sm font-medium text-gray-700">
              States
            </Combobox.Label>
            <Combobox.Button className="mt-1 block w-full border border-gray-300 rounded-md text-left px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              {selectedState.StateName || "Select State"}
            </Combobox.Button>
            <Combobox.Options className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto shadow-lg">
              {filteredStates.length > 0 ? (
                filteredStates.map((state) => (
                  <Combobox.Option
                    key={state.StateID}
                    value={state}
                    className={({ active }) =>
                      `px-3 py-2 cursor-pointer ${
                        active ? "bg-blue-500 text-white" : "text-gray-900"
                      }`
                    }
                  >
                    {state.StateName}
                  </Combobox.Option>
                ))
              ) : (
                <li className="px-3 py-2 text-gray-500">No states available</li>
              )}
            </Combobox.Options>
          </Combobox>
        </div>

        {/* Cities Combobox */}
        <div className="relative">
          <Combobox value={selectedCity} onChange={setSelectedCity}>
            <Combobox.Label className="block text-sm font-medium text-gray-700">
              Cities
            </Combobox.Label>
            <Combobox.Button className="mt-1 block w-full border border-gray-300 rounded-md text-left px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              {selectedCity.CityName || "Select City "}
            </Combobox.Button>
            <Combobox.Options className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto shadow-lg">
              {filteredCities.length > 0 ? (
                filteredCities.map((city) => (
                  <Combobox.Option
                    key={city.CityID}
                    value={city}
                    className={({ active }) =>
                      `px-3 py-2 cursor-pointer ${
                        active ? "bg-blue-500 text-white" : "text-gray-900"
                      }`
                    }
                  >
                    {city.CityName}
                  </Combobox.Option>
                ))
              ) : (
                <li className="px-3 py-2 text-gray-500">No cities available</li>
              )}
            </Combobox.Options>
          </Combobox>
        </div>
      </div>
    </div>
  );
};

export default Testing;
