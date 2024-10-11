import axios from "axios";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import { GET_ALL_ORDERS, GETALLCUSTOMERS_API } from "../../Constants/apiRoutes";
import { IoIosCall, IoIosSearch, IoMdMail } from "react-icons/io";
import { Combobox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Box } from "@mui/material";
import { Navigate } from "react-router-dom";
import LoadingAnimation from "../Loading/LoadingAnimation";

const Temp = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [totalOrders, setTotalOrders] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(2);
  const [searchName, setSearchName] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [results, setResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [errors, setErrors] = useState({});
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleCustomerSelect = useCallback((customer) => {
    setSelectedCustomer(customer);
  }, []);

  // const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  // const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const handleSearchInput = useCallback((e) => {
    const { value } = e.target;
    setSearchValue(value);
    fetchData(value);
  }, []);

  const handleCancel = useCallback(() => {
    console.log("Cancel clicked");
    // If you want to navigate away from the form, for example:
    // Navigate("/payments"); // This assumes you're using `react-router-dom` for navigation
  }, []);
  if (loading) return <LoadingAnimation />;

  const fetchData = useCallback(async (value) => {
    try {
      console.log("Fetching data in normal mode...");
      const response = await axios.get(GET_ALL_ORDERS, {
        params: {
          limit: 10,
          page: 1,
          searchText: value,
        },
      });

      const customers = response.data.customers;

      // Fetch orders based on the filtered customers
      const filteredOrders = await getAllOrders(0, 10, value);
      setProducts(filteredOrders.orders);
      setResults(customers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }, []);

  const getAllOrders = useCallback(async (pageNum, pageSize, search = "") => {
    try {
      const response = await axios.get(`${GET_ALL_ORDERS}`, {
        params: {
          page: pageNum + 1,
          limit: pageSize,
          SearchText: search,
        },
      });
      return {
        orders: response.data.data,
        totalCount: response.data.totalItems,
      };
    } catch (error) {
      console.error("Error fetching orders:", error);
      throw error;
    }
  }, []);

  const fetchOrders = useCallback(async () => {
    setLoading(true);
    try {
      const { orders, totalCount } = await getAllOrders(
        page,
        rowsPerPage,
        searchName
      );

      setProducts(orders);
      setTotalOrders(totalCount);
    } catch (error) {
      console.error("Failed to fetch orders", error);
    } finally {
      setLoading(false);
    }
  }, [page, rowsPerPage, searchName]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const paymentMethods = useMemo(() => ["Cash", "UPI", "Card"], []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="main-container">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr " }, // Ensure proper grid layout
          gap: 2, // Adjust spacing between items
          pt: 2,
          p: 3,
          alignContent: "center",
        }}
      >
        <div className="flex justify-center">
          <div className="w-1/3 flex justify-between    relative ">
            <input
              id="searchName"
              type="text"
              placeholder="Search by order number or customer name..."
              value={searchValue}
              onChange={handleSearchInput}
              onFocus={() => setIsFocused(true)}
              className="mt-0 h-8 pr-10 w-full border border-gray-300 rounded-md text-sm md:text-base pl-2"
            />
            <div className="absolute right-2 top-2 flex items-center pointer-events-none">
              <IoIosSearch aria-label="Search Icon" />
            </div>

            {/* Only show the dropdown when searchValue is not empty and input is focused */}
            <div
              className={`absolute flex-1 top-full mt-1 border-solid border-2 rounded-lg p-2 w-full bg-white z-10 ${
                searchValue && isFocused ? "block" : "hidden"
              }`}
              style={{
                maxHeight: "200px",
                minHeight: "100px",
                overflowY: "auto",
              }}
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
            >
              {results.length > 0 ? (
                <>
                  <div className="mb-2 text-sm text-gray-600">
                    {results.length} Result{results.length > 1 ? "s" : ""}
                  </div>

                  {/* Map over filtered results */}
                  {[
                    ...new Map(
                      results.map((result) => [result.CustomerID, result])
                    ).values(),
                  ].map((result) => (
                    <div
                      className="relative cursor-pointer flex flex-col p-2 hover:bg-gray-100 group"
                      key={result.CustomerID}
                      // onClick={() => handleCustomerSelect(result)}
                    >
                      <span className="font-medium">
                        {result.CustomerFirstName} {result.CustomerLastName}
                      </span>
                      <div className="flex items-center text-xs md:text-sm text-gray-500">
                        <IoIosCall
                          className="w-4 h-4 mr-1"
                          aria-label="Phone Icon"
                        />
                        <span>{result.PhoneNumber}</span>
                      </div>
                      <div className="flex items-center text-xs md:text-sm text-gray-500">
                        <IoMdMail
                          className="w-4 h-4 mr-1"
                          aria-label="Email Icon"
                        />
                        <span>
                          {result.CustomerEmail} {result.AddressID}
                        </span>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div className="p-2 overflow-clip text-gray-500">
                  No results found.
                </div>
              )}
            </div>
          </div>
        </div>
      </Box>
      {console.log(selectedCustomer, "dasfas")}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr " }, // Ensure proper grid layout
          gap: 2, // Adjust spacing between items
          pt: 2,
          p: 3,
        }}
      >
        {/* <div className="flex justify-center">
          <div className="flex flex-col gap-4 pt-1 sm:pt-2 w-3/4 bg-white color-white space-y-1 border border-gray-300 rounded-md p-2">
            <div className="flex justify-left text-lg font-medium text-gray-700">
              <h1 className="text-base">Payment Information</h1>
            </div>

            <div className="flex gap-10">
              <div className="sm:pt-2 w-full space-y-2 p-4">
                <div className="flex text-sm sm:text-xs font-medium text-gray-800">
                  <span className="w-1/2">Customer Name</span>
                  <span className="mr-20">:</span>
                  <span className="w-2/3">
                    {selectedCustomer?.CustomerName || ""}
                  </span>
                </div>
                <div className="flex text-sm sm:text-xs font-medium text-gray-700">
                  <span className="w-1/2">Order Number</span>
                  <span className="mr-20">:</span>
                  <span className="w-2/3">
                    {selectedCustomer?.OrderNumber || ""}
                  </span>
                </div>
                <div className="flex text-sm sm:text-xs font-medium text-gray-800">
                  <span className="w-1/2">Order Date</span>
                  <span className="mr-20">:</span>
                  <span className="w-2/3">
                    {selectedCustomer?.OrderDate || ""}
                  </span>
                </div>
              </div>

              <div className="sm:pt-2 w-full space-y-2 p-4">
                <div className="flex text-sm sm:text-xs font-medium text-gray-800">
                  <span className="w-1/2">Project Type</span>
                  <span className="mr-20">:</span>
                  <span className="w-2/3">{selectedCustomer?.Type || ""}</span>
                </div>
                <div className="flex text-sm sm:text-xs font-medium text-gray-800">
                  <span className="w-1/2">Advance</span>
                  <span className="mr-20">:</span>
                  <span className="w-2/3">
                    {selectedCustomer?.customerPhone || ""}
                  </span>
                </div>
                <div className="flex text-sm sm:text-xs font-medium text-gray-800">
                  <span className="w-1/2">Balance</span>
                  <span className="mr-20">:</span>
                  <span className="w-2/3">
                    {selectedCustomer?.customerPhone || ""}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr " }, // Ensure proper grid layout
          gap: 2, // Adjust spacing between items
          pt: 2,
          p: 3,
        }}
      >
        <div className="flex justify-center">
          <div className="flex flex-col gap-4 pt-1 sm:pt-2 w-3/4  color-white space-y-1  rounded-md p-2 bg-white color-white  border border-gray-300 ">
            <div className="flex gap-10">
              <div className="sm:pt-2 w-full space-y-2 p-4">
                <div className="flex justify-between flex-col sm:flex-row gap-2 sm:gap-0 ">
                  <label className="flex items-center w-full sm:w-1/4 text-xs font-medium text-gray-700">
                    Payment Method:
                  </label>
                  <Combobox
                    value={products.PaymentMethod}
                    // onChange={(value) =>
                    // handleChange ({ target: { name: "PaymentMethod", value } })
                    // }
                  >
                    <div className="relative w-full sm:w-2/4">
                      <Combobox.Input
                        className={`p-1 w-full border rounded-md ${
                          errors.PaymentMethod
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        displayValue={(option) => option || "Select a Type"}
                      />
                      <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                        <ChevronUpDownIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </Combobox.Button>
                      <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {["Cash", "UPI", "Card"].map((method) => (
                          <Combobox.Option
                            key={method}
                            value={method}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-blue-600 text-white"
                                  : "text-gray-900"
                              }`
                            }
                          >
                            {method}
                          </Combobox.Option>
                        ))}
                      </Combobox.Options>
                    </div>
                  </Combobox>
                  {errors.PaymentMethod && (
                    <p className="text-red-500 text-sm mt-1 sm:ml-4">
                      {errors.PaymentMethod}
                    </p>
                  )}
                </div>

                <div className="flex  justify-between flex-col sm:flex-row gap-2 sm:gap-0">
                  <label className="flex items-center text-xs w-full sm:w-1/4 text-left font-medium text-gray-700">
                    Card Number:
                  </label>
                  <input
                    type="text"
                    name="MaskedCardNumber"
                    value={
                      products.MaskedCardNumber
                        ? products.MaskedCardNumber.replace(/\d(?=\d{4})/g, "*")
                        : ""
                    }
                    // onChange={(e) => {
                    //   const value = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
                    //   if (value.length <= 16) {
                    //     handleChange ({
                    //       target: { name: "MaskedCardNumber", value },
                    //     });
                    //   }
                    // }}
                    className={`p-1 w-full sm:w-2/4 border rounded-md ${
                      errors.MaskedCardNumber
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {errors.MaskedCardNumber && (
                    <p className="text-red-500 text-sm mt-1 sm:ml-4">
                      {errors.MaskedCardNumber}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:pt-2 w-full space-y-2 p-4">
                <div className="flex justify-between flex-col sm:flex-row gap-2 sm:gap-0">
                  <label className="flex items-center text-xs w-full sm:w-1/4 text-left font-medium text-gray-700 ">
                    Payment Amount:
                  </label>
                  <input
                    type="number"
                    name="AdvanceAmount"
                    className="p-1 w-full sm:w-2/4 border rounded-md border-gray-300"
                    value={products.AdvanceAmount}
                    // onChange={// handleChange }
                    // className={`p-1 w-full sm:w-1/4 border rounded-md ${
                    //   errors.AdvanceAmount ? "border-red-500" : "border-gray-300"
                    // }`}
                  />
                  {errors.AdvanceAmount && (
                    <p className="text-red-500 text-sm mt-1 sm:ml-4">
                      {errors.AdvanceAmount}
                    </p>
                  )}
                </div>
                <div className="flex   justify-between flex-col sm:flex-row gap-2 sm:gap-0">
                  <label className="flex items-center text-xs w-full sm:w-1/4 text-left font-medium text-gray-700">
                    Comments:
                  </label>
                  <input
                    type="text"
                    name="PaymentComments"
                    className="p-1 w-full sm:w-2/4 border rounded-md border-gray-300"
                    value={products.PaymentComments}
                    // onChange={// handleChange }
                    // className={`p-1 w-full sm:w-1/4 border rounded-md ${
                    //   errors.PaymentComments ? "border-red-500" : "border-gray-300"
                    // }`}
                  />
                  {errors.PaymentComments && (
                    <p className="text-red-500 text-sm mt-1 sm:ml-4">
                      {errors.PaymentComments}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-10 flex justify-end gap-4">
          <div className="mt-6 flex justify-end gap-4">
            <button
              type="submit"
              className="button-base save-btn"
              // onClick={() => {
              //   savePayment();
              // }}
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="button-base cancel-btn"
            >
              Cancel
            </button>
          </div>
        </div>
      </Box>
      {loading && <LoadingAnimation />}
    </div>
  );
};

export default Temp;
