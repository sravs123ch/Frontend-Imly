// import React, { useState, useContext, useEffect } from "react";
// import {
//   Box,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TablePagination,
//   Paper,
//   IconButton,
// } from "@mui/material";
// import { FaUpload, FaEdit, FaTrashAlt } from "react-icons/fa";
// import { IoMdAddCircleOutline } from "react-icons/io";
// import { AiOutlineEye } from "react-icons/ai";
// import { FiDownload } from "react-icons/fi";
// import StatusBadge from "./Statuses"; // Make sure you have this component
// import Step2 from "./payment";
// import { useNavigate } from "react-router-dom";
// import {
//   CREATEORUPDATE_ORDER_HISTORY__API,
//   GET_ALL_HYSTORYID_API,GETALLROLESS_API,GETALLUSERS_API
// } from "../../Constants/apiRoutes";
// import LoadingAnimation from "../Loading/LoadingAnimation";
// import { IdContext } from "../../Context/IdContext";
// import { GETORDERBYID_API } from "../../Constants/apiRoutes";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Combobox } from "@headlessui/react";
// import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/20/solid";
// import {
//   StyledTableCell,
//   StyledTableRow,
//   TablePaginationActions,
// } from "../CustomTablePagination";
// import { AiOutlineEdit } from "react-icons/ai";
// import { MdOutlineCancel } from "react-icons/md";
// import Typography from "@mui/material/Typography";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import StepContent from "@mui/material/StepContent";
// import Button from "@mui/material/Button";
// import { OrderContext } from "../../Context/orderContext";
// import { useLocation } from "react-router-dom";
// // import CustomStepIcon from "./CustomStepIcon";
// import axios from "axios";
// import { IoIosSearch } from "react-icons/io";
// import { FaEye } from 'react-icons/fa';  
// import { GrInProgress } from "react-icons/gr";


// const YourComponent = ({ onBack, onNext }) => {

//   // Define state for orders, images, pdfPreview, errors, etc.
//   const [formOrderDetails, setFormOrderDetails] = useState({
//     OrderStatus: "",
//     ExpectedDays: "",
//     DeliveryDate: "",
//     Comments: "",
//     AssignTo:"",
//     RoleID:"",
//     UploadDocument: "",
//     StartDate: new Date().toISOString().split("T")[0], // Set StartDate to today's date in YYYY-MM-DD format
//   });
//   const { orderIdDetails } = useContext(OrderContext);
//   const location = useLocation();

//   // Get orderId from either location state or context
//   const { orderId } = location.state || {};
//   const OrderID = orderId || orderIdDetails?.order?.OrderID;

//   console.log(orderIdDetails?.order?.OrderID);
//   const [selectedFiles, setSelectedFiles] = useState([]);

//   const [images, setImages] = useState([]);
//   const [editMode, setEditMode] = useState(false);
//   const [imagePreviews, setImagePreviews] = useState([]);
//   const [pdfPreview, setPdfPreview] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [orders, setOrders] = useState([]);
//   const [page, setPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [showModal, setShowModal] = useState(false);
//   const [popupMessage, setPopupMessage] = useState("");
//   const navigate = useNavigate();
//   const [activeStep, setActiveStep] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state
//   const [pdfPreviews, setPdfPreviews] = useState([]);
//   {
//     activeStep === 2 && <Step2 />;
//   }
//   const { generatedId, customerId, orderDate } = useContext(IdContext);
 
// const [results, setResults] = useState([]);


// const [roles, setRoles] = useState([]);

// const [filteredRolesList, setFilteredRolesList] = useState([]);

// const [selectedRole, setSelectedRole] = useState(null);
//   const [orderStatusList, setOrderStatusList] = useState([]);
//   useEffect(() => {
//     const fetchOrderStatuses = async () => {
//       try {
//         const response = await fetch(
//           "https://imly-b2y.onrender.com/api/Orderstatus/getAllOrderStatus"
//         );
//         const data = await response.json();

//         // Log the data to see its structure
//         console.log("Fetched Order Statuses:", data);

//         // Check if data is in the expected format
//         if (Array.isArray(data.data)) {
//           setOrderStatusList(data.data);
//         }
//       } catch (error) {
//         console.error("Error fetching order statuses:", error);
//       }
//     };

//     fetchOrderStatuses();
//   }, []);


// // const handleChanging = (statusID) => {
// //   // Find the index of the selected status in the filteredStatusList
// //   const selectedStepIndex = filteredStatusList.findIndex(
// //     (status) => status.StatusID === statusID
// //   );

// //   // Create a new object for completed steps
// //   const newCompletedSteps = {};

// //   // Mark the current step and all previous steps as completed (ticked)
// //   for (let i = 0; i <= selectedStepIndex; i++) {
// //     newCompletedSteps[i] = true; // Mark steps as completed
// //   }

// //   // Unmark all steps after the selected one (untick)
// //   for (let i = selectedStepIndex + 1; i < filteredStatusList.length; i++) {
// //     newCompletedSteps[i] = false; // Set false to untick remaining steps
// //   }

// //   // Update the state with the new completed steps and set the active step
// //   setCompletedSteps(newCompletedSteps);
// //   setActiveStep(selectedStepIndex); // Set the active step to the selected one
// //   setSelectedStatus(statusID); // Update the selected status
// // };


// const handleChanging = (statusID) => {
//   const selectedStepIndex = filteredStatusList.findIndex(
//     (status) => status.StatusID === statusID
//   );

//   const newCompletedSteps = {};
//   for (let i = 0; i <= selectedStepIndex; i++) {
//     newCompletedSteps[i] = true;
//   }
//   for (let i = selectedStepIndex + 1; i < filteredStatusList.length; i++) {
//     newCompletedSteps[i] = false;
//   }

//   setCompletedSteps(newCompletedSteps);
//   setActiveStep(selectedStepIndex);
//   setSelectedStatus(statusID);  // <-- This stores the StatusID
  
//   // Add this for debugging
//   console.log("Selected Status ID: ", statusID);
// };


//   const saveOrderHistory = async () => {
//     const { StatusID, OrderStatus, DeliveryDate, Comments,AssignTo,RoleID,UserID,OrderHistoryID} = formOrderDetails;

//     // Validate required fields
//     if (!DeliveryDate) {
//       toast.error("Delivery date is required.", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//       return;
//     }

//     const userId = localStorage.getItem("UserID");
//     console.log("UserId",userId)

//     // Create a new FormData object
//     const formData = new FormData();
//     formData.append("TenantID", 1);
//     formData.append(
//       "OrderHistoryID",
//       editMode ? formOrderDetails.OrderHistoryID : 0
//     ); // Use existing ID for updates
//     formData.append("OrderID", OrderID);
//     // formData.append("StatusID", StatusID || 1);
//     formData.append("StartDate", orderDate);
//     formData.append("EndDate", DeliveryDate);
//     formData.append("AssignTo", AssignTo );
//     formData.append("Comments", Comments);
//     // formData.append("UserID", UserID || 5 );
//     formData.append("UserID", userId);
//     formData.append("RoleID", RoleID );
//     // formData.append("OrderHistoryID",OrderHistoryID);
//     formData.append("CreatedBy", "sandy");
//     // formData.append("OrderStatus", OrderStatus || "");
//     // formData.append("OrderStatus", selectedStatus ? selectedStatus.OrderStatus : "N/A");
//     // If you're sending just the StatusID to the backend
// formData.append("OrderStatus", selectedStatus || "N/A"); // selectedStatus holds StatusID

// // If you're passing the full status object and need the status text:
// const selectedOrderStatus = orderStatusList.find(
//   (status) => status.StatusID === selectedStatus
// );

// // formData.append("OrderStatus", selectedOrderStatus?.OrderStatus || "N/A");

// // Assuming `selectedStatus` is the StatusID selected from the combobox
// formData.append("StatusID", selectedStatus || 1); // selectedStatus holds StatusID

// // Append the `OrderStatus` text to formData, fallback to "N/A" if not found
// formData.append("OrderStatus", selectedOrderStatus?.OrderStatus || "N/A");
//     // Append the binary data of each file as UploadDocument
//     if (images && images.length > 0) {
//       images.forEach((fileData, index) => {
//         const { data, name, type } = fileData;
//         const blob = new Blob([data], { type });
//         formData.append("UploadDocument", blob, name);
//       });
//     }
//     setIsLoading(true);
//     try {
//       // API request to create or update order history
//       const response = await fetch(CREATEORUPDATE_ORDER_HISTORY__API, {
//         method:  "POST", // Use PUT for updates
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const data = await response.json();
//       console.log("API Response:", data);

//       // Conditional success messages
//       if (data.StatusCode === "SUCCESS") {
//         toast.success(
//           editMode
//             ? "Order status updated successfully!"
//             : "Order history created successfully!",
//           {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           }
//         );
//         const updatedCustomer = await  fetchOrderDetails(OrderID);
//         closeModalAndMoveToNextStep();
//       } else {
//         toast.error(
//           data.message || "Error occurred while processing the request.",
//           {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           }
//         );
//         closeModalAfterDelay();
//       }
//     } catch (error) {
//       toast.error("" + error.message, {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//       closeModalAfterDelay();
  
//     }
//     finally {
//       setIsLoading(false); // Hide loader when done
//     }
//   };

//   // Close the modal and move to the next step after a delay
//   const closeModalAndMoveToNextStep = () => {
//     setTimeout(() => {
//       setShowModal(false);
//       // onNext(); 
//     }, 3000); // Delay of 4 seconds
//   };

//   // Close the modal after a delay (for error cases)
//   const closeModalAfterDelay = () => {
//     setTimeout(() => {
//       setShowModal(false); // Close the modal after a delay
//     }, 3000); // Delay of 4 seconds
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormOrderDetails((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handledate = (e) => {
//     const { name, value } = e.target;
//     setFormOrderDetails((prevDetails) => {
//       const updatedDetails = { ...prevDetails, [name]: value };
//       if (name === "ExpectedDurationDays") {
//         const days = parseInt(value, 10);
//         if (!isNaN(days) && days >= 0) {
//           const today = new Date();
//           updatedDetails.DeliveryDate = addDays(today, days);
//         } else {
//           updatedDetails.DeliveryDate = ""; // Reset if invalid
//         }
//       }
//       return updatedDetails;
//     });
//   };

//   // Utility function to format the date as YYYY-MM-DD
//   const formatDate = (isoDate) => {
//     if (!isoDate) return ""; // Return empty if no date is present
//     return new Date(isoDate).toISOString().split("T")[0]; // Convert to YYYY-MM-DD
//   };
//   const handleExpectedDaysChange = (e) => {
//     const expectedDays = parseInt(e.target.value, 10);

//     // Validate input
//     if (isNaN(expectedDays) || expectedDays < 1) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         ExpectedDays: "Please enter a valid number of days.",
//       }));
//       return;
//     }

//     // Clear any errors
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       ExpectedDays: "",
//     }));

//     // Calculate the delivery date based on StartDate
//     const deliveryDate = calculateExpectedDeliveryDate(
//       formOrderDetails.StartDate,
//       expectedDays
//     );

//     // Update form state with expected days and delivery date
//     setFormOrderDetails((prevDetails) => ({
//       ...prevDetails,
//       ExpectedDays: expectedDays,
//       DeliveryDate: deliveryDate, // This will now correctly update
//     }));
//   };
//   // Utility function to calculate the delivery date based on StartDate and ExpectedDays
//   const calculateExpectedDeliveryDate = (startDate, daysToAdd) => {
//     if (!startDate || isNaN(new Date(startDate))) {
//       return ""; // Return an empty string if the startDate is invalid
//     }
//     const date = new Date(startDate);
//     date.setDate(date.getDate() + daysToAdd); // Add the number of days
//     return formatDate(date); // Return in YYYY-MM-DD format
//   };

//   // Handler for manual changes in the Delivery Date input (if needed)
//   const handleDateChanging = (e) => {
//     const { value } = e.target;
//     const newDate = new Date(value);

//     if (isNaN(newDate)) {
//       setFormOrderDetails((prevDetails) => ({
//         ...prevDetails,
//         DeliveryDate: "", // Reset if invalid
//       }));
//     } else {
//       setFormOrderDetails((prevDetails) => ({
//         ...prevDetails,
//         DeliveryDate: newDate.toISOString().split("T")[0], // Format as YYYY-MM-DD
//       }));
//     }
//   };

//   const handleFileChange = (event) => {
//     const files = event.target.files; // Get the FileList object from the input
//     const selectedFiles = Array.from(files); // Convert the FileList to an array

//     const UploadDocuments = {}; // Object to store key-value pairs of document names
//     const binaryFiles = []; // Array to store binary files
//     const previews = [];

//     selectedFiles.forEach((file, index) => {
//       // Create a URL for preview if it's an image
//       if (file.type.startsWith("image/")) {
//         const previewUrl = URL.createObjectURL(file);
//         previews.push(previewUrl); // Add to previews array
//       }

//       // Store document names as key-value pairs
//       UploadDocuments[`Document_${index + 1}`] = file.name; // Store document names

//       const reader = new FileReader();
//       reader.onload = () => {
//         // After reading the file, we can get the binary data
//         const binaryData = reader.result;
//         binaryFiles.push({
//           name: file.name,
//           type: file.type,
//           data: binaryData,
//         });

//         // Check if the file is a PDF
//         if (file.type === "application/pdf") {
//           const pdfPreviewUrl = URL.createObjectURL(file); // Create a PDF preview URL
//           setPdfPreviews((prev) => [...prev, pdfPreviewUrl]); // Store PDF previews
//         }

//         // After processing the last file, update the state
//         if (index === selectedFiles.length - 1) {
//           // Store image previews and binary files in state
//           setImagePreviews(previews);
//           setImages(binaryFiles); // Store the actual binary files for backend upload
//           setFormOrderDetails((prev) => ({
//             ...prev,
//             UploadDocument: UploadDocuments, // Store document names
//           }));
//         }
//       };

//       reader.readAsArrayBuffer(file); // Read the file as an ArrayBuffer
//     });
//   };

//   // Clean up object URLs to avoid memory leaks
//   useEffect(() => {
//     return () => {
//       // Clean up image previews
//       imagePreviews.forEach((url) => URL.revokeObjectURL(url)); // Release object URLs created
//       pdfPreviews.forEach((url) => URL.revokeObjectURL(url)); // Release PDF preview URLs
//     };
//   }, [imagePreviews, pdfPreviews]);

//   const handleImageRemove = (index) => {
//     const newImages = images.filter((_, i) => i !== index);
//     const newPreviews = imagePreviews.filter((_, i) => i !== index);
//     setImages(newImages);
//     setImagePreviews(newPreviews);
//   };

//   const handlePdfRemove = (index) => {
//     const newPdfPreviews = pdfPreviews.filter((_, i) => i !== index);
//     setPdfPreviews(newPdfPreviews); // Update PDF previews
//   };

//   const [file, setFile] = useState(null);
//   const [pdfFile, setPdfFile] = useState(null);
//   const handleDelete = () => {
//     setFile(null);
//   };
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };
//   const addDays = (date, days) => {
//     let result = new Date(date);
//     result.setDate(result.getDate() + days);
//     return result.toISOString().split("T")[0]; // Format as 'YYYY-MM-DD'
//   };
//   const handleCancel = () => {
//     // Example: Reset form or navigate to a different page
//     console.log("Cancel clicked");
//     // If you want to navigate away from the form, for example:
//     navigate("/Orders"); // This assumes you're using `react-router-dom` for navigation
//   };
//   const [selectedStatus, setSelectedStatus] = useState(
//     formOrderDetails.StatusID || ""
//   );
//   const [query, setQuery] = useState("");

//   const filteredStatusList =
//     query === ""
//       ? orderStatusList
//       : orderStatusList.filter((status) =>
//           status.OrderStatus.toLowerCase().includes(query.toLowerCase())
//         );

//   const handleSelect = (statusID) => {
//     console.log("Selected Status ID:", statusID);
//     const selectedStatus = orderStatusList.find(
//       (status) => status.StatusID === statusID
//     );
//     console.log("Selected Status:", selectedStatus);

//     setFormOrderDetails({
//       ...formOrderDetails,
//       OrderStatus: selectedStatus ? selectedStatus.OrderStatus : "",
//       StatusID: statusID,
//     });
//   };

//   // Helper function to calculate the duration between two dates
//   const calculateDurationDays = (startDate, endDate) => {
//     const start = new Date(startDate);
//     const end = new Date(endDate);
//     const duration = Math.ceil((end - start) / (1000 * 60 * 60 * 24)); // Difference in days
//     return duration;
//   };
//   const [statusDetails, setStatusDetails] = useState([]);

//   const fetchOrderDetails = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(`${GET_ALL_HYSTORYID_API}${OrderID}`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }

//       const result = await response.json();
//       console.log("API Response:", result); 
//       console.log("API Response:", result[0].FirstName); 
//       // Check if result contains the expected fields
//       const statuses = Array.isArray(result) ? result : [result];
//       statuses.forEach((item) => {
//         console.log("OrderID:", item.OrderID, "EndDate:", item.EndDate);
//       });

//       // Map the result to statusDetails
//       const mappedStatusDetails = statuses.map((status) => ({
//         StatusID: status.StatusID || "N/A",
//         OrderID: status.OrderID || "N/A",
//         // AssignTo:status.AssignTo||"N/A",
//         // RoleID:status.RoleID||"N/A",
//         // AssignTo: status.AssignTo || status.FirstName && status.LastName ? `${status.FirstName} ${status.LastName}` : "N/A",
//         // AssignTo: (status.FirstName && status.LastName) ? `${status.FirstName} ${status.LastName}` : "N/A",
//         // AssignTo: (status.FirstName || status.LastName) ? `${status.FirstName || ''} ${status.LastName || ''}`.trim() : "N/A",
//         AssignTo:status.AssignTo||"N/A",
//         AssignTo:status.FirstName||"N/A",
//         RoleID: status.RoleID || "N/A",
//         RoleName: status.RoleName || "N/A",
//         OrderStatus: status.OrderStatus || "N/A",
//         DeliveryDate: status.EndDate || "N/A",
//         Comments: status.Comment || "N/A",
//         OrderHistoryID: status.OrderHistoryID || "N/A",
//         StartDate: status.StartDate || "N/A",
//         ExpectedDays: status.ExpectedDurationDays || "N/A",
//         DownloadDocuments:
//           status.DownloadDocuments?.length > 0
//             ? status.DownloadDocuments
//             : "No Documents",
//         viewdocuments:
//           status.viewdocuments?.length > 0
//             ? status.viewdocuments
//             : "No Documents",
//           }));
//       console.log("Mapped Status Details:", mappedStatusDetails); // Log mapped details
//       setStatusDetails(mappedStatusDetails);
//     } catch (err) {
//       setError(err.message);
//       console.error("Fetch Error:", err.message); // Log fetch error
//     } finally {
//       setLoading(false);
//     }
//   };

   
//   // Function to update stepper based on order status
//   const updateStepperStatus = (firstOrderStatus) => {
//     // Example mapping order status to stepper step index
//     const stepIndexMap = {
//       "Quick Quote": 0,
//       "Initial Design": 1,
//       "Initial Measurements": 2,
//       "Revised Design": 3, // You could adjust this for specific revision numbers like R1, R2, etc.
//       "Final Measurement": 4,
//       "Signup Document": 5,
//       "Production": 6,
//       "PDI": 7,
//       "Dispatch": 8, // If there are multiple dispatches, you can handle them accordingly.
//       "Installation": 9,
//       "Completion": 10,
//       "Canceled": 11,
//     };
    
  
//     // Find the corresponding step index for the first record's OrderStatus
//     const activeStepIndex = stepIndexMap[firstOrderStatus] ?? 0;
  
//     // Set the active step and mark steps as completed up to the active step
//     const newCompletedSteps = {};
//     for (let i = 0; i <= activeStepIndex; i++) {
//       newCompletedSteps[i] = true;
//     }
  
//     setCompletedSteps(newCompletedSteps);
//     setActiveStep(activeStepIndex); // Set active step to the corresponding index
//   };

//   useEffect(() => {
//     fetchOrderDetails();
//   }, [generatedId]);

//   // const handleEditstatus = (historyId, statusId) => {
//   //   console.log("Attempting to edit Payment with historyId:", historyId);
//   //   console.log(
//   //     "Available OrderHistoryIDs:",
//   //     statusDetails.map((status) => status.OrderHistoryID)
//   //   );

//   //   // Find the specific order status based on the selected historyId
//   //   const statusData = statusDetails.find(
//   //     (status) => status.OrderHistoryID === historyId
//   //   );

//   //   if (statusData) {
//   //     // Set the form order details with the data found
//   //     setFormOrderDetails({
//   //       OrderID: statusData.OrderID || "",
//   //       AssignTo:statusData.AssignTo||"",
//   //       RoleID:statusData.RoleID||"",
//   //       OrderHistoryID: statusData.OrderHistoryID || "",
//   //       OrderStatus: statusData.OrderStatus || "N/A",
//   //       DeliveryDate: statusData.DeliveryDate || "",
//   //       Comments: statusData.Comments || "",
//   //       StartDate: statusData.StartDate || "",
//   //       DownloadDocuments: statusData.DownloadDocuments || [],
//   //       viewdocuments: statusData.viewdocuments || [],
//   //       StatusID: statusId || "",
//   //     });

//   //     // Find the status from orderStatusList where the status matches and set the StatusID
//   //     const statusToSelect = orderStatusList.find(
//   //       (status) => status.OrderStatus === statusData.OrderStatus
//   //     );
//   //     if (statusToSelect) {
//   //       setSelectedStatus(statusToSelect.StatusID); // Set the selected status ID
//   //     }

//   //     // Log the updated form details
//   //     console.log("Form Details after setting:", formOrderDetails.OrderStatus);

//   //     // Enable edit mode
//   //     setEditMode(true);
//   //   } else {
//   //     console.error(
//   //       "No valid data found for the provided historyId:",
//   //       historyId
//   //     );
//   //   }
//   // };

//   // Log updated formOrderDetails
  
//   // const handleEditstatus = (historyId, statusId) => {
//   //   console.log("Attempting to edit Payment with historyId:", historyId);
//   //   console.log(
//   //     "Available OrderHistoryIDs:",
//   //     statusDetails.map((status) => status.OrderHistoryID)
//   //   );
  
//   //   // Find the specific order status based on the selected historyId
//   //   const statusData = statusDetails.find(
//   //     (status) => status.OrderHistoryID === historyId
//   //   );
  
//   //   if (statusData) {
//   //     // Set the form order details with the data found
//   //     setFormOrderDetails({
//   //       OrderID: statusData.OrderID || "",
//   //       AssignTo: statusData.AssignTo || "",
//   //       RoleID: statusData.RoleID || "",
//   //       OrderHistoryID: statusData.OrderHistoryID || "",
//   //       OrderStatus: statusData.OrderStatus || "N/A",
//   //       DeliveryDate: statusData.DeliveryDate || "",
//   //       Comments: statusData.Comments || "",
//   //       StartDate: statusData.StartDate || "",
//   //       DownloadDocuments: statusData.DownloadDocuments || [],
//   //       viewdocuments: statusData.viewdocuments || [],
//   //       StatusID: statusId || "",
//   //     });
  
//   //     // Find the status from orderStatusList where the status matches and set the StatusID
//   //     const statusToSelect = orderStatusList.find(
//   //       (status) => status.OrderStatus === statusData.OrderStatus
//   //     );
//   //     if (statusToSelect) {
//   //       setSelectedStatus(statusToSelect.StatusID); // Set the selected status ID
//   //     }
  
//   //     // Enable edit mode
//   //     setEditMode(true);
//   //   } else {
//   //     console.error(
//   //       "No valid data found for the provided historyId:",
//   //       historyId
//   //     );
//   //   }
//   // };
  
//   const handleEditstatus = (historyId, statusId) => {
//     console.log("Attempting to edit Payment with historyId:", historyId);
  
//     // Find the specific order status based on the selected historyId
//     const statusData = statusDetails.find(
//       (status) => status.OrderHistoryID === historyId
//     );
  
//     if (statusData) {
//       // Set form order details with the data found from the backend
//       setFormOrderDetails({
//         OrderID: statusData.OrderID || "",
//         OrderHistoryID: statusData.OrderHistoryID || "",
//         OrderStatus: statusData.OrderStatus || "N/A",
//         DeliveryDate: statusData.DeliveryDate || "",
//         Comments: statusData.Comments || "",
//         StartDate: statusData.StartDate || "",
//         DownloadDocuments: statusData.DownloadDocuments || [],
//         viewdocuments: statusData.viewdocuments || [],
//         StatusID: statusId || "",
//         AssignTo: statusData.AssignTo || "", // Corrected key
//         RoleID: statusData.RoleName || "",     // Corrected key if needed
//       });
  
//       // Get the index of the current status in the list
//       const selectedStepIndex = filteredStatusList.findIndex(
//         (status) => status.StatusID === statusId
//       );
  
//       // Automatically tick steps based on the status coming from the backend
//       const newCompletedSteps = {};
//       for (let i = 0; i <= selectedStepIndex; i++) {
//         newCompletedSteps[i] = true; // Mark previous steps as completed
//       }
  
//       // Untick steps after the current status
//       for (let i = selectedStepIndex + 1; i < filteredStatusList.length; i++) {
//         newCompletedSteps[i] = false;
//       }
  
//       // Update completed steps and active step
//       setCompletedSteps(newCompletedSteps);
//       setActiveStep(selectedStepIndex); // Set the active step to the current one
//       setSelectedStatus(statusId); // Update the selected status ID
  
//       // Enable edit mode
//       setEditMode(true);
//     } else {
//       console.error("No valid data found for the provided historyId:", historyId);
//     }
//   };
//   useEffect(() => {
//     console.log("FormOrderDetails updated:", formOrderDetails);
//   }, [formOrderDetails]);

//   const selectedStatusText =
//     orderStatusList.find((status) => status.StatusID === selectedStatus)
//       ?.OrderStatus || "";

//   useEffect(() => {
//     console.log("Selected Status Updated:", selectedStatusText);
//   }, [selectedStatus]);


//   const [visibleSteps, setVisibleSteps] = useState(4); // Initially show 5 steps
//   const [completedSteps, setCompletedSteps] = useState({});

// // const handleCompleteStep = (stepIndex) => {
// //   const newCompletedSteps = { ...completedSteps };
// //   for (let i = 0; i <= stepIndex; i++) {
// //     newCompletedSteps[i] = true; // Mark all steps before and including the selected one as completed
// //   }
// //   setCompletedSteps(newCompletedSteps);
// //   setActiveStep(stepIndex); // Set the current step as active
// // };

// // const handleStepClick = (index) => {
// //   handleCompleteStep(index); // Complete the step and all before it
// //   if (index < visibleSteps) {
// //     setVisibleSteps((prevSteps) => Math.min(prevSteps + 1, filteredStatusList.length));
// //   }
// // };


// // const handleScroll = (e) => {
// //   const bottom = Math.ceil(e.target.scrollHeight - e.target.scrollTop) <= e.target.clientHeight;
// //   if (bottom && visibleSteps < filteredStatusList.length) {
// //     setVisibleSteps((prevSteps) => Math.min(prevSteps + 5, filteredStatusList.length));
// //   }
// // };
// const handleReset = () => {
//   setActiveStep(0);
//   setCompletedSteps({});
//   setVisibleSteps(4); // Reset visible steps to initial value
// };

//   const [searchUserValue, setSearchUserValue]=useState();
//   const [isUserFocused, setIsUserFocused]=useState();
//   const [hasUserSelected, setHasUserSelected] = useState(false); 
  
//   // Function to fetch users from API
//   const getAllUsers = async (pageNum, pageSize, search = "") => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         throw new Error("No authentication token found");
//       }
  
//       const response = await axios.get(
//         // "https://imlystudios-backend-mqg4.onrender.com/api/users/getAllUsers",
//         GETALLUSERS_API,
//         {
//           params: {
//             page: pageNum + 1,
//             limit: pageSize,
//             SearchText: search,
//           },
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
  
//       return {
//         users: response.data.users,
//         totalCount: response.data.totalItems,
//       };
//     } catch (error) {
//       console.error("Error fetching users:", error);
//       throw error;
//     }
//   };
  
//   const handleUserChange = (e) => {
//     const value = e.target.value;
//     setSearchUserValue(value);
  
//     // Call the API to get users only if the input has more than 0 characters
//     if (value.trim().length > 0) {
//       getAllUsers(0, 10, value)
//         .then(response => {
//           setResults(response.users || []); // Use empty array as fallback
//         })
//         .catch(error => {
//           console.error("Error fetching users:", error);
//           setResults([]); // Clear results on error
//         });
//     } else {
//       setResults([]); // Clear results if input is empty
//     }
//   };
  
//   // const handleUserSelect = (selectedUser) => {
//   //     setFormOrderDetails((prevDetails) => ({
//   //     ...prevDetails,
//   //     DesginerName: `${selectedUser.FirstName} ${selectedUser.LastName}`,  // Set Designer Name
//   //   }));
  
//   //   setSearchUserValue(`${selectedUser.FirstName} ${selectedUser.LastName}`); // Update the input value
//   //   setIsUserFocused(false); // Close dropdown
//   // };

//  // Function to fetch all user roles
//  const handleUserSelect = (selectedUser) => {
//   setFormOrderDetails((prevDetails) => ({
//     ...prevDetails,
//     AssignTo: selectedUser.UserID, // Store UserID for the backend
//     DesginerName: `${selectedUser.FirstName} ${selectedUser.LastName}`,  // Display full name in input
//   }));

//   setSearchUserValue(`${selectedUser.FirstName} ${selectedUser.LastName}`); // Update the input value
//   setIsUserFocused(false); // Close dropdown
// };
//  const getAllRoles = async (search = "") => {
//   try {
//     const response = await axios.get(GETALLROLESS_API, {
//       params: {
//         SearchText: search,
//       },
//     });
//     return response.data.roles;
//   } catch (error) {
//     console.error("Failed to fetch roles:", error);
//   }
// };

// // Fetch roles on mount or when query changes
// useEffect(() => {
//   const fetchRoles = async () => {
//     const rolesData = await getAllRoles(query);
//     setRoles(rolesData);
//     setFilteredRolesList(rolesData);
//   };

//   fetchRoles();
// }, [query]);

// // Filter roles based on query
// useEffect(() => {
//   if (query === "") {
//     setFilteredRolesList(roles);
//   } else {
//     const filtered = roles.filter((role) =>
//       role.RoleName.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredRolesList(filtered);
//   }
// }, [roles, query]);

// // const handleRoleChanging = (value) => {
// //   setSelectedRole(value);
// //   // Add your validation logic if needed
// //   if (!value) {
// //     setErrors((prev) => ({ ...prev, UserRole: "User Role is required." }));
// //   } else {
// //     setErrors((prev) => ({ ...prev, UserRole: undefined }));
// //   }
// // };

// const handleRoleChanging = (roleID) => {
//   setSelectedRole(roleID);  // Set the selected RoleID

//   // Update formOrderDetails with UserRoleID for backend submission
//   setFormOrderDetails((prevDetails) => ({
//     ...prevDetails,
//     RoleID:roleID,  // Pass UserRoleID to backend
//   }));

//   // Validate if a role is selected
//   if (!roleID) {
//     setErrors((prev) => ({ ...prev, UserRole: "User Role is required." }));
//   } else {
//     setErrors((prev) => ({ ...prev, UserRole: undefined }));
//   }
// };

// const handleCompleteStep = (stepIndex) => {
//   const newCompletedSteps = { ...completedSteps };
//   for (let i = 0; i <= stepIndex; i++) {
//     newCompletedSteps[i] = true; // Mark all steps before and including the selected one as completed
//   }
//   setCompletedSteps(newCompletedSteps);
//   setActiveStep(stepIndex); // Set the current step as active
// };

// const handleStepClick = (index) => {
//   handleCompleteStep(index); // Complete the step and all before it
//   if (index < visibleSteps) {
//     setVisibleSteps((prevSteps) => Math.min(prevSteps + 1, filteredStatusList.length));
//   }
// };

// const handleScroll = (e) => {
//   const bottom = Math.ceil(e.target.scrollHeight - e.target.scrollTop) <= e.target.clientHeight;
//   if (bottom && visibleSteps < filteredStatusList.length) {
//     setVisibleSteps((prevSteps) => Math.min(prevSteps + 5, filteredStatusList.length));
//   }
// };

//   return (
//     <Box
//       sx={{
//         display: "grid",
//         gridTemplateColumns: { xs: "1fr", sm: " 1fr" }, // Ensure proper grid layout
//         gap: 2, // Adjust spacing between items
//         justifyContent: "center",
//         alignItems: "center",
//         pt: 2,
//       }}
//     >
//       <>
//         {/* <form onSubmit={saveOrderHistory}> */}
//         <form>
//           <div className="flex">
//             <div className="flex flex-col items-center flex-1 sm:ml-0 lg:ml-5 gap-4">
//               {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
//                 <label className="sm:w-1/4 w-full text-left text-xs font-medium text-gray-700">
//                   Order Status:
//                 </label>

//                 <Combobox value={selectedStatus} onChange={handleChanging}>
//                   <div className="relative w-full sm:w-1/4">
//                     <Combobox.Input
//                       className={`p-1 w-full border rounded-md ${
//                         errors.OrderStatus
//                           ? "border-red-500"
//                           : "border-gray-300"
//                       }`}
//                       onChange={(e) => setQuery(e.target.value)}
//                       displayValue={(statusID) => {
//                         const selected = orderStatusList.find(
//                           (status) => status.StatusID === statusID
//                         );
//                         return selected ? selected.OrderStatus : ""; // Make sure selected value is returned
//                       }}
//                     />
//                     <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//                       <ChevronUpDownIcon
//                         className="h-5 w-5 text-gray-400"
//                         aria-hidden="true"
//                       />
//                     </Combobox.Button>
//                     <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-white border border-gray-300 rounded-md shadow-lg">
//                       {filteredStatusList.length > 0 ? (
//                         filteredStatusList.map((status) => (
//                           <Combobox.Option
//                             key={status.StatusID}
//                             value={status.StatusID}
//                             className={({ active }) =>
//                               `cursor-pointer select-none relative p-2 ${
//                                 active
//                                   ? "bg-blue-500 text-white"
//                                   : "text-gray-900"
//                               }`
//                             }
//                           >
//                             {status.OrderStatus}
//                           </Combobox.Option>
//                         ))
//                       ) : (
//                         <div className="p-2 text-gray-500">No status found</div>
//                       )}
//                     </Combobox.Options>
//                   </div>
//                 </Combobox>


//                 {errors.OrderStatus && (
//                   <p className="text-red-500 text-sm ml-2">
//                     {errors.OrderStatus}
//                   </p>
//                 )}
//               </div> */}
//  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
//                 <label className="sm:w-1/4 w-full text-left text-xs font-medium text-gray-700">
//                     Order Status:
//                 </label>

//                 <Combobox value={selectedStatus} onChange={handleChanging}>
//                     <div className="relative w-full sm:w-1/4">
//                         <Combobox.Input
//                             className={`p-1 w-full border rounded-md ${
//                                 errors.OrderStatus
//                                     ? "border-red-500"
//                                     : "border-gray-300"
//                             }`}
//                             onChange={(e) => setQuery(e.target.value)}
//                             displayValue={(statusID) => {
//                                 const selected = orderStatusList.find(
//                                     (status) => status.StatusID === statusID
//                                 );
//                                 return selected ? selected.OrderStatus : "";
//                             }}
//                         />
//                         <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//                             <ChevronUpDownIcon
//                                 className="h-5 w-5 text-gray-400"
//                                 aria-hidden="true"
//                             />
//                         </Combobox.Button>
//                         <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-white border border-gray-300 rounded-md shadow-lg">
//                             {filteredStatusList.length > 0 ? (
//                                 filteredStatusList.map((status) => (
//                                     <Combobox.Option
//                                         key={status.StatusID}
//                                         value={status.StatusID}
//                                         className={({ active }) =>
//                                             `cursor-pointer select-none relative p-2 ${
//                                                 active
//                                                     ? "bg-blue-500 text-white"
//                                                     : "text-gray-900"
//                                             }`
//                                         }
//                                     >
//                                         {status.OrderStatus}
//                                     </Combobox.Option>
//                                 ))
//                             ) : (
//                                 <div className="p-2 text-gray-500">No status found</div>
//                             )}
//                         </Combobox.Options>
//                     </div>
//                 </Combobox>

//                 {errors.OrderStatus && (
//                     <p className="text-red-500 text-sm ml-2">
//                         {errors.OrderStatus}
//                     </p>
//                 )}
//             </div>
//               {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
//    <label className="sm:w-1/4 w-full text-left text-xs font-medium text-gray-700">
//      Assigned To
//    </label>
//    <div className="relative w-full sm:w-1/4">
//      <input
//       type="search"
//       name="AssignedTo"
//       value={formOrderDetails.AssignTo || searchUserValue}
//       onChange={handleUserChange}
//       onFocus={() => setIsUserFocused(true)}
//       className={`p-1 w-full border rounded-md ${
//         errors.AssignedTo ? "border-red-500" : "border-gray-300"
//       }`}
//       placeholder="Search by User Name..."
//     />
//     {errors.AssignTo && (
//       <p className="text-red-500 text-sm mt-1">{errors.AssignTo}</p>
//     )}

//     <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center pointer-events-none">
//       <IoIosSearch aria-label="Search Icon" />
//     </div>

  
//     {isUserFocused && searchUserValue && searchUserValue.length >= 1 && (
//       <div
//         className="absolute flex flex-col top-full mt-1 border rounded-lg p-2 w-full bg-white z-10"
//         style={{
//           maxHeight: '200px',
//           overflowY: 'auto',
//         }}
//       >
//         {results.length > 0 ? (
//           <>
//             <div className="mb-2 text-sm text-gray-600">
//               {results.length} Result{results.length > 1 ? "s" : ""}
//             </div>
//             {results.map((result) => (
//               <div
//                 className="relative cursor-pointer p-2 hover:bg-gray-100 group"
//                 key={result.CustomerID}
//                 onClick={() => handleUserSelect(result)}
//               >
//                 <span className="font-medium">
//                   {result.FirstName} {result.LastName}
//                 </span>
//               </div>
//             ))}
//           </>
//         ) : (
//           !hasUserSelected && (
//             <div className="p-2 overflow-clip text-gray-500">No results found.</div>
//           )
//         )}
//       </div>
//     )}
//   </div>
// </div> */}
//  {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
//     <label className="sm:w-1/4 w-full text-left text-xs font-medium text-gray-700">
//       Assigned To
//     </label>
//     <div className="relative w-full sm:w-1/4">
//       <input
//         type="search"
//         name="AssignedTo"
//         value={searchUserValue} // Show the full name in the input
//         onChange={handleUserChange}
//         onFocus={() => setIsUserFocused(true)}
//         className={`p-1 w-full border rounded-md ${
//           errors.AssignedTo ? "border-red-500" : "border-gray-300"
//         }`}
//         placeholder="Search by User Name..."
//       />
//       {errors.AssignTo && (
//         <p className="text-red-500 text-sm mt-1">{errors.AssignTo}</p>
//       )}

    
//       <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center pointer-events-none">
//         <IoIosSearch aria-label="Search Icon" />
//       </div>

     
//       {isUserFocused && searchUserValue && searchUserValue.length >= 1 && (
//         <div
//           className="absolute flex flex-col top-full mt-1 border rounded-lg p-2 w-full bg-white z-10"
//           style={{
//             maxHeight: '200px',
//             overflowY: 'auto',
//           }}
//         >
//           {results.length > 0 ? (
//             <>
//               <div className="mb-2 text-sm text-gray-600">
//                 {results.length} Result{results.length > 1 ? "s" : ""}
//               </div>
//               {results.map((result) => (
//                 <div
//                   className="relative cursor-pointer p-2 hover:bg-gray-100 group"
//                   key={result.CustomerID}
//                   onClick={() => handleUserSelect(result)}
//                 >
//                   <span className="font-medium">
//                     {result.FirstName} {result.LastName}
//                   </span>
//                 </div>
//               ))}
//             </>
//           ) : (
//             !hasUserSelected && (
//               <div className="p-2 overflow-clip text-gray-500">No results found.</div>
//             )
//           )}
//         </div>
//       )}
//     </div>
//   </div> */}

// <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
//   <label className="sm:w-1/4 w-full text-left text-xs font-medium text-gray-700">
//     Assigned To
//   </label>
//   <div className="relative w-full sm:w-1/4">
//     <input
//       type="search"
//       name="AssignedTo"
//       value={searchUserValue}
//       onChange={handleUserChange}
//       onFocus={() => setIsUserFocused(true)}
//       className={`p-1 pr-10 w-full border rounded-md ${
//         errors.AssignedTo ? "border-red-500" : "border-gray-300"
//       }`}
//       placeholder="Search by User Name..."
//     />
//     {errors.AssignedTo && (
//       <p className="text-red-500 text-sm mt-1">{errors.AssignedTo}</p>
//     )}

//     {/* Search Icon */}
//     <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center pointer-events-none">
//       <IoIosSearch aria-label="Search Icon" />
//     </div>

//     {/* Dropdown for filtered users */}
//     {isUserFocused && searchUserValue && searchUserValue.length >= 1 && results.length > 0 && (
//       <div
//         className="absolute flex flex-col top-full mt-1 border rounded-lg p-2 w-full bg-white z-10"
//         style={{
//           maxHeight: '200px',
//           overflowY: 'auto',
//         }}
//       >
//         <div className="mb-2 text-sm text-gray-600">
//           {results.length} Result{results.length > 1 ? "s" : ""}
//         </div>
//         {results.map((result) => (
//           <div
//             className="relative cursor-pointer p-2 hover:bg-gray-100 group"
//             key={result.CustomerID}
//             onClick={() => handleUserSelect(result)}
//           >
//             <span className="font-medium">
//               {result.FirstName} {result.LastName}
//             </span>
//           </div>
//         ))}
//       </div>
//     )}

//     {/* Display No Results Message */}
//     {isUserFocused && searchUserValue && results.length === 0 && (
//       <div className="p-2 overflow-clip text-gray-500">No results found.</div>
//     )}
//   </div>
// </div>


//  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
//       <label className="sm:w-1/4 w-full text-left text-xs font-medium text-gray-700">
//        Department:
//       </label>
//       <Combobox value={selectedRole} onChange={handleRoleChanging}>
//         <div className="relative w-full sm:w-1/4">
//           <Combobox.Input
//             className={`p-1 w-full border rounded-md ${
//               errors.UserRole ? "border-red-500" : "border-gray-300"
//             }`}
//             onChange={(e) => setQuery(e.target.value)}
//             displayValue={(roleID) => {
//               const selected = roles.find((role) => role.RoleID === roleID);
//               return selected ? selected.RoleName : ""; // Make sure selected value is returned
//             }}
//           />
//           <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//             <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//           </Combobox.Button>
//           <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-white border border-gray-300 rounded-md shadow-lg">
//             {filteredRolesList.length > 0 ? (
//               filteredRolesList.map((role) => (
//                 <Combobox.Option
//                   key={role.RoleID}
//                   value={role.RoleID}
//                   className={({ active }) =>
//                     `cursor-pointer select-none relative p-2 ${
//                       active ? "bg-blue-500 text-white" : "text-gray-900"
//                     }`
//                   }
//                 >
//                   {role.RoleName}
//                 </Combobox.Option>
//               ))
//             ) : (
//               <div className="p-2 text-gray-500">No roles found</div>
//             )}
//           </Combobox.Options>
//         </div>
//       </Combobox>
//       {errors.UserRole && (
//         <p className="text-red-500 text-sm ml-2">{errors.UserRole}</p>
//       )}

//             </div> 
//               <div className="flex flex-col hidden sm:flex-row justify-center items-center gap-4 w-full">
//                 <label className="sm:w-1/4 w-full text-left text-xs font-medium text-gray-700">
//                   StartDate
//                 </label>
//                 <input
//                   type="date"
//                   name="StartDate"
//                   value={formatDate(formOrderDetails.StartDate)}
//                   onChange={handleChange}
//                   className={`p-1 w-full sm:w-1/4 border rounded-md ${
//                     errors.StartDate ? "border-red-500" : "border-gray-300"
//                   }`}
//                 />
//               </div>

//               <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
//                 <label className="sm:w-1/4 w-full text-left text-xs font-medium text-gray-700">
//                   Expected Delivery in Days:
//                 </label>
//                 <input
//                   type="number"
//                   name="ExpectedDays"
//                   value={formOrderDetails.ExpectedDays}
//                   onChange={handleExpectedDaysChange}
//                   className={`p-1 w-full sm:w-1/4 border rounded-md ${
//                     errors.ExpectedDays ? "border-red-500" : "border-gray-300"
//                   }`}
//                   min="0" // Ensure the user can't select a negative number of days
//                 />
//               </div>

//               <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
//                 <label className="sm:w-1/4 w-full text-left text-xs font-medium text-gray-700">
//                   Delivery Date:
//                 </label>
//                 <input
//                   type="date"
//                   name="DeliveryDate"
//                   value={formatDate(formOrderDetails.DeliveryDate)}
//                   onChange={handleDateChanging} // Manually change if needed
//                   className={`p-1 w-full sm:w-1/4 border rounded-md ${
//                     errors.DeliveryDate ? "border-red-500" : "border-gray-300"
//                   }`}
//                 />
//                 {errors.DeliveryDate && (
//                   <p className="text-red-500 text-sm ml-2">
//                     {errors.DeliveryDate}
//                   </p>
//                 )}
//               </div>

// <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
//                 <label className="sm:w-1/4 w-full text-left text-xs font-medium text-gray-700">
//         Upload Document:
//       </label>
//       <div className="flex items-center sm:w-1/4 w-full border rounded-md bg-white p-2">
//         <input
//           type="file"
//           multiple
//           accept="image/*,application/pdf,.doc,.docx"
//           onChange={handleFileChange}
//           className="hidden"
//           id="UploadFiles"
//         />
    
//          <label
//           htmlFor="UploadFiles"
//           className="flex items-center justify-center text-black-500 cursor-pointer"
//         >
//           <FaUpload className="mr-2" />
//           <span>Upload</span>
//         </label>

//         {/* Render Image Previews */}
//         {imagePreviews.length > 0 && (
//           <div className="flex items-center ml-2">
//             {imagePreviews.map((preview, index) => (
//               <div key={index} className="relative inline-block">
//                 <img
//                   src={preview}
//                   alt={`Preview ${index}`}
//                   className="w-5 h-5 object-cover mr-2"
//                 />
//                 <button
//                   onClick={() => handleImageRemove(index)}
//                   className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full text-xs"
//                 >
//                   *
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Render PDF Previews */}
//         {pdfPreviews.length > 0 && (
//           <div className="flex items-center ml-2">
//             {pdfPreviews.map((pdfPreview, index) => (
//               <div key={index} className="flex items-center">
             
//                 <a
//   href={pdfPreview}
//   target="_blank"
//   rel="noopener noreferrer"
//   className="text-blue-600 underline mx-1 flex items-center mr-2"  // Added flex and items-center
// >
//   <FaEye className="mr-1 ml-3" />  {/* Eye icon */}
//   View
// </a>

//                 <button
//                   onClick={() => handlePdfRemove(index)}
//                   className="ml-2 bg-red-500 text-white p-1 rounded-full text-xs"
//                 >
//                   *
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>

//     <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
//                 <label className="sm:w-1/4 w-full text-left text-xs font-medium text-gray-700">
//                   Comments
//                 </label>
//                 <input
//                   type="text"
//                   name="Comments"
//                   value={formOrderDetails.Comments}
//                   onChange={(e) =>
//                     setFormOrderDetails({
//                       ...formOrderDetails,
//                       Comments: e.target.value,
//                     })
//                   }
//                   className={`p-1 w-full sm:w-1/4 border rounded-md ${
//                     errors.Comments ? "border-red-500" : "border-gray-300"
//                   }`}
//                 />
//                 {errors.Comments && (
//                   <p className="text-red-500 text-sm ml-2">{errors.Comments}</p>
//                 )}
//               </div>
   
//             </div>

// {/* <Box sx={{ maxWidth: 300, mt: 4,
//    maxHeight: "310px", 
//    overflowY: "auto", 
//  }}>
//         <Stepper activeStep={activeStep} orientation="vertical">
//           {filteredStatusList.length > 0 ? (
//             filteredStatusList.map((status, index) => (
//               <Step key={status.StatusID} completed={completedSteps[index]}  >
//                 <StepLabel>
//                   {status.OrderStatus}
//                 </StepLabel>
//                 <StepContent>
//                   <Typography className="text-gray-500" color="green">
//                   {selectedStatusText}
//                   </Typography>
//                 </StepContent>
//               </Step>
//             ))
//           ) : (
//             <Typography className="p-2 text-gray-500">No status found</Typography>
//           )}
//         </Stepper>

//         {activeStep === filteredStatusList.length && (
//           <Paper square elevation={0} sx={{ p: 3 }}>
//             <Typography>All steps completed - you're finished</Typography>
//             <Button onClick={() => setActiveStep(0)} sx={{ mt: 1, mr: 1 }}>
//               Reset
//             </Button>
//           </Paper>
//         )}
//       </Box> */}
//  <div onScroll={handleScroll} className="overflow-y-auto max-h-80">
//       <nav aria-label="Progress">
//         <ol role="list">
//           {filteredStatusList.slice(0, visibleSteps).map((status, index) => (
//             <li
//               key={status.StatusID}
//               className={`relative pb-10 cursor-pointer ${completedSteps[index] ? 'completed' : ''}`}
//               onClick={() => handleStepClick(index)}
//             >
//               {/* Step rendering logic with lines */}
//               <div
//                 className={`step-indicator flex items-center ${
//                   completedSteps[index] ? 'text-gray-800' : 'text-gray-800'
//                 } ${activeStep === index ? 'text-orange-500' : ''}`}
//               >
//                 {/* Check icon for completed steps */}
//                 {/* <span
//                   className={`mr-2 h-6 w-6 rounded-full flex items-center justify-center ${
//                     completedSteps[index] ? 'bg-green-600 text-white' : 'bg-gray-300'
//                   }`}
//                 >
//                   {completedSteps[index] ? '✓' : index + 1}
//                 </span> */}
// <span
//   className={`mr-2 h-6 w-6 rounded-full flex items-center justify-center
//     ${ completedSteps[index] ?
//        'bg-green-400 text-white' : 'bg-gray-300'}
//       ${   activeStep === index 
//         ? 'bg-orange-400 text-white' 
//         : 'bg-gray-300'
//   }`}
// >
// {activeStep === index ? <GrInProgress /> : completedSteps[index] ? '✓' : index + 1}
// </span>

//                 {/* Status Text */}
//                 {status.OrderStatus}
//               </div>

//               {/* Line between steps */}
//               {index < filteredStatusList.length - 1 && (
//                 <div
//                   className={`absolute top-6 left-3 w-0.5 h-12 bg-gray-300 ${
//                     completedSteps[index] ? 'bg-green-400' : ''
//                   }`}
//                 />
//               )}
//             </li>
//           ))}
//         </ol>
//       </nav>
//       {/* <button onClick={handleReset} className="mt-4 bg-red-600 text-white px-4 py-2 rounded">
//         Reset
//       </button> */}
//     </div> 
//           </div>
//           <div className="relative mt-10 flex justify-end gap-4">
//             <div className="mt-6 flex justify-end gap-4">
//               <button type="button" 
//               onClick={saveOrderHistory}
//               className="button-base save-btn">
//                 {editMode ? "Update" : "Save"}{" "}
//               </button>
//               <button
//                 type="button"
//                 onClick={handleCancel}
//                 className="button-base cancel-btn"
//               >
//                 Cancel
//               </button>
//             </div>
//             {isLoading && (
//                   <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-700">
//                     <LoadingAnimation />
//                   </div>
//                 )}
//             {showModal && (
//               <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//                 <div className="bg-white rounded-lg p-6 text-center shadow-lg w-11/12 max-w-sm">
//                   <p className="text-lg">{popupMessage}</p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </form>
    
// <TableContainer component={Paper} className="mt-4 shadow-md">
//   <Table aria-label="orders table" className="min-w-full border-collapse border border-gray-300">
//     <TableHead className="bg-custom-darkblue">
//       <TableRow>
//         <StyledTableCell
//           align="center"
//           sx={{ borderRight: "1px solid #e5e7eb", color: "white", fontWeight: "bold" }}
//         >
//           Order Status
//         </StyledTableCell>
//         <StyledTableCell
//           align="center"
//           sx={{ borderRight: "1px solid #e5e7eb", color: "white", fontWeight: "bold" }}
//         >
//           Delivery Date
//         </StyledTableCell>
//         <StyledTableCell
//           align="center"
//           sx={{ borderRight: "1px solid #e5e7eb", color: "white", fontWeight: "bold" }}
//         >
//           Assigned To
//         </StyledTableCell>
//         <StyledTableCell
//           align="center"
//           sx={{ borderRight: "1px solid #e5e7eb", color: "white", fontWeight: "bold" }}
//         >
//           Comments
//         </StyledTableCell>
//         <StyledTableCell
//           align="center"
//           sx={{ borderRight: "1px solid #e5e7eb", color: "white", fontWeight: "bold" }}
//         >
//           Document
//         </StyledTableCell>
//         <StyledTableCell
//           align="center"
//           sx={{ color: "white", fontWeight: "bold" }}
//         >
//           Actions
//         </StyledTableCell>
//       </TableRow>
//     </TableHead>
//     <TableBody>
//       {statusDetails.length > 0 ? (
//         statusDetails.map((status, index) => (
//           <TableRow key={index} className="hover:bg-gray-100">
//             {/* Order Status */}
//             <StyledTableCell align="center" className="border-r border-gray-300">
//               <StatusBadge status={status.OrderStatus} />
//             </StyledTableCell>

//             <StyledTableCell align="center" className="border-r border-gray-300">
//   <p className="font-thin">
//     {/* Start Date */}
//     Start Date: {status.StartDate ? (() => {
//       const date = new Date(status.StartDate);
//       const month = date.toLocaleString("en-US", { month: "short" });
//       const day = String(date.getDate()).padStart(2, "0"); // Pad day with leading zero if needed
//       const year = date.getFullYear();
      
//       return `${month} ${day}, ${year}`; // Format: Jan 01, 2024
//     })() : "N/A"}
//     <br />
    
//     {/* Delivery Date */}
//     End Date: {status.DeliveryDate ? (() => {
//       const date = new Date(status.DeliveryDate);
//       const month = date.toLocaleString("en-US", { month: "short" });
//       const day = String(date.getDate()).padStart(2, "0"); // Pad day with leading zero if needed
//       const year = date.getFullYear();

//       return `${month} ${day}, ${year}`; // Format: Jan 01, 2024
//     })() : "N/A"}
//   </p>
// </StyledTableCell>

// {/* Assigned To: {status.FirstName && status.LastName ? `${status.FirstName} ${status.LastName}` : "N/A"} */}
//         {/* <StyledTableCell align="center" className="border-r border-gray-300">
//   <p className="font-thin">
//     Assigned To: {status.FirstName||"N/A"}
//     <br />
//     Department: {status.RoleName || "N/A"}
//   </p>
// </StyledTableCell> */}

// <StyledTableCell align="center" className="border-r border-gray-300">
//   <p className="font-thin">
//     {/* Log the status object */}
//     {console.log("Status Data: ", status)}

//     {/* Display the FirstName */}
//     Assigned To: {status?.AssignTo|| "N/A"}
//     <br />
//     Department: {status?.RoleName || "N/A"}
//   </p>
// </StyledTableCell>


//             {/* Comments */}
//             <StyledTableCell align="center" className="border-r border-gray-300">
//               {status.Comments || "N/A"}
//             </StyledTableCell>

//             {/* Document Links */}
//             <StyledTableCell align="center" className="border-r border-gray-300">
//               {Array.isArray(status.viewdocuments) && status.viewdocuments.length > 0 ? (
//                 status.viewdocuments.map((url, docIndex) => (
//                   <div key={docIndex} className="flex items-center mb-0">
//                     <IconButton href={url} target="_blank" rel="noopener noreferrer" color="primary">
//                       <AiOutlineEye size={20} />
//                       <span className="ml-2 font-bold text-sm">View</span>
//                     </IconButton>
//                   </div>
//                 ))
//               ) : (
//                 <span>No Documents to View</span>
//               )}

//               {Array.isArray(status.DownloadDocuments) && status.DownloadDocuments.length > 0 ? (
//                 status.DownloadDocuments.map((url, docIndex) => (
//                   <div key={docIndex} className="flex items-center mb-0">
//                     <IconButton href={url} download color="success">
//                       <FiDownload size={20} />
//                       <span className="ml-2 font-bold text-sm">Download</span>
//                     </IconButton>
//                   </div>
//                 ))
//               ) : (
//                 <span></span>
//               )}
//             </StyledTableCell>

//             {/* Actions - Edit and Delete */}
//             <StyledTableCell align="center" className="border-r border-gray-300">
//               <div className="flex justify-center gap-2">
//                 {/* Edit Button */}
//                 <button
//                   type="button"
//                   onClick={() => handleEditstatus(status.OrderHistoryID, status.StatusID)}
//                   className="button edit-button"
//                 >
//                   <AiOutlineEdit aria-hidden="true" className="h-4 w-4" />
//                   Edit
//                 </button>

//                 {/* Delete Button */}
//                 <button
//                   type="button"
//                   // onClick={() => handleDelete(generatedId)}
//                   className="button delete-button"
//                 >
//                   <MdOutlineCancel aria-hidden="true" className="h-4 w-4" />
//                   Delete
//                 </button>
//               </div>
//             </StyledTableCell>
//           </TableRow>
//         ))
//       ) : (
//         <TableRow>
//           <StyledTableCell align="center" colSpan={7}>
//             {loading ? "Loading..." : error ? error : "No Order Found"}
//           </StyledTableCell>
//         </TableRow>
//       )}
//     </TableBody>
//   </Table>
// </TableContainer>


//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={orders.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </>
//     </Box>
//   );
// };

// export default YourComponent;



import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  IconButton,
} from "@mui/material";
import { GrInProgress } from "react-icons/gr";

