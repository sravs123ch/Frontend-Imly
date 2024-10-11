import axios from "axios";
import React, { useEffect, useState } from "react";
import { GET_ALL_ORDERS } from "../../Constants/apiRoutes";
import { IoIosSearch } from "react-icons/io";

const Temp = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalOrders, setTotalOrders] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(2);
  const [searchName, setSearchName] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [results, setResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  console.log(products)

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const [value, setValue] = useState({
    startDate: "",
    endDate: "",
  });
  const handleSearchInput = (e) => {
    const { value } = e.target;
    setSearchValue(value);
    fetchData(value); // Trigger the search based on input value
  };

  const fetchData = async (value) => {
    try {
      // If isEditMode is true, return early and do not proceed with the data fetching

      console.log("Fetching data in normal mode...");

      let page = 1;
      let pageSize = 10;

      let allResults = [];
      let hasMoreData = true;

      while (hasMoreData) {
        const response = await axios.get(GETALLCUSTOMERS_API, {
          params: {
            limit: pageSize,
            page: page,
            searchText: value,
          },
        });

        const customers = response.data.customers;
        allResults = [...allResults, ...customers];

        // Determine if there are more pages to fetch
        if (customers.length < pageSize) {
          hasMoreData = false;
        } else {
          page++;
        }
      }

      // Filter the combined results
      const filteredUsers = allResults.filter((customer) => {
        return (
          (value &&
            customer &&
            customer.CustomerFirstName &&
            customer.CustomerFirstName.toLowerCase().includes(
              value.toLowerCase()
            )) ||
          (customer.CustomerLastName &&
            customer.CustomerLastName.toLowerCase().includes(
              value.toLowerCase()
            )) ||
          (customer.CustomerEmail &&
            customer.CustomerEmail.toLowerCase().includes(
              value.toLowerCase()
            )) ||
          (customer.PhoneNumber &&
            customer.PhoneNumber.toLowerCase().includes(value.toLowerCase())) ||
          (customer.AddressLine1 &&
            customer.AddressLine1.toLowerCase().includes(
              value.toLowerCase()
            )) ||
          (customer.AddressLine2 &&
            customer.AddressLine2.toLowerCase().includes(
              value.toLowerCase()
            )) ||
          (customer.City &&
            customer.City.toLowerCase().includes(value.toLowerCase())) ||
          (customer.State &&
            customer.State.toLowerCase().includes(value.toLowerCase())) ||
          (customer.Country &&
            customer.Country.toLowerCase().includes(value.toLowerCase())) ||
          (customer.Zipcode &&
            customer.Zipcode.toLowerCase().includes(value.toLowerCase()))
        );
      });

      setResults(filteredUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const getAllOrders = async (
    pageNum,
    pageSize,
    search = "",
    storeID = "",
    startDate = "",
    endDate = ""
  ) => {
    try {
      const response = await axios.get(`${GET_ALL_ORDERS}`, {
        params: {
          page: pageNum + 1,
          limit: pageSize,
          SearchText: search,
          StoreID: storeID,
          StartDate: startDate,
          EndDate: endDate,
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
  };
  const fetchOrders = async () => {
    setLoading(true);
    try {
      const { orders, totalCount } = await getAllOrders(
        page,
        rowsPerPage,
        searchName,
        value.startDate,
        value.endDate
      );

      setProducts(orders);
      setTotalOrders(totalCount);
    } catch (error) {
      console.error("Failed to fetch orders", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, [page, rowsPerPage, searchName, value.startDate, value.endDate]);

  return (
    <div className="main-container">
      <div className="w-full flex justify-between sm:pt-1 space-y-1 p-1 relative">
        <input
          id="searchName"
          type="text"
          placeholder="Search by Name..."
          value={searchValue}
          onChange={handleSearchInput}
          onFocus={() => setIsFocused(true)}
          className="mt-0 h-8 pr-10 w-4/5 border border-gray-300 rounded-md text-sm md:text-base pl-2"
        />
        <div className="absolute right-[54%] top-3 flex items-center pr-3 pointer-events-none">
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
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {results.length > 0 ? (
            <>
              <div className="mb-2 text-sm text-gray-600">
                {results.length} Result
                {results.length > 1 ? "s" : ""}
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
                  onClick={() => handleCustomerSelect(result)}
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
                      {result.CustomerEmail}
                      {result.AddressID}
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

      <div className="flex flex-col gap-4 pt-1 sm:pt-2 w-full bg-white color-white space-y-1 border border-gray-300 rounded-md p-2">
        <div className="flex justify-left text-lg font-medium text-gray-700">
          <h2>Payment Information</h2>
        </div>

        <div className="flex gap-10">
          <div className="sm:pt-2 w-full space-y-2 p-4">
            <div className="flex text-sm sm:text-xs font-medium text-gray-800">
              <span className="w-1/2">Customer Name</span>
              <span className="mr-20">:</span>
              <span className="w-2/3">{products.CustomerName}</span>
            </div>
            <div className="flex text-sm sm:text-xs font-medium text-gray-700">
              <span className="w-1/2">Order Number</span>
              <span className="mr-20">:</span>
              <span className="w-2/3">{products.OrderNumber}</span>
            </div>
            <div className="flex text-sm sm:text-xs font-medium text-gray-800">
              <span className="w-1/2">Order Date</span>
              <span className="mr-20">:</span>
              <span className="w-2/3">{products.OrderDate}</span>
            </div>
            <div className="flex text-sm sm:text-xs font-medium text-gray-800">
              <span className="w-1/2">Project Type</span>
              <span className="mr-20">:</span>
              <span className="w-2/3">{products.Type}</span>
            </div>
          </div>

          <div className="sm:pt-2 w-full space-y-2 p-4">
            <div className="flex text-sm sm:text-xs font-medium text-gray-800">
              <span className="w-1/2">Total Amount</span>
              <span className="mr-20">:</span>
              <span className="w-2/3">{products.TotalAmount}</span>
            </div>
            <div className="flex text-sm sm:text-xs font-medium text-gray-800">
              <span className="w-1/2">Advance</span>
              <span className="mr-20">:</span>
              <span className="w-2/3">{products.customerPhone}</span>
            </div>
            <div className="flex text-sm sm:text-xs font-medium text-gray-800">
              <span className="w-1/2">Balance</span>
              <span className="mr-20">:</span>
              <span className="w-2/3">{products.customerPhone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temp;
