// // src/context/IdContext.js

// import React, { createContext, useState } from 'react';

// // Create a Context for the ID
// export const IdContext = createContext();

// // Create a provider component
// export const IdProvider = ({ children }) => {
//   const [generatedId, setGeneratedId] = useState(null);
//   const [customerId, setCustomerId] = useState(null);
//   const [orderDate, setOrderDate] = useState(null);

//   return (
//     <IdContext.Provider value={{ generatedId, setGeneratedId, customerId, setCustomerId,orderDate,setOrderDate}}>
//       {children}
//     </IdContext.Provider>
//   );
// };

// src/context/IdContext.js

import React, { createContext, useState, useEffect } from "react";

// Create a Context for the ID
export const IdContext = createContext();

// Create a provider component
export const IdProvider = ({ children }) => {
  const [generatedId, setGeneratedId] = useState(null);
  const [customerId, setCustomerId] = useState(null);
  const [orderDate, setOrderDate] = useState(null);
  const [designerName, setDesignerName] = useState(null); // New state for designer name
  const [desginerID, setDesginerID] = useState(null);
  const [statusID, setStatusID] = useState(null);

  // Log the designerName whenever it changes
  useEffect(() => {}, [designerName]);
  // Log the designerName whenever it changes
  useEffect(() => {}, [statusID]);

  useEffect(() => {}, [desginerID]);
  return (
    <IdContext.Provider
      value={{
        generatedId,
        setGeneratedId,
        customerId,
        setCustomerId,
        orderDate,
        setOrderDate,
        designerName, // Expose designerName
        setDesignerName,
        desginerID,
        setDesginerID, // Expose setDesignerName
        statusID,
        setStatusID,
      }}
    >
      {children}
    </IdContext.Provider>
  );
};