import { FaUpload, FaEdit, FaTrashAlt } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineEye } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import StatusBadge from "./Statuses"; // Make sure you have this component
import Step2 from "./payment";
import { useNavigate } from "react-router-dom";
import {
  CREATEORUPDATE_ORDER_HISTORY__API,
  GET_ALL_HYSTORYID_API,GETALLUSERS_API,GETALLROLESS_API,
} from "../../Constants/apiRoutes";
import LoadingAnimation from "../Loading/LoadingAnimation";
import { IdContext } from "../../Context/IdContext";
import { GETORDERBYID_API } from "../../Constants/apiRoutes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Combobox } from "@headlessui/react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/20/solid";
import {
  StyledTableCell,
  StyledTableRow,
  TablePaginationActions,
} from "../CustomTablePagination";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import Typography from "@mui/material/Typography";

import { OrderContext } from "../../Context/orderContext";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { IoIosSearch } from "react-icons/io";
import { FaEye } from 'react-icons/fa';  


const YourComponent = ({ onBack, onNext,  }) => {
  // const steps = [
  //   {
  //     label: "Order Placed",
  //     description: "The order has been placed successfully.",
  //   },
  //   {
  //     label: "Order Processed",
  //     description: "The order is currently being processed.",
  //   },
  //   {
  //     label: "Order Shipped",
  //     description: "The order has been shipped to the delivery address.",
  //   },
  //   {
  //     label: "Order Delivered",
  //     description: "The order has been delivered to the customer.",
  //   },
  // ];

  // const orderStatuses = [
  //   "Order Placed",
  //   "Order Processed",
  //   "Order Shipped",
  //   "Order Delivered",
  // ];

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  //   setSelectedStatus("");
  // };

  // const handleOrderStatusChange = (event) => {
  //   const status = event.target.value;
  //   setSelectedStatus(status);
  //   const statusIndex = orderStatuses.indexOf(status);
  //   setActiveStep(statusIndex);
  // };


   // Define state for orders, images, pdfPreview, errors, etc.
   const [formOrderDetails, setFormOrderDetails] = useState({
    OrderStatus: "",
    ExpectedDays: "",
    DeliveryDate: "",
    Comments: "",
    AssignTo:"",
    RoleID:"",
    UploadDocument: "",
    StartDate: new Date().toISOString().split("T")[0], // Set StartDate to today's date in YYYY-MM-DD format
  });
  const { orderIdDetails } = useContext(OrderContext);
  const location = useLocation();

  // Get orderId from either location state or context
  const { orderId } = location.state || {};
  const OrderID = orderId || orderIdDetails?.order?.OrderID;

  console.log(orderIdDetails?.order?.OrderID);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const [images, setImages] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [pdfPreview, setPdfPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [showModal, setShowModal] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [pdfPreviews, setPdfPreviews] = useState([]);
  {
    activeStep === 2 && <Step2 />;
  }
  const { generatedId, customerId, orderDate } = useContext(IdContext);
  const [orderStatusList, setOrderStatusList] = useState([]);
  const [results, setResults] = useState([]);
const [roles, setRoles] = useState([]);
const [filteredRolesList, setFilteredRolesList] = useState([]);

const [selectedRole, setSelectedRole] = useState(null);
  useEffect(() => {
    const fetchOrderStatuses = async () => {
      try {
        const response = await fetch(
          "https://imly-b2y.onrender.com/api/Orderstatus/getAllOrderStatus"
        );
        const data = await response.json();

        // Log the data to see its structure
        console.log("Fetched Order Statuses:", data);

        // Check if data is in the expected format
        if (Array.isArray(data.data)) {
          setOrderStatusList(data.data);
        }
      } catch (error) {
        console.error("Error fetching order statuses:", error);
      }
    };

    fetchOrderStatuses();
  }, []);

  // const handleChanging = (value) => {
  //   const selectedStatus = orderStatusList.find(
  //     (status) => status.StatusID === parseInt(value)
  //   );
  //   setSelectedStatus(selectedStatus.StatusID); // Update state to reflect change in the UI
  //   // Update formOrderDetails with the selected OrderStatus and StatusID
  //   setFormOrderDetails((prevState) => ({
  //     ...prevState,
  //     OrderStatus: selectedStatus ? selectedStatus.OrderStatus : "",
  //     StatusID: value, // Store StatusID directly from the selection
  //   }));
  // };

  // Save order history function
  // Save order history function
  // const handleChanging = (statusID) => {
  //   const selectedStepIndex = filteredStatusList.findIndex(
  //     (status) => status.StatusID === statusID
  //   );

  //   // Complete the current step and all previous steps
  //   const newCompletedSteps = { ...completedSteps };
  //   for (let i = 0; i <= selectedStepIndex; i++) {
  //     newCompletedSteps[i] = true; // Mark the step and all previous ones as completed
  //   }

  //   setCompletedSteps(newCompletedSteps);
  //   setActiveStep(selectedStepIndex); // Set active step to the selected one
  //   setSelectedStatus(statusID); // Update selected status
  // };

  // const handleChanging = (statusID) => {
  //   // Find the index of the selected status in the filteredStatusList
  //   const selectedStepIndex = filteredStatusList.findIndex(
  //     (status) => status.StatusID === statusID
  //   );

  //   // If the status is found
  //   if (selectedStepIndex !== -1) {
  //     // Create a copy of the current completed steps object
  //     const newCompletedSteps = { ...completedSteps };

  //     // Mark the current step and all previous steps as completed
  //     for (let i = 0; i <= selectedStepIndex; i++) {
  //       newCompletedSteps[i] = true; // Set true to mark as completed
  //     }

  //     // Update the state with the new completed steps and set the active step to the selected one
  //     setCompletedSteps(newCompletedSteps);
  //     setActiveStep(selectedStepIndex);
  //     setSelectedStatus(statusID); // Update selected status
  //   }
  // };
const handleChanging = (statusID) => {
  // Find the index of the selected status in the filteredStatusList
  const selectedStepIndex = filteredStatusList.findIndex(
    (status) => status.StatusID === statusID
  );

  // Create a new object for completed steps
  const newCompletedSteps = {};

  // Mark the current step and all previous steps as completed (ticked)
  for (let i = 0; i <= selectedStepIndex; i++) {
    newCompletedSteps[i] = true; // Mark steps as completed
  }

  // Unmark all steps after the selected one (untick)
  for (let i = selectedStepIndex + 1; i < filteredStatusList.length; i++) {
    newCompletedSteps[i] = false; // Set false to untick remaining steps
  }

  // Update the state with the new completed steps and set the active step
  setCompletedSteps(newCompletedSteps);
  setActiveStep(selectedStepIndex); // Set the active step to the selected one
  setSelectedStatus(statusID); // Update the selected status
};

  // const saveOrderHistory = async () => {
  //   const { StatusID, OrderStatus, DeliveryDate, Comments } = formOrderDetails;

  //   // Validate required fields
  //   if (!DeliveryDate) {
  //     toast.error("Delivery date is required.", {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //     return;
  //   }

  //   // Create a new FormData object
  //   const formData = new FormData();
  //   formData.append("TenantID", 1);
  //   formData.append(
  //     "OrderHistoryID",
  //     editMode ? formOrderDetails.OrderHistoryID : 0
  //   ); // Use existing ID for updates
  //   formData.append("OrderID", OrderID);
  //   formData.append("StatusID", StatusID || 0);
  //   formData.append("StartDate", orderDate);
  //   formData.append("EndDate", DeliveryDate);
  //   formData.append("AssignTo", "2");
  //   formData.append("Comments", Comments);
  //   formData.append("UserID", 2);
  //   formData.append("CreatedBy", "sandy");
  //   formData.append("OrderHistoryStatus", OrderStatus || "");

  //   // Append the binary data of each file as UploadDocument
  //   if (images && images.length > 0) {
  //     images.forEach((fileData, index) => {
  //       const { data, name, type } = fileData;
  //       const blob = new Blob([data], { type });
  //       formData.append("UploadDocument", blob, name);
  //     });
  //   }
  //   setIsLoading(true);
  //   try {
  //     // API request to create or update order history
  //     const response = await fetch(CREATEORUPDATE_ORDER_HISTORY__API, {
  //       method:  "POST", // Use PUT for updates
  //       body: formData,
  //     });

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const data = await response.json();
  //     console.log("API Response:", data);

  //     // Conditional success messages
  //     if (data.StatusCode === "SUCCESS") {
  //       toast.success(
  //         editMode
  //           ? "Order status updated successfully!"
  //           : "Order history created successfully!",
  //         {
  //           position: "top-right",
  //           autoClose: 5000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //         }
  //       );

  //       closeModalAndMoveToNextStep();
  //     } else {
  //       toast.error(
  //         data.message || "Error occurred while processing the request.",
  //         {
  //           position: "top-right",
  //           autoClose: 5000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //         }
  //       );
  //       closeModalAfterDelay();
  //     }
  //   } catch (error) {
  //     toast.error("" + error.message, {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //     closeModalAfterDelay();
  
  //   }
  //   finally {
  //     setIsLoading(false); // Hide loader when done
  //   }
  // };

  // Close the modal and move to the next step after a delay
 
  const saveOrderHistory = async () => {
    const { StatusID, OrderStatus, DeliveryDate, Comments,AssignTo,RoleID,UserID,OrderHistoryID} = formOrderDetails;

    // Validate required fields
    if (!DeliveryDate) {
      toast.error("Delivery date is required.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const userId = localStorage.getItem("UserID");
    console.log("UserId",userId)

    // Create a new FormData object
    const formData = new FormData();
    formData.append("TenantID", 1);
    formData.append(
      "OrderHistoryID",
      editMode ? formOrderDetails.OrderHistoryID : 0
    ); // Use existing ID for updates
    formData.append("OrderID", OrderID);
    formData.append("StartDate", orderDate);
    formData.append("EndDate", DeliveryDate);
    formData.append("AssignTo", AssignTo );
    formData.append("Comments", Comments);
    formData.append("UserID", userId);
    formData.append("RoleID", RoleID );
    formData.append("CreatedBy", "sandy");
formData.append("OrderStatus", selectedStatus || "N/A"); // selectedStatus holds StatusID

// If you're passing the full status object and need the status text:
const selectedOrderStatus = orderStatusList.find(
  (status) => status.StatusID === selectedStatus
);

// formData.append("OrderStatus", selectedOrderStatus?.OrderStatus || "N/A");

// Assuming `selectedStatus` is the StatusID selected from the combobox
formData.append("StatusID", selectedStatus || 1); // selectedStatus holds StatusID

// Append the `OrderStatus` text to formData, fallback to "N/A" if not found
formData.append("OrderStatus", selectedOrderStatus?.OrderStatus || "N/A");
    // Append the binary data of each file as UploadDocument
    if (images && images.length > 0) {
      images.forEach((fileData, index) => {
        const { data, name, type } = fileData;
        const blob = new Blob([data], { type });
        formData.append("UploadDocument", blob, name);
      });
    }
    setIsLoading(true);
    try {
      // API request to create or update order history
      const response = await fetch(CREATEORUPDATE_ORDER_HISTORY__API, {
        method:  "POST", // Use PUT for updates
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("API Response:", data);

      // Conditional success messages
      if (data.StatusCode === "SUCCESS") {
        toast.success(
          editMode
            ? "Order status updated successfully!"
            : "Order history created successfully!",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        const updatedCustomer = await  fetchOrderDetails(OrderID);
        closeModalAndMoveToNextStep();
      } else {
        toast.error(
          data.message || "Error occurred while processing the request.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        closeModalAfterDelay();
      }
    } catch (error) {
      toast.error("" + error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      closeModalAfterDelay();
  
    }
    finally {
      setIsLoading(false); // Hide loader when done
    }
  };

  const closeModalAndMoveToNextStep = () => {
    setTimeout(() => {
      setShowModal(false);
      // onNext(); 
    }, 3000); // Delay of 4 seconds
  };

  // Close the modal after a delay (for error cases)
  const closeModalAfterDelay = () => {
    setTimeout(() => {
      setShowModal(false); // Close the modal after a delay
    }, 3000); // Delay of 4 seconds
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormOrderDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handledate = (e) => {
    const { name, value } = e.target;
    setFormOrderDetails((prevDetails) => {
      const updatedDetails = { ...prevDetails, [name]: value };
      if (name === "ExpectedDurationDays") {
        const days = parseInt(value, 10);
        if (!isNaN(days) && days >= 0) {
          const today = new Date();
          updatedDetails.DeliveryDate = addDays(today, days);
        } else {
          updatedDetails.DeliveryDate = ""; // Reset if invalid
        }
      }
      return updatedDetails;
    });
  };

  // const formatDate = (isoDate) => {
  //   if (!isoDate) return ""; // Return empty if no date is present
  //   return new Date(isoDate).toISOString().split('T')[0]; // Convert to YYYY-MM-DD
  // };
  // const handleDateChanging = (e) => {
  //   const { value } = e.target;
  //   setFormOrderDetails((prevDetails) => ({
  //     ...prevDetails,
  //     DeliveryDate: value, // Manually update the DeliveryDate
  //   }));
  //   const newDate = e.target.value;
  //   const isoDate = new Date(newDate).toISOString(); // Convert back to ISO format
  //   setFormOrderDetails({ ...formOrderDetails, DeliveryDate: isoDate });
  // };

  // Utility function to format the date as YYYY-MM-DD
  // const formatDate = (isoDate) => {
  //   if (!isoDate) return ""; // Return empty if no date is present
  //   return new Date(isoDate).toISOString().split("T")[0]; // Convert to YYYY-MM-DD
  // };

  const formatDate = (date) => {
    if (!date) return ""; // If the date is null or undefined, return an empty string.
    const validDate = new Date(date);
    return !isNaN(validDate.getTime())
      ? validDate.toISOString().split("T")[0] // Return formatted date
      : ""; // Return empty string if the date is invalid
  };
  
  const handleExpectedDaysChange = (e) => {
    const expectedDays = parseInt(e.target.value, 10);

    // Validate input
    if (isNaN(expectedDays) || expectedDays < 1) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        ExpectedDays: "Please enter a valid number of days.",
      }));
      return;
    }

    // Clear any errors
    setErrors((prevErrors) => ({
      ...prevErrors,
      ExpectedDays: "",
    }));

    // Calculate the delivery date based on StartDate
    const deliveryDate = calculateExpectedDeliveryDate(
      formOrderDetails.StartDate,
      expectedDays
    );

    // Update form state with expected days and delivery date
    setFormOrderDetails((prevDetails) => ({
      ...prevDetails,
      ExpectedDays: expectedDays,
      DeliveryDate: deliveryDate, // This will now correctly update
    }));
  };
  // Utility function to calculate the delivery date based on StartDate and ExpectedDays
  const calculateExpectedDeliveryDate = (startDate, daysToAdd) => {
    if (!startDate || isNaN(new Date(startDate))) {
      return ""; // Return an empty string if the startDate is invalid
    }
    const date = new Date(startDate);
    date.setDate(date.getDate() + daysToAdd); // Add the number of days
    return formatDate(date); // Return in YYYY-MM-DD format
  };

  // Handler for manual changes in the Delivery Date input (if needed)
  const handleDateChanging = (e) => {
    const { value } = e.target;
    const newDate = new Date(value);

    if (isNaN(newDate)) {
      setFormOrderDetails((prevDetails) => ({
        ...prevDetails,
        DeliveryDate: "", // Reset if invalid
      }));
    } else {
      setFormOrderDetails((prevDetails) => ({
        ...prevDetails,
        DeliveryDate: newDate.toISOString().split("T")[0], // Format as YYYY-MM-DD
      }));
    }
  };

  const handleFileChange = (event) => {
    const files = event.target.files; // Get the FileList object from the input
    const selectedFiles = Array.from(files); // Convert the FileList to an array

    const UploadDocuments = {}; // Object to store key-value pairs of document names
    const binaryFiles = []; // Array to store binary files
    const previews = [];

    selectedFiles.forEach((file, index) => {
      // Create a URL for preview if it's an image
      if (file.type.startsWith("image/")) {
        const previewUrl = URL.createObjectURL(file);
        previews.push(previewUrl); // Add to previews array
      }

      // Store document names as key-value pairs
      UploadDocuments[`Document_${index + 1}`] = file.name; // Store document names

      const reader = new FileReader();
      reader.onload = () => {
        // After reading the file, we can get the binary data
        const binaryData = reader.result;
        binaryFiles.push({
          name: file.name,
          type: file.type,
          data: binaryData,
        });

        // Check if the file is a PDF
        if (file.type === "application/pdf") {
          const pdfPreviewUrl = URL.createObjectURL(file); // Create a PDF preview URL
          setPdfPreviews((prev) => [...prev, pdfPreviewUrl]); // Store PDF previews
        }

        // After processing the last file, update the state
        if (index === selectedFiles.length - 1) {
          // Store image previews and binary files in state
          setImagePreviews(previews);
          setImages(binaryFiles); // Store the actual binary files for backend upload
          setFormOrderDetails((prev) => ({
            ...prev,
            UploadDocument: UploadDocuments, // Store document names
          }));
        }
      };

      reader.readAsArrayBuffer(file); // Read the file as an ArrayBuffer
    });
  };

  // Clean up object URLs to avoid memory leaks
  useEffect(() => {
    return () => {
      // Clean up image previews
      imagePreviews.forEach((url) => URL.revokeObjectURL(url)); // Release object URLs created
      pdfPreviews.forEach((url) => URL.revokeObjectURL(url)); // Release PDF preview URLs
    };
  }, [imagePreviews, pdfPreviews]);

  const handleImageRemove = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    const newPreviews = imagePreviews.filter((_, i) => i !== index);
    setImages(newImages);
    setImagePreviews(newPreviews);
  };

  const handlePdfRemove = (index) => {
    const newPdfPreviews = pdfPreviews.filter((_, i) => i !== index);
    setPdfPreviews(newPdfPreviews); // Update PDF previews
  };

  const [file, setFile] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const handleDelete = () => {
    setFile(null);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const addDays = (date, days) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.toISOString().split("T")[0]; // Format as 'YYYY-MM-DD'
  };
  const handleCancel = () => {
    // Example: Reset form or navigate to a different page
    console.log("Cancel clicked");
    // If you want to navigate away from the form, for example:
    navigate("/Orders"); // This assumes you're using `react-router-dom` for navigation
  };
  const [selectedStatus, setSelectedStatus] = useState(
    formOrderDetails.StatusID || ""
  );
  const [query, setQuery] = useState("");

  const filteredStatusList =
    query === ""
      ? orderStatusList
      : orderStatusList.filter((status) =>
          status.OrderStatus.toLowerCase().includes(query.toLowerCase())
        );

  const handleSelect = (statusID) => {
    console.log("Selected Status ID:", statusID);
    const selectedStatus = orderStatusList.find(
      (status) => status.StatusID === statusID
    );
    console.log("Selected Status:", selectedStatus);

    setFormOrderDetails({
      ...formOrderDetails,
      OrderStatus: selectedStatus ? selectedStatus.OrderStatus : "",
      StatusID: statusID,
    });
  };

  // Helper function to calculate the duration between two dates
  const calculateDurationDays = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const duration = Math.ceil((end - start) / (1000 * 60 * 60 * 24)); // Difference in days
    return duration;
  };
  const [statusDetails, setStatusDetails] = useState([]);
  // const fetchOrderDetails = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch(`${GET_ALL_HYSTORYID_API}${OrderID}`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to fetch data");
  //     }

  //     const result = await response.json();
  //     console.log("API Response:", result); // Log the entire response

  //     // Check if result contains the expected fields
  //     const statuses = Array.isArray(result) ? result : [result];
  //     statuses.forEach((item) => {
  //       console.log("OrderID:", item.OrderID, "EndDate:", item.EndDate);
  //     });

  //     // Map the result to statusDetails
  //     const mappedStatusDetails = statuses.map((status) => ({
  //       StatusID: status.StatusID || "N/A",
  //       OrderID: status.OrderID || "N/A",
  //       OrderStatus: status.OrderStatus || "N/A",
  //       DeliveryDate: status.EndDate || "N/A",
  //       Comments: status.Comment || "N/A",
  //       OrderHistoryID: status.OrderHistoryID || "N/A",
  //       StartDate: status.StartDate || "N/A",
  //       ExpectedDays: status.ExpectedDurationDays || "N/A",
  //       DownloadDocuments:
  //         status.DownloadDocuments?.length > 0
  //           ? status.DownloadDocuments
  //           : "No Documents",
  //       viewdocuments:
  //         status.viewdocuments?.length > 0
  //           ? status.viewdocuments
  //           : "No Documents",
  //     }));

  //     console.log("Mapped Status Details:", mappedStatusDetails); // Log mapped details
  //     setStatusDetails(mappedStatusDetails);
  //   } catch (err) {
  //     setError(err.message);
  //     console.error("Fetch Error:", err.message); // Log fetch error
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const fetchOrderDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${GET_ALL_HYSTORYID_API}${OrderID}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
  
      const result = await response.json();
      console.log("API Response:", result); // Log the entire response
  
      const statuses = Array.isArray(result) ? result : [result];
  
      // Map the result to statusDetails
      const mappedStatusDetails = statuses.map((status) => ({
        StatusID: status.StatusID || "N/A",
        OrderID: status.OrderID || "N/A",
        AssignTo:status.AssignTo||"N/A",
        AssignTo:status.FirstName||"N/A",
        RoleID: status.RoleID || "N/A",
        RoleName: status.RoleName || "N/A",
        OrderStatus: status.OrderStatus || "N/A",
        OrderStatus: status.OrderStatus || "N/A",
        DeliveryDate: status.EndDate || "N/A",
        Comments: status.Comment || "N/A",
        OrderHistoryID: status.OrderHistoryID || "N/A",
        StartDate: status.StartDate || "N/A",
        ExpectedDays: status.ExpectedDurationDays || "N/A",
        DownloadDocuments:
          status.DownloadDocuments?.length > 0 ? status.DownloadDocuments : "No Documents",
        viewdocuments:
          status.viewdocuments?.length > 0 ? status.viewdocuments : "No Documents",
      }));
  
      setStatusDetails(mappedStatusDetails);
  
      // Automatically set the active step based on the first record's status
      if (mappedStatusDetails.length > 0) {
        const firstRecordStatus = mappedStatusDetails[0].OrderStatus;
        updateStepperStatus(firstRecordStatus);
      }
    } catch (err) {
      setError(err.message);
      console.error("Fetch Error:", err.message); // Log fetch error
    } finally {
      setLoading(false);
    }
  };
  
  // Function to update stepper based on order status
  const updateStepperStatus = (firstOrderStatus) => {
    // Example mapping order status to stepper step index
    const stepIndexMap = {
      "Quick Quote": 0,
      "Initial Design": 1,
      "Initial Measurements": 2,
      "Revised Design": 3, // You could adjust this for specific revision numbers like R1, R2, etc.
      "Final Measurement": 4,
      "Signup Document": 5,
      "Production": 6,
      "PDI": 7,
      "Dispatch": 8, // If there are multiple dispatches, you can handle them accordingly
      "Installation": 9,
      "Completion": 10,
      "Canceled": 11,
    };
    
  
    // Find the corresponding step index for the first record's OrderStatus
    const activeStepIndex = stepIndexMap[firstOrderStatus] ?? 0;
  
    // Set the active step and mark steps as completed up to the active step
    const newCompletedSteps = {};
    for (let i = 0; i <= activeStepIndex; i++) {
      newCompletedSteps[i] = true;
    }
  
    setCompletedSteps(newCompletedSteps);
    setActiveStep(activeStepIndex); // Set active step to the corresponding index
  };
  
  // Fetch order details on component mount

 
  useEffect(() => {
    fetchOrderDetails();
  }, [generatedId]);

  // const handleEditstatus = (historyId, statusId) => {
  //   console.log("Attempting to edit Payment with historyId:", historyId);
  //   console.log(
  //     "Available OrderHistoryIDs:",
  //     statusDetails.map((status) => status.OrderHistoryID)
  //   );

  //   // Find the specific order status based on the selected historyId
  //   const statusData = statusDetails.find(
  //     (status) => status.OrderHistoryID === historyId
  //   );

  //   if (statusData) {
  //     // Set the form order details with the data found
  //     setFormOrderDetails({
  //       OrderID: statusData.OrderID || "",
  //       OrderHistoryID: statusData.OrderHistoryID || "",
  //       OrderStatus: statusData.OrderStatus || "N/A",
  //       DeliveryDate: statusData.DeliveryDate || "",
  //       Comments: statusData.Comments || "",
  //       StartDate: statusData.StartDate || "",
  //       DownloadDocuments: statusData.DownloadDocuments || [],
  //       viewdocuments: statusData.viewdocuments || [],
  //       StatusID: statusId || "",
  //     });

  //       // Find the index of the selected status in the filteredStatusList
  //       const selectedStepIndex = filteredStatusList.findIndex(
  //         (status) => status.StatusID === statusId
  //       );
      
  //       // Create a new object for completed steps
  //       const newCompletedSteps = {};
      
  //       // Mark the current step and all previous steps as completed (ticked)
  //       for (let i = 0; i <= selectedStepIndex; i++) {
  //         newCompletedSteps[i] = true; // Mark steps as completed
  //       }
      
  //       // Unmark all steps after the selected one (untick)
  //       for (let i = selectedStepIndex + 1; i < filteredStatusList.length; i++) {
  //         newCompletedSteps[i] = false; // Set false to untick remaining steps
  //       }
      
  //       // Update the state with the new completed steps and set the active step
  //       setCompletedSteps(newCompletedSteps);
  //       setActiveStep(selectedStepIndex); // Set the active step to the selected one
  //       setSelectedStatus(statusId); // Update the selected status
      

  //     // Find the status from orderStatusList where the status matches and set the StatusID
  //     const statusToSelect = orderStatusList.find(
  //       (status) => status.OrderStatus === statusData.OrderStatus
  //     );
  //     if (statusToSelect) {
  //       setSelectedStatus(statusToSelect.StatusID); // Set the selected status ID
  //     }

  //     // Log the updated form details
  //     console.log("Form Details after setting:", formOrderDetails.OrderStatus);

  //     // Enable edit mode
  //     setEditMode(true);
  //   } else {
  //     console.error(
  //       "No valid data found for the provided historyId:",
  //       historyId
  //     );
  //   }
  // };

  // Log updated formOrderDetails
  
  const handleEditstatus = (historyId, statusId) => {
    console.log("Attempting to edit Payment with historyId:", historyId);
  
    // Find the specific order status based on the selected historyId
    const statusData = statusDetails.find(
      (status) => status.OrderHistoryID === historyId
    );
  
    if (statusData) {
      // Set form order details with the data found from the backend
      setFormOrderDetails({
        OrderID: statusData.OrderID || "",
        OrderHistoryID: statusData.OrderHistoryID || "",
        OrderStatus: statusData.OrderStatus || "N/A",
        DeliveryDate: statusData.DeliveryDate || "",
        Comments: statusData.Comments || "",
        StartDate: statusData.StartDate || "",
        DownloadDocuments: statusData.DownloadDocuments || [],
        viewdocuments: statusData.viewdocuments || [],
        StatusID: statusId || "",
        AssignTo: statusData.AssignTo || "", // Corrected key
        RoleID: statusData.RoleName || "",     // Corrected key if needed
      });
    // Set the search user value for the input field
    setSearchUserValue(statusData.AssignTo || "");
    // Set the selected role for the combobox
  setSelectedRole(statusData.RoleName || "");
      // Get the index of the current status in the list
      const selectedStepIndex = filteredStatusList.findIndex(
        (status) => status.StatusID === statusId
      );
  
      // Automatically tick steps based on the status coming from the backend
      const newCompletedSteps = {};
      for (let i = 0; i <= selectedStepIndex; i++) {
        newCompletedSteps[i] = true; // Mark previous steps as completed
      }
  
      // Untick steps after the current status
      for (let i = selectedStepIndex + 1; i < filteredStatusList.length; i++) {
        newCompletedSteps[i] = false;
      }
  
      // Update completed steps and active step
      setCompletedSteps(newCompletedSteps);
      setActiveStep(selectedStepIndex); // Set the active step to the current one
      setSelectedStatus(statusId); // Update the selected status ID
  
      // Enable edit mode
      setEditMode(true);
    } else {
      console.error("No valid data found for the provided historyId:", historyId);
    }
  };
  
  useEffect(() => {
    console.log("FormOrderDetails updated:", formOrderDetails);
  }, [formOrderDetails]);

  const selectedStatusText =
    orderStatusList.find((status) => status.StatusID === selectedStatus)
      ?.OrderStatus || "";

  useEffect(() => {
    console.log("Selected Status Updated:", selectedStatusText);
  }, [selectedStatus]);

  // const [visibleSteps, setVisibleSteps] = useState(5); // Initially show 5 steps

  // const handleReset = () => {
  //   setActiveStep(0);
  //   setVisibleSteps(5); // Reset visible steps
  // };

  // const handleScroll = (e) => {
  //   const bottom =
  //     Math.ceil(e.target.scrollHeight - e.target.scrollTop) <=
  //     e.target.clientHeight;

  //   if (bottom && visibleSteps < filteredStatusList.length) {
  //     setVisibleSteps((prevSteps) => Math.min(prevSteps + 5, filteredStatusList.length));
  //   }
  // };

  // const handleStepClick = (index) => {
  //   setActiveStep(index); // Set active step to the clicked step index
  //   // Ensure that the step is visible
  //   if (index >= visibleSteps) {
  //     setVisibleSteps((prevSteps) => Math.min(prevSteps + 5, filteredStatusList.length));
  //   }
  // };

  const [visibleSteps, setVisibleSteps] = useState(4); // Initially show 5 steps
  const [completedSteps, setCompletedSteps] = useState({});

//   const handleReset = () => {
//     setActiveStep(0);
//     setVisibleSteps(4); // Reset visible steps
//   };

// const handleScroll = (e) => {
//     const bottom =
//       Math.ceil(e.target.scrollHeight - e.target.scrollTop) <=
//       e.target.clientHeight;

//     if (bottom && visibleSteps < filteredStatusList.length) {
//       setVisibleSteps((prevSteps) => Math.min(prevSteps + 5, filteredStatusList.length));
//     }
//   };

//   const handleStepClick = (index) => {
//     if (index !== activeStep) {
//       setActiveStep(index); // Set active step to the clicked step index
//       // Move the clicked step to the bottom of the visible steps
//       if (index < visibleSteps) {
//         setVisibleSteps((prevSteps) => Math.min(prevSteps + 1, filteredStatusList.length));
//       }
//     }
//   };

//   // Adjust the order of the filteredStatusList based on the active step
//   const orderedStatusList = [
//     ...filteredStatusList.slice(activeStep + 1),
//     ...filteredStatusList.slice(0, activeStep + 1)
//   ];

const handleCompleteStep = (stepIndex) => {
  const newCompletedSteps = { ...completedSteps };
  for (let i = 0; i <= stepIndex; i++) {
    newCompletedSteps[i] = true; // Mark all steps before and including the selected one as completed
  }
  setCompletedSteps(newCompletedSteps);
  setActiveStep(stepIndex); // Set the current step as active
};

const handleStepClick = (index) => {
  handleCompleteStep(index); // Complete the step and all before it
  if (index < visibleSteps) {
    setVisibleSteps((prevSteps) => Math.min(prevSteps + 1, filteredStatusList.length));
  }
};

const handleScroll = (e) => {
  const bottom = Math.ceil(e.target.scrollHeight - e.target.scrollTop) <= e.target.clientHeight;
  if (bottom && visibleSteps < filteredStatusList.length) {
    setVisibleSteps((prevSteps) => Math.min(prevSteps + 5, filteredStatusList.length));
  }
};


const handleReset = () => {
  setActiveStep(0);
  setCompletedSteps({});
  setVisibleSteps(4); // Reset visible steps to initial value
};

const [searchUserValue, setSearchUserValue]=useState();
const [isUserFocused, setIsUserFocused]=useState();
const [hasUserSelected, setHasUserSelected] = useState(false); 

// Function to fetch users from API
const getAllUsers = async (pageNum, pageSize, search = "") => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No authentication token found");
    }

    const response = await axios.get(
      // "https://imlystudios-backend-mqg4.onrender.com/api/users/getAllUsers",
      GETALLUSERS_API,
      {
        params: {
          page: pageNum + 1,
          limit: pageSize,
          SearchText: search,
        },
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return {
      users: response.data.users,
      totalCount: response.data.totalItems,
    };
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

const handleUserChange = (e) => {
  const value = e.target.value;
  setSearchUserValue(value);

  // Call the API to get users only if the input has more than 0 characters
  if (value.trim().length > 0) {
    getAllUsers(0, 10, value)
      .then(response => {
        setResults(response.users || []); // Use empty array as fallback
      })
      .catch(error => {
        console.error("Error fetching users:", error);
        setResults([]); // Clear results on error
      });
  } else {
    setResults([]); // Clear results if input is empty
  }
};

// const handleUserSelect = (selectedUser) => {
//     setFormOrderDetails((prevDetails) => ({
//     ...prevDetails,
//     DesginerName: `${selectedUser.FirstName} ${selectedUser.LastName}`,  // Set Designer Name
//   }));

//   setSearchUserValue(`${selectedUser.FirstName} ${selectedUser.LastName}`); // Update the input value
//   setIsUserFocused(false); // Close dropdown
// };

// Function to fetch all user roles
const handleUserSelect = (selectedUser) => {
setFormOrderDetails((prevDetails) => ({
  ...prevDetails,
  AssignTo: selectedUser.UserID, // Store UserID for the backend
  DesginerName: `${selectedUser.FirstName} ${selectedUser.LastName}`,  // Display full name in input
}));

setSearchUserValue(`${selectedUser.FirstName} ${selectedUser.LastName}`); // Update the input value
setIsUserFocused(false); // Close dropdown
};
const getAllRoles = async (search = "") => {
try {
  const response = await axios.get(GETALLROLESS_API, {
    params: {
      SearchText: search,
    },
  });
  return response.data.roles;
} catch (error) {
  console.error("Failed to fetch roles:", error);
}
};

// Fetch roles on mount or when query changes
useEffect(() => {
const fetchRoles = async () => {
  const rolesData = await getAllRoles(query);
  setRoles(rolesData);
  setFilteredRolesList(rolesData);
};

fetchRoles();
}, [query]);

// Filter roles based on query
useEffect(() => {
if (query === "") {
  setFilteredRolesList(roles);
} else {
  const filtered = roles.filter((role) =>
    role.RoleName.toLowerCase().includes(query.toLowerCase())
  );
  setFilteredRolesList(filtered);
}
}, [roles, query]);

// const handleRoleChanging = (value) => {
//   setSelectedRole(value);
//   // Add your validation logic if needed
//   if (!value) {
//     setErrors((prev) => ({ ...prev, UserRole: "User Role is required." }));
//   } else {
//     setErrors((prev) => ({ ...prev, UserRole: undefined }));
//   }
// };

const handleRoleChanging = (roleID) => {
setSelectedRole(roleID);  // Set the selected RoleID

// Update formOrderDetails with UserRoleID for backend submission
setFormOrderDetails((prevDetails) => ({
  ...prevDetails,
  RoleID:roleID,  // Pass UserRoleID to backend
}));

// Validate if a role is selected
if (!roleID) {
  setErrors((prev) => ({ ...prev, UserRole: "User Role is required." }));
} else {
  setErrors((prev) => ({ ...prev, UserRole: undefined }));
}
};


  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: " 1fr" }, // Ensure proper grid layout
        gap: 2, // Adjust spacing between items
        justifyContent: "center",
        alignItems: "center",
        pt: 2,
      }}
    >
      <>
        {/* <form onSubmit={saveOrderHistory}> */}
        <form>
          <div className="flex">
            <div className="flex flex-col items-center flex-1 sm:ml-0 lg:ml-5 gap-4">
              {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
                <label className="sm:w-1/4 w-full text-left text-xs font-medium text-gray-700">
                  Order Status:
                </label>

                <Combobox value={selectedStatus} onChange={handleChanging}>
                  <div className="relative w-full sm:w-1/4">
                    <Combobox.Input
                      className={`p-1 w-full border rounded-md ${
                        errors.OrderStatus
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      onChange={(e) => setQuery(e.target.value)}
                      displayValue={(statusID) => {
                        const selected = orderStatusList.find(
                          (status) => status.StatusID === statusID
                        );
                        return selected ? selected.OrderStatus : ""; // Make sure selected value is returned
                      }}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Combobox.Button>
                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-white border border-gray-300 rounded-md shadow-lg">
                      {filteredStatusList.length > 0 ? (
                        filteredStatusList.map((status) => (
                          <Combobox.Option
                            key={status.StatusID}
                            value={status.StatusID}
                            className={({ active }) =>
                              `cursor-pointer select-none relative p-2 ${
                                active
                                  ? "bg-blue-500 text-white"
                                  : "text-gray-900"
                              }`
                            }
                          >
                            {status.OrderStatus}
                          </Combobox.Option>
                        ))
                      ) : (
                        <div className="p-2 text-gray-500">No status found</div>
                      )}
                    </Combobox.Options>
                  </div>
                </Combobox>
{/* 
<Combobox value={selectedStatus} onChange={handleChanging}>
        <div className="relative w-full sm:w-1/4">
          <Combobox.Input
            className="p-1 w-full border rounded-md border-gray-300"
            displayValue={(statusID) => {
              const selected = filteredStatusList.find(
                (status) => status.StatusID === statusID
              );
              return selected ? selected.OrderStatus : ""; // Display selected value
            }}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-white border border-gray-300 rounded-md shadow-lg">
            {filteredStatusList.length > 0 ? (
              filteredStatusList.map((status) => (
                <Combobox.Option
                  key={status.StatusID}
                  value={status.StatusID}
                  className={({ active }) =>
                    `cursor-pointer select-none relative p-2 ${
                      active ? "bg-blue-500 text-white" : "text-gray-900"
                    }`
                  }
                >
                  {status.OrderStatus}
                </Combobox.Option>
              ))
            ) : (
              <div className="p-2 text-gray-500">No status found</div>
            )}
          </Combobox.Options>
        </div>
      </Combobox>


                {errors.OrderStatus && (
                  <p className="text-red-500 text-sm ml-2">
                    {errors.OrderStatus}
                  </p>
                )}
              </div> */}

<div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
  <label className="sm:w-1/4 w-full text-left text-xs font-medium text-gray-700">
    Order Status:
  </label>

  <Combobox value={selectedStatus} onChange={handleChanging}>
    <div className="relative w-full sm:w-1/4">
      <Combobox.Input
        className={`p-1 w-full border rounded-md ${
          errors.OrderStatus ? 'border-red-500' : 'border-gray-300'
        }`}
        onChange={(e) => setQuery(e.target.value)}
        displayValue={(statusID) => {
          const selected = filteredStatusList.find(
            (status) => status.StatusID === statusID
          );
          return selected ? selected.OrderStatus : ''; // Ensure selected value is returned
        }}
      />
      <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </Combobox.Button>

      <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-white border border-gray-300 rounded-md shadow-lg">
        {filteredStatusList.length > 0 ? (
          // Filter the statuses to only show those after the active step
          filteredStatusList
            .filter((_, index) => index > activeStep)  // Show statuses after the active one
            .map((status) => (
              <Combobox.Option
                key={status.StatusID}
                value={status.StatusID}
                className={({ active }) =>
                  `cursor-pointer select-none relative p-2 ${
                    active ? 'bg-blue-500 text-white' : 'text-gray-900'
                  }`
                }
              >
                {status.OrderStatus}
              </Combobox.Option>
            ))
        ) : (
          <div className="p-2 text-gray-500">No status found</div>
        )}
      </Combobox.Options>
    </div>
  </Combobox>

  {errors.OrderStatus && (
    <p className="text-red-500 text-sm ml-2">{errors.OrderStatus}</p>
  )}
</div>


                   
<div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
  <label className="sm:w-1/4 w-full text-left text-xs font-medium text-gray-700">
    Assigned To
  </label>
  <div className="relative w-full sm:w-1/4">
    <input
      type="search"
      name="AssignedTo"
      value={searchUserValue}
      onChange={handleUserChange}
      onFocus={() => setIsUserFocused(true)}
      className={`p-1 pr-10 w-full border rounded-md ${
        errors.AssignedTo ? "border-red-500" : "border-gray-300"
      }`}
      placeholder="Search by User Name..."
    />
    {errors.AssignedTo && (
      <p className="text-red-500 text-sm mt-1">{errors.AssignedTo}</p>
    )}

    {/* Search Icon */}
    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center pointer-events-none">
      <IoIosSearch aria-label="Search Icon" />
    </div>

    {/* Dropdown for filtered users */}
    {isUserFocused && searchUserValue && searchUserValue.length >= 1 && results.length > 0 && (
      <div
        className="absolute flex flex-col top-full mt-1 border rounded-lg p-2 w-full bg-white z-10"
        style={{
          maxHeight: '200px',
          overflowY: 'auto',
        }}
      >
        <div className="mb-2 text-sm text-gray-600">
          {results.length} Result{results.length > 1 ? "s" : ""}
        </div>
        {results.map((result) => (
          <div
            className="relative cursor-pointer p-2 hover:bg-gray-100 group"
            key={result.CustomerID}
            onClick={() => handleUserSelect(result)}
          >
            <span className="font-medium">
              {result.FirstName} {result.LastName}
            </span>
          </div>
        ))}
      </div>
    )}

    {/* Display No Results Message */}
    {isUserFocused && searchUserValue && results.length === 0 && (
      <div className="p-2 overflow-clip text-gray-500">No results found.</div>
    )}
  </div>
</div>


 <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
      <label className="sm:w-1/4 w-full text-left text-xs font-medium text-gray-700">
       Department:
      </label>
      <Combobox value={selectedRole} onChange={handleRoleChanging}>
        <div className="relative w-full sm:w-1/4">
          <Combobox.Input
            className={`p-1 w-full border rounded-md ${
              errors.UserRole ? "border-red-500" : "border-gray-300"
            }`}
            onChange={(e) => setQuery(e.target.value)}
            displayValue={(roleID) => {
              const selected = roles.find((role) => role.RoleID === roleID);
              return selected ? selected.RoleName : ""; // Make sure selected value is returned
            }}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </Combobox.Button>
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-white border border-gray-300 rounded-md shadow-lg">
            {filteredRolesList.length > 0 ? (
              filteredRolesList.map((role) => (
                <Combobox.Option
                  key={role.RoleID}
                  value={role.RoleID}
                  className={({ active }) =>
                    `cursor-pointer select-none relative p-2 ${
                      active ? "bg-blue-500 text-white" : "text-gray-900"
                    }`
                  }
                >
                  {role.RoleName}
                </Combobox.Option>
              ))
            ) : (
              <div className="p-2 text-gray-500">No roles found</div>
            )}
          </Combobox.Options>
        </div>
      </Combobox>
      {errors.UserRole && (
        <p className="text-red-500 text-sm ml-2">{errors.UserRole}</p>
      )}

            </div> 

           

              <div className="flex flex-col hidden sm:flex-row justify-center items-center gap-4 w-full">
                <label className="sm:w-1/4 w-full text-left text-xs font-medium text-gray-700">
                  StartDate
                </label>
                <input
                  type="date"
                  name="StartDate"
                  value={formatDate(formOrderDetails.StartDate)}
                  onChange={handleChange}
                  className={`p-1 w-full sm:w-1/4 border rounded-md ${
                    errors.StartDate ? "border-red-500" : "border-gray-300"
                  }`}
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
                <label className="sm:w-1/4 w-full text-left text-xs font-medium text-gray-700">
                  Expected Delivery in Days:
                </label>
                <input
                  type="number"
                  name="ExpectedDays"
                  value={formOrderDetails.ExpectedDays}
                  onChange={handleExpectedDaysChange}
                  className={`p-1 w-full sm:w-1/4 border rounded-md ${
                    errors.ExpectedDays ? "border-red-500" : "border-gray-300"
                  }`}
                  min="0" // Ensure the user can't select a negative number of days
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
                <label className="sm:w-1/4 w-full text-left text-xs font-medium text-gray-700">
                  Delivery Date:
                </label>
                <input
                  type="date"
                  name="DeliveryDate"
                  value={formatDate(formOrderDetails.DeliveryDate)}
                  onChange={handleDateChanging} // Manually change if needed
                  className={`p-1 w-full sm:w-1/4 border rounded-md ${
                    errors.DeliveryDate ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.DeliveryDate && (
                  <p className="text-red-500 text-sm ml-2">
                    {errors.DeliveryDate}
                  </p>
                )}
              </div>

              {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
                <label className="sm:w-1/4 w-full text-left text-xs font-medium text-gray-700">
                  Upload Document:
                </label>
                <input
                  type="file"
                  multiple
                  accept="image/*,application/pdf,.doc,.docx"
                  onChange={handleFileChange} // This should now handle files
                  className="hidden"
                  id="UploadFiles"
                />
                <label
                  htmlFor="UploadFiles"
                  className="flex items-center justify-center px-4 py-2 p-1 w-full sm:w-1/4 border rounded-md border border-black-500 text-black-500 cursor-pointer hover:bg-blue-50"
                >
                  <FaUpload className="mr-2" />
                  <span>Upload File</span>
                </label>
              </div> */}

              {/* Render Image Previews */}
              {/* {images.length > 0 && (
                <div className="flex items-center mt-2 space-x-2 flex-wrap">
                  {imagePreviews.map((preview, index) => (
                    <div key={index} className="relative inline-block">
                      <img
                        src={preview}
                        alt={`Preview ${index}`}
                        className="w-24 h-24 object-cover"
                      />
                      <button
                        onClick={() => handleImageRemove(index)}
                        className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full text-xs"
                      >
                        x
                      </button>
                    </div>
                  ))}
                </div>
              )} */}

              {/* Render PDF Previews */}
              {/* {pdfPreviews.length > 0 && (
                <div className="mt-2 flex items-center flex-wrap">
                  {pdfPreviews.map((pdfPreview, index) => (
                    <div key={index} className="flex items-center ml-32">
                      <a
                        href={pdfPreview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline "
                      >
                        View PDF
                      </a>
                      <button
                        onClick={() => handlePdfRemove(index)}
                        className="ml-4 bg-red-500 text-white p-1 rounded-full text-xs"
                      >
                        x
                      </button>
                    </div>
                  ))}
                </div>
              )} */}

<div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
                <label className="sm:w-1/4 w-full text-left text-xs font-medium text-gray-700">
        Upload Document:
      </label>
      <div className="flex items-center sm:w-1/4 w-full border rounded-md bg-white p-2">
        <input
          type="file"
          multiple
          accept="image/*,application/pdf,.doc,.docx"
          onChange={handleFileChange}
          className="hidden"
          id="UploadFiles"
        />
        {/* <label
          htmlFor="UploadFiles"
          className="flex items-center justify-center px-4 py-2 border border-black-500 text-black-500 cursor-pointer hover:bg-blue-50"
        > */}
         <label
          htmlFor="UploadFiles"
          className="flex items-center justify-center text-black-500 cursor-pointer"
        >
          <FaUpload className="mr-2" />
          <span>Upload</span>
        </label>

        {/* Render Image Previews */}
        {imagePreviews.length > 0 && (
          <div className="flex items-center ml-2">
            {imagePreviews.map((preview, index) => (
              <div key={index} className="relative inline-block">
                <img
                  src={preview}
                  alt={`Preview ${index}`}
                  className="w-5 h-5 object-cover mr-2"
                />
                <button
                  onClick={() => handleImageRemove(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full text-xs"
                >
                  *
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Render PDF Previews */}
        {pdfPreviews.length > 0 && (
          <div className="flex items-center ml-2">
            {pdfPreviews.map((pdfPreview, index) => (
              <div key={index} className="flex items-center">
                <a
                  href={pdfPreview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline mx-1"
                >
                  View
                </a>
                <button
                  onClick={() => handlePdfRemove(index)}
                  className="ml-2 bg-red-500 text-white p-1 rounded-full text-xs"
                >
                  *
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
                <label className="sm:w-1/4 w-full text-left text-xs font-medium text-gray-700">
                  Comments
                </label>
                <input
                  type="text"
                  name="Comments"
                  value={formOrderDetails.Comments}
                  onChange={(e) =>
                    setFormOrderDetails({
                      ...formOrderDetails,
                      Comments: e.target.value,
                    })
                  }
                  className={`p-1 w-full sm:w-1/4 border rounded-md ${
                    errors.Comments ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.Comments && (
                  <p className="text-red-500 text-sm ml-2">{errors.Comments}</p>
                )}
              </div>
            </div>
         
     <div onScroll={handleScroll} className="overflow-y-auto max-h-80">
      <nav aria-label="Progress">
        <ol role="list">
          {filteredStatusList.slice(0, visibleSteps).map((status, index) => (
            <li
              key={status.StatusID}
              className={`relative pb-10 cursor-pointer ${completedSteps[index] ? 'completed' : ''}`}
              onClick={() => handleStepClick(index)}
            >
              {/* Step rendering logic with lines */}
              <div
                className={`step-indicator flex items-center ${
                  completedSteps[index] ? 'text-green-300' : 'text-gray-800'
                } ${activeStep === index ? 'text-orange-500' : ''}`}
              >
                {/* Check icon for completed steps */}
                {/* <span
                  className={`mr-2 h-6 w-6 rounded-full flex items-center justify-center ${
                    completedSteps[index] ? 'bg-green-600 text-white' : 'bg-gray-300'
                  }`}
                >
                  {completedSteps[index] ? '✓' : index + 1}
                </span> */}
<span
  className={`mr-2 h-6 w-6 rounded-full flex items-center justify-center
    ${ completedSteps[index] ?
       'bg-green-400 text-white' : 'bg-gray-300'}
      ${   activeStep === index 
        ? 'bg-orange-400 text-white' 
        : 'bg-gray-300'
  }`}
>
{activeStep === index ? <GrInProgress /> : completedSteps[index] ? '✓' : index + 1}
</span>

                {/* Status Text */}
                {status.OrderStatus}
              </div>

              {/* Line between steps */}
              {index < filteredStatusList.length - 1 && (
                <div
                  className={`absolute top-6 left-3 w-0.5 h-12 bg-gray-300 ${
                    completedSteps[index] ? 'bg-green-400' : ''
                  }`}
                />
              )}
            </li>
          ))}
        </ol>
      </nav>
      {/* <button onClick={handleReset} className="mt-4 bg-red-600 text-white px-4 py-2 rounded">
        Reset
      </button> */}
    </div>    
      </div> 
          <div className="relative mt-10 flex justify-end gap-4">
            <div className="mt-6 flex justify-end gap-4">
              <button type="button" 
              onClick={saveOrderHistory}
              className="button-base save-btn">
                {editMode ? "Update" : "Save"}{" "}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="button-base cancel-btn"
              >
                Cancel
              </button>
            </div>
            {isLoading && (
                  <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-700">
                    <LoadingAnimation />
                  </div>
                )}
            {showModal && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white rounded-lg p-6 text-center shadow-lg w-11/12 max-w-sm">
                  <p className="text-lg">{popupMessage}</p>
                </div>
              </div>
            )}
          </div>
        </form>

         
<TableContainer component={Paper} className="mt-4 shadow-md">
  <Table aria-label="orders table" className="min-w-full border-collapse border border-gray-300">
    <TableHead className="bg-custom-darkblue">
      <TableRow>
        <StyledTableCell
          align="center"
          sx={{ borderRight: "1px solid #e5e7eb", color: "white", fontWeight: "bold" }}
        >
          Order Status
        </StyledTableCell>
        <StyledTableCell
          align="center"
          sx={{ borderRight: "1px solid #e5e7eb", color: "white", fontWeight: "bold" }}
        >
          Delivery Date
        </StyledTableCell>
        <StyledTableCell
          align="center"
          sx={{ borderRight: "1px solid #e5e7eb", color: "white", fontWeight: "bold" }}
        >
          Assigned To
        </StyledTableCell>
        <StyledTableCell
          align="center"
          sx={{ borderRight: "1px solid #e5e7eb", color: "white", fontWeight: "bold" }}
        >
          Comments
        </StyledTableCell>
        <StyledTableCell
          align="center"
          sx={{ borderRight: "1px solid #e5e7eb", color: "white", fontWeight: "bold" }}
        >
          Document
        </StyledTableCell>
        <StyledTableCell
          align="center"
          sx={{ color: "white", fontWeight: "bold" }}
        >
          Actions
        </StyledTableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {statusDetails.length > 0 ? (
        statusDetails.map((status, index) => (
          <TableRow key={index} className="hover:bg-gray-100">
            {/* Order Status */}
            <StyledTableCell align="center" className="border-r border-gray-300">
              <StatusBadge status={status.OrderStatus} />
            </StyledTableCell>

            <StyledTableCell align="center" className="border-r border-gray-300">
  <p className="font-thin">
    {/* Start Date */}
    Start Date: {status.StartDate ? (() => {
      const date = new Date(status.StartDate);
      const month = date.toLocaleString("en-US", { month: "short" });
      const day = String(date.getDate()).padStart(2, "0"); // Pad day with leading zero if needed
      const year = date.getFullYear();
      
      return `${month} ${day}, ${year}`; // Format: Jan 01, 2024
    })() : "N/A"}
    <br />
    
    {/* Delivery Date */}
    End Date: {status.DeliveryDate ? (() => {
      const date = new Date(status.DeliveryDate);
      const month = date.toLocaleString("en-US", { month: "short" });
      const day = String(date.getDate()).padStart(2, "0"); // Pad day with leading zero if needed
      const year = date.getFullYear();

      return `${month} ${day}, ${year}`; // Format: Jan 01, 2024
    })() : "N/A"}
  </p>
</StyledTableCell>

{/* Assigned To: {status.FirstName && status.LastName ? `${status.FirstName} ${status.LastName}` : "N/A"} */}
        {/* <StyledTableCell align="center" className="border-r border-gray-300">
  <p className="font-thin">
    Assigned To: {status.FirstName||"N/A"}
    <br />
    Department: {status.RoleName || "N/A"}
  </p>
</StyledTableCell> */}

<StyledTableCell align="center" className="border-r border-gray-300">
  <p className="font-thin">
    {/* Log the status object */}
    {console.log("Status Data: ", status)}

    {/* Display the FirstName */}
    Assigned To: {status?.AssignTo|| "N/A"}
    <br />
    Department: {status?.RoleName || "N/A"}
  </p>
</StyledTableCell>


            {/* Comments */}
            <StyledTableCell align="center" className="border-r border-gray-300">
              {status.Comments || "N/A"}
            </StyledTableCell>

            {/* Document Links */}
            <StyledTableCell align="center" className="border-r border-gray-300">
              {Array.isArray(status.viewdocuments) && status.viewdocuments.length > 0 ? (
                status.viewdocuments.map((url, docIndex) => (
                  <div key={docIndex} className="flex items-center mb-0">
                    <IconButton href={url} target="_blank" rel="noopener noreferrer" color="primary">
                      <AiOutlineEye size={20} />
                      <span className="ml-2 font-bold text-sm">View</span>
                    </IconButton>
                  </div>
                ))
              ) : (
                <span>No Documents to View</span>
              )}

              {Array.isArray(status.DownloadDocuments) && status.DownloadDocuments.length > 0 ? (
                status.DownloadDocuments.map((url, docIndex) => (
                  <div key={docIndex} className="flex items-center mb-0">
                    <IconButton href={url} download color="success">
                      <FiDownload size={20} />
                      <span className="ml-2 font-bold text-sm">Download</span>
                    </IconButton>
                  </div>
                ))
              ) : (
                <span></span>
              )}
            </StyledTableCell>

            {/* Actions - Edit and Delete */}
            <StyledTableCell align="center" className="border-r border-gray-300">
              <div className="flex justify-center gap-2">
                {/* Edit Button */}
                <button
                  type="button"
                  onClick={() => handleEditstatus(status.OrderHistoryID, status.StatusID)}
                  className="button edit-button"
                >
                  <AiOutlineEdit aria-hidden="true" className="h-4 w-4" />
                  Edit
                </button>

                {/* Delete Button */}
                <button
                  type="button"
                  // onClick={() => handleDelete(generatedId)}
                  className="button delete-button"
                >
                  <MdOutlineCancel aria-hidden="true" className="h-4 w-4" />
                  Delete
                </button>
              </div>
            </StyledTableCell>
          </TableRow>
        ))
      ) : (
        <TableRow>
          <StyledTableCell align="center" colSpan={7}>
            {loading ? "Loading..." : error ? error : "No Order Found"}
          </StyledTableCell>
        </TableRow>
      )}
    </TableBody>
  </Table>
</TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={orders.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </>
    </Box>
  );
};

export default YourComponent;
