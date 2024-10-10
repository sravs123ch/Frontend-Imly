import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { PaymentContext } from "../../Context/paymentContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS for the datepicker
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Combobox } from "@headlessui/react";
import {
  GET_ALL_PAYMENTS_API,
  CREATEORUPDATE_PAYMENT_API,
  GET_ALL_ORDERS,
} from "../../../src/Constants/apiRoutes";
import { IoIosSearch } from "react-icons/io";
import { IoIosCall, IoMdMail } from "react-icons/io";

function Paymentform() {
  const navigate = useNavigate();
  const location = useLocation();
  const { paymentDetails } = useContext(PaymentContext);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filteredPayments, setFilteredPayments] = useState([]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const isEditMode = Boolean(
    location.state?.paymentDetails?.payment || paymentDetails?.payment
  );
  const [payments, setPayments] = useState([]);
  // Define the available payment methods here
  const paymentMethods = [
    "UPI",
    "AmazonPay",
    "PayPal",
    "Credit Card",
    "Debit Card",
    "Cash",
  ];
  const paymentStatuses = ["Processing", "Completed", "Failed"];

  // Define state for loading and error
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchName, setSearchName] = useState("");

  const [formData, setFormData] = useState({
    TenantID: 1,
    PaymentMethod: "",
    PaymentDate: new Date(),
    OrderNumber: "",
    CustomerName: "",
    TotalAmount: "",
    AdvanceAmount: "",
    BalanceAmount: "",
    PaymentComments: "",
    PaymentStatus: "Processing",
    CustomerID: "",
    OrderID: "",
  });

  useEffect(() => {
    if (isEditMode) {
      const orderId =
        location.state?.paymentDetails?.payment?.OrderID ||
        paymentDetails?.payment?.OrderID;
      if (orderId) {
        setLoading(true);
        axios
          .get(`${GET_ALL_ORDERS}${orderId}`)
          .then((response) => {
            const payment = response.data;
            setFormData({
              TenantID: payment.TenantID || "",
              PaymentMethod: payment.PaymentMethod || "",
              PaymentDate: new Date(payment.PaymentDate) || new Date(), // Format date as a Date object
              OrderNumber: payment.OrderID || "",
              CustomerName: payment.CustomerID || "",
              TotalAmount: payment.TotalAmount || "",
              AdvanceAmount: payment.AdvanceAmount || "",
              BalanceAmount: payment.BalenceAmount || "",
              PaymentComments: payment.PaymentComments || "",
              PaymentStatus: payment.PaymentStatus || "Processing",
              CustomerID: payment.CustomerID || "",
              OrderID: payment.OrderID || "",
            });
            setError(null); // Clear any previous error
          })
          .catch((err) => {
            setError("Failed to fetch payment details.");
            console.error("Error fetching payment details:", err);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    }
  }, [
    isEditMode,
    location.state?.paymentDetails?.payment,
    paymentDetails?.payment,
  ]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      PaymentDate: date, // Set the date when the user selects a new date
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // Prepare the payment data for submission
    const paymentData = {
      TenantID: formData.TenantID,
      PaymentMethod: formData.PaymentMethod,
      PaymentDate: new Date(formData.PaymentDate),
      OrderID: formData.OrderID,
      OrderNumber: formData.OrderNumber,
      CustomerID: formData.CustomerName,
      TotalAmount: formData.TotalAmount,
      AdvanceAmount: formData.AdvanceAmount || "0.00",
      BalanceAmount: formData.BalanceAmount || "0.00",
      PaymentComments: formData.PaymentComments || "",
      PaymentStatus: formData.PaymentStatus,
      CustomerID: formData.CustomerID,
      OrderID: formData.OrderID,
    };
    console.log("Submitting payment data:", paymentData); // Log the data for debugging

    setLoading(true); // Set loading to true while submitting

    try {
      const response = await axios.post(
        CREATEORUPDATE_PAYMENT_API,
        paymentData
      );

      if (response.data?.StatusCode === "SUCCESS") {
        // Redirect the user to the payments list or success page
        navigate("/Payments");
      } else {
        throw new Error(response.data?.message || "Payment submission failed.");
      }
    } catch (err) {
      setError(`Failed to submit the payment: ${err.message}`);
      console.error("Error submitting payment:", err); // Log the error
    } finally {
      setLoading(false); // Stop the loading state
    }
  };

  const handleCancel = () => {
    navigate("/Payments");
  };
  const getAllPayments = async (search = "") => {
    try {
      const response = await axios.get(GET_ALL_ORDERS, {
        params: {
          searchText: search,
        },
      });
      return {
        payments: response.data.data || [],
        totalCount: response.data.totalRecords || 0,
      };
    } catch (error) {
      console.error("Error fetching payments:", error);
      throw error;
    }
  };

  const handleSearchChange = (e) => {
    const query = e.target.value.trim().toLowerCase(); // Trim and convert to lowercase
    setSearchName(query);

    if (query.length >= 3) {
      // Trigger search only after 3 characters or more
      getAllPayments(query)
        .then((response) => {
          setPayments(response.payments); // Store the API response
        })
        .catch((error) => {
          console.error("Error fetching orders:", error);
          setPayments([]); // Clear orders on error
        });
    } else {
      setPayments([]); // Clear orders if the query is less than 3 characters
    }
  };
  const handlePaymentClick = (payment) => {
    setFormData({
      TenantID: payment.TTenantID,
      PaymentMethod: payment.PaymentMethod || "", // Default if not available
      PaymentDate: payment.CreatedAt || "", // Using CreatedAt as PaymentDate; adjust if needed
      OrderID: payment.OrderID,
      OrderNumber: payment.OrderNumber, // OrderNumber
      CustomerID: payment.CustomerID,
      TotalAmount: payment.TotalAmount,
      AdvanceAmount: payment.AdvanceAmount || "0.00", // Default to 0 if not provided
      BalanceAmount: payment.BalanceAmount || "0.00", // Default to 0 if not provided
      PaymentComments: payment.Comments || "", // Comments from the order
      PaymentStatus: payment.OrderStatus || "", // Payment status from OrderStatus
    });
  };

  const handlePaymentChange = (e) => {
    const query = e.target.value.trim().toLowerCase();
    setSearchName(query);

    // Fetch payments logic
    if (query.length >= 5) {
      getAllPayments(query)
        .then((paymentsData) => {
          const filteredPayments = paymentsData.payments.filter((payment) => {
            const orderNumber = payment.OrderNumber?.toLowerCase() || "";
            const comments = payment.Comments?.toLowerCase() || "";
            return orderNumber.includes(query) || comments.includes(query);
          });
          setFilteredPayments(filteredPayments); // Update the filtered payments
        })
        .catch((error) => {
          console.error("Error fetching payments:", error);
          setFilteredPayments([]); // Clear payments on error
        });
    } else {
      setFilteredPayments([]); // Clear payments if the query is less than 5 characters
    }
  };

  const searchItems = async (orderNumber) => {
    try {
      const response = await fetch(`GET_ALL_ORDERS/${orderNumber}`);
      const data = await response.json();
      if (data && data.success) {
        const order = data.order;

        // Populate form data with the order information
        setFormData({
          PaymentMethod: order.PaymentMethod,
          PaymentStatus: order.PaymentStatus,
          PaymentDate: new Date(order.PaymentDate), // Assuming you use a date picker for this field
          TotalAmount: order.TotalAmount,
          AdvanceAmount: order.AdvanceAmount,
          BalanceAmount: order.BalanceAmount,
          PaymentComments: order.PaymentComments,
        });
      } else {
        console.error("Order not found");
      }
    } catch (error) {
      console.error("Error fetching order data:", error);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-4 sm:ml-10 lg:ml-72 w-auto">
      <div className="mt-6  p-6 ">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={isEditMode ? handleFormSubmit : handleFormSubmit}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold mb-4 px-24">Payments</h2>
          </div>

          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 px-16 md:px-24">
            <div className="w-full sm:w-64">
              <label
                htmlFor="searchName"
                className="block text-sm font-medium text-gray-700"
              >
                Search by OrderNumber
              </label>
              <div className="relative mt-1">
                <Combobox
                  value={searchName}
                  onChange={(value) => setSearchName(value)}
                >
                  <Combobox.Input
                    className="w-full rounded-md border-0 bg-white py-2 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    displayValue={(searchName) => searchName}
                    placeholder="Search by OrderNumber"
                    onChange={(e) => handleSearchChange(e)}
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Combobox.Button>
                  <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {payments.map((payment) => (
                      <Combobox.Option
                        key={payment.OrderID}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-3 pr-9 ${
                            active
                              ? "bg-indigo-600 text-white"
                              : "text-gray-900"
                          }`
                        }
                        value={payment.OrderNumber}
                      >
                        {({ selected, active }) => (
                          <span
                            className={`block truncate ${
                              selected ? "font-semibold" : "font-normal"
                            }`}
                          >
                            {payment.OrderNumber}
                          </span>
                        )}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                </Combobox>
              </div>
            </div>

            <div className="w-full sm:w-64">
              <label
                htmlFor="PaymentMethod"
                className="block text-sm font-medium text-gray-700"
              >
                Payment Method
              </label>
              <div className="relative mt-1">
                <Combobox
                  value={selectedPaymentMethod}
                  onChange={(value) => {
                    setFormData({ ...formData, PaymentMethod: value });
                    setSelectedPaymentMethod(value);
                  }}
                >
                  <Combobox.Input
                    className="w-full rounded-md border-0 bg-white py-2 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    displayValue={(paymentMethod) => paymentMethod}
                    placeholder="Select Payment Method"
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Combobox.Button>
                  <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {paymentMethods.map((method) => (
                      <Combobox.Option
                        key={method}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-3 pr-9 ${
                            active
                              ? "bg-indigo-600 text-white"
                              : "text-gray-900"
                          }`
                        }
                        value={method}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-semibold" : "font-normal"
                              }`}
                            >
                              {method}
                            </span>
                            {selected && (
                              <span
                                className={`absolute inset-y-0 right-0 flex items-center pr-4 ${
                                  active ? "text-white" : "text-indigo-600"
                                }`}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            )}
                          </>
                        )}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                </Combobox>
              </div>
            </div>
            <div className="w-full sm:w-64">
              <label
                htmlFor="PaymentStatus"
                className="block text-sm font-medium text-gray-700"
              >
                Payment Status
              </label>
              <div className="relative mt-1">
                <Combobox
                  value={formData.PaymentStatus}
                  onChange={(value) =>
                    setFormData({ ...formData, PaymentStatus: value })
                  }
                >
                  <Combobox.Input
                    className="w-full rounded-md border-0 bg-white py-2 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    displayValue={(status) => status}
                    placeholder="Select Payment Status"
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Combobox.Button>
                  <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {["Processing", "Completed", "Failed"].map((status) => (
                      <Combobox.Option
                        key={status}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-3 pr-9 ${
                            active
                              ? "bg-indigo-600 text-white"
                              : "text-gray-900"
                          }`
                        }
                        value={status}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-semibold" : "font-normal"
                              }`}
                            >
                              {status}
                            </span>
                            {selected && (
                              <span
                                className={`absolute inset-y-0 right-0 flex items-center pr-4 ${
                                  active ? "text-white" : "text-indigo-600"
                                }`}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            )}
                          </>
                        )}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                </Combobox>
              </div>
            </div>
            <div className="w-full sm:w-64">
              <label
                htmlFor="Paymentdate"
                className="block text-sm font-medium text-gray-700"
              >
                Payment Date
              </label>
              <input
                type="date"
                name="OrderDate"
                value={formData.PaymentDate}
                onChange={handleDateChange}
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full sm:w-64">
              <label
                htmlFor="TotalAmount"
                className="block text-sm font-medium text-gray-700"
              >
                Total Amount
              </label>
              <input
                type="text"
                id="TotalAmount"
                name="TotalAmount"
                value={formData.TotalAmount || ""}
                onChange={handleFormChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full sm:w-64">
              <label
                htmlFor="AdvanceAmount"
                className="block text-sm font-medium text-gray-700"
              >
                Advance Amount
              </label>
              <input
                type="text"
                id="AdvanceAmount"
                name="AdvanceAmount"
                value={formData.AdvanceAmount || ""}
                onChange={handleFormChange}
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full sm:w-64">
              <label
                htmlFor="BalanceAmount"
                className="block text-sm font-medium text-gray-700"
              >
                Balance Amount
              </label>
              <input
                type="text"
                id="BalanceAmount"
                name="BalanceAmount"
                value={formData.BalanceAmount || ""}
                onChange={handleFormChange}
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full sm:w-64">
              <label
                htmlFor="PaymentComments"
                className="block text-sm font-medium text-gray-700"
              >
                Payment Comments
              </label>
              <input
                type="text"
                id="PaymentComments"
                name="PaymentComments"
                value={formData.PaymentComments || ""}
                onChange={handleFormChange}
                className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm py-2 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div></div>
            <div className="mt-6 flex justify-end gap-4">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-custom-darkblue py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-custom-lightblue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                {isEditMode ? "Update Payment" : "Create Payment"}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="inline-flex justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-red-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Paymentform;
