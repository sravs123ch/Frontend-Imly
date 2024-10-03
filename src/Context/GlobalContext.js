

// import React, { createContext, useState, useEffect } from 'react';
// import { GETALLCUSTOMERS_API,GET_ALL_ORDERS } from '../../src/Constants/apiRoutes';

// const GlobalContext = createContext();

// const GlobalProvider = ({ children }) => {

//   const [products, setProducts] = useState([]);
//   const [customers, setCustomers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCustomers = async () => {
//       try {
//         const response = await fetch(GETALLCUSTOMERS_API);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setCustomers(data.customers || []); // Ensure it's an array
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     fetchCustomers();
//   }, []); // Pass dependencies if necessary
  
  


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch
//           // "https://imlystudios-backend-mqg4.onrender.com/api/orders/getAllOrders?page=1&limit=10"
//           // GET_ALL_ORDERS
//           (GET_ALL_ORDERS, {
//             params: {
//               page: 1,
//               limit: 10,
//             },
//           });
      
//         const result = await response.json();
//         console.log('Fetched result:', result);
//         // Use result.data instead of result.orders
//         setProducts(result.data || []);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
  
//     fetchData();
//   }, []);
  

//   return (
//     <GlobalContext.Provider value={{ customers,products, loading, error }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };

// export { GlobalContext, GlobalProvider };


import React, { createContext, useState, useEffect } from 'react';
import { GETALLCUSTOMERS_API } from '../../src/Constants/apiRoutes';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  return (
    <GlobalContext.Provider value={{ }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };