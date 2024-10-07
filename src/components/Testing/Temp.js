import React from "react";

const Temp = () => {
  const handleCustomerFormChange = (e) => {
    const { name, value } = e.target;
    setCustomerFormData({
      ...customerFormData,
      [name]: value,
    });
  };
  return (
    <>
      <input
        type="text"
        name="FirstName"
        value={customerFormData.CustomerFirstName}
        onChange={handleCustomerFormChange}
        className={`p-1 w-full border rounded-md ${
          error ? "border-red-500" : "border-gray-400"
        }`}
      />

      <input
        type="text"
        name="PhoneNumber"
        value={customerFormData.PhoneNumber}
        onChange={handleCustomerFormChange}
        className={`p-1 w-full border rounded-md ${
          error ? "border-red-500" : "border-gray-400"
        }`}
      />
    </>
  );
};

export default Temp;
