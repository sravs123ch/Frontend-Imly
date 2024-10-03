
// import React, { useState, useEffect, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import TableFooter from "@mui/material/TableFooter";
// import TablePagination from "@mui/material/TablePagination";

// import { FaPlus } from "react-icons/fa";
// import * as XLSX from "xlsx";
// import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
// import { IoIosSearch } from "react-icons/io";
// import { FaTable } from "react-icons/fa";
// import axios from "axios";
// import { UserRoleContext } from "../../Context/roleContext";
// import {
//   GETALLROLESS_API,
//   GETALLROLESBYID_API,
//   DELETEROLESBYID_API,
//   GETALLSTORES_API,
// } from "../../Constants/apiRoutes";
// import { MdOutlineCancel } from "react-icons/md";
// import "../../style.css";
// import {
//   StyledTableCell,
//   StyledTableRow,
//   TablePaginationActions,
// } from "../CustomTablePagination";

// function UserRoles() {
//   const [roles, setRoles] = useState([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [searchName, setSearchName] = useState("");
//   const [totalRoles, setTotalRoles] = useState(0);
//   const navigate = useNavigate();
//   const { setRoleDetails } = useContext(UserRoleContext);
//   const [filteredRoles, setFilteredRoles] = useState([]);
//   const [isSearching, setIsSearching] = useState(false);
//   const [stores, setStores] = useState([]);

//   // Fetch roles data
//   const getAllRoles = async (pageNum, pageSize, search = "") => {
//     try {
//       const response = await axios.get(
//         // "https://imlystudios-backend-mqg4.onrender.com/api/userrole/getAllRoles",
//         GETALLROLESS_API,
//         {
//           params: {
//             page: pageNum + 1,
//             pageSize: pageSize,
//             limit: pageSize,
//             search: searchName,
//           },
//         }
//       );
//       return {
//         roles: response.data.roles,
//         totalCount: response.data.totalItems,
//       };
//     } catch (error) {}
//   };
//   useEffect(() => {
//     fetchRoles();
//   }, [page, rowsPerPage, searchName]);

//   const fetchRoles = async () => {
//     try {
//       const { roles, totalCount } = await getAllRoles(
//         page,
//         rowsPerPage,
//         searchName
//       );
//       setRoles(roles);
//       setTotalRoles(totalCount);

//       if (!isSearching) {
//         setFilteredRoles(roles);
//       }
//     } catch (error) {
//       console.error("Failed to fetch userroles", error);
//     }
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   // Fetch role details by ID
//   const getRoleById = async (roleId) => {
//     try {
//       const response = await axios.get(
//         // `https://imlystudios-backend-mqg4.onrender.com/api/userrole/getRoleById/${roleId}`
//         `${GETALLROLESBYID_API}/${roleId}`
//       );

//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   };

//   // Handle the deletion of a role
//   const deleteRoleById = async (roleId) => {
//     try {
//       const response = await axios.delete(
//         // `https://imlystudios-backend-mqg4.onrender.com/api/userrole/deleteRole/${roleId}`
//         `${DELETEROLESBYID_API}/${roleId}`
//       );
//       return response.data;
//     } catch (error) {
//       console.error("Error deleting role:", error);
//       throw error;
//     }
//   };

//   // Handle edit button click
//   const handleEditClick = async (roleId, roleName, storeId) => {
//     navigate("/RoleUserEditform", { state: { roleId, roleName, storeId } });
//   };

//   // Handle delete button click
//   const handleDeleteClick = async (roleId) => {
//     try {
//       await deleteRoleById(roleId);
//       fetchRoles(); // Refresh the user list after deletion
//     } catch (error) {
//       console.error("Error deleting user:", error);
//     }
//   };

//   // Export user roles data to Excel
//   const exportToExcel = (data, fileName) => {
//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
//     XLSX.writeFile(workbook, `${fileName}.xlsx`);
//   };

//   const handleExportUserRolesData = async () => {
//     try {
//       const { roles } = await getAllRoles(0, totalRoles); // Fetch all users for export
//       exportToExcel(roles, "userRoles");
//     } catch (error) {
//       console.error("Error exporting userrole data:", error);
//     }
//   };

//   const handleAddUserRoleClick = () => {
//     setRoleDetails(null);
//     navigate("/RoleUserAddform");
//   };

//   const searchItems = (searchValue) => {
//     setSearchName(searchValue);

//     if (searchValue === "") {
//       setIsSearching(false); // Reset search mode
//       setFilteredRoles(roles); // Show all roles when search is cleared
//     } else {
//       setIsSearching(true); // Enable search mode
//       const searchLower = searchValue.toLowerCase();

//       const filteredData = roles.filter((role) => {
//         return (
//           (role.RoleName &&
//             role.RoleName.toLowerCase().includes(searchLower)) ||
//           (role.Status && role.Status.toLowerCase().includes(searchLower)) ||
//           (role.RoleID && role.RoleID.toString().includes(searchLower))
//         );
//       });
//       setFilteredRoles(filteredData);
//     }
//   };

//    // Initialize as an empty array to hold all stores
//   const [totalStores, setTotalStores] = useState(0);

//   const getAllStores = async (pageNum, pageSize, search = "") => {
//     try {
//       const response = await axios.get(GETALLSTORES_API, {
//         params: {
//           pageNumber: pageNum + 1,
//           pageSize: pageSize,
//           search: search,
//         },
//       });

//       // Log the entire API response to understand its structure
//       console.log("API Response:", response.data);

//       return {
//         stores: response.data.Stores || [], // Correctly access the 'Stores' field
//         totalCount: response.data.totalItems || 0, // Use 'totalItems' for total count
//       };
//     } catch (error) {
//       console.error("Error fetching stores:", error);
//       throw error;
//     }
//   };

//   const fetchStores = async () => {
//     console.log("Fetching data for page:", page);
//     try {
//       const { stores: fetchedStores, totalCount } = await getAllStores(
//         page,
//         rowsPerPage,
//         searchName
//       );

//       console.log("Fetched stores:", fetchedStores);
//       console.log("Total stores count:", totalCount);

//       // Accumulate the new stores with the existing ones
//       setStores((prevStores) => [...prevStores, ...fetchedStores]);

//       setTotalStores(totalCount); // Optionally update total stores count if required
//     } catch (error) {
//       console.error("Failed to fetch stores", error);
//     }
//   };

//   console.log(stores, "stores");
//   useEffect(() => {
//     fetchStores();
//   }, [page, rowsPerPage, searchName]);

//   const displayroles = searchName ? filteredRoles : roles;

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
//         <div className="body-container">
//           <h2 className="heading">Roles</h2>
//           <div className="search-button-group">
//             <div className="search-container">
//               <label htmlFor="searchName" className="sr-only">
//                 Search
//               </label>
//               <input
//                 id="searchName"
//                 type="text"
//                 placeholder="Search by Name or Email or Mobile"
//                 value={searchName}
//                 onChange={(e) => searchItems(e.target.value)}
//                 className="mt-1 p-2 pr-10 border border-gray-300 rounded-md w-full "
//               />
//               <div className="search-icon-container text-gray-500">
//                 <IoIosSearch />
//               </div>
//             </div>

//             <ul className="button-list">
//               <li>
//                 <button
//                   type="button"
//                   className="action-button"
//                   onClick={handleAddUserRoleClick}
//                 >
//                   <FaPlus aria-hidden="true" className="icon" />
//                   Add Roles
//                 </button>
//               </li>
//               <li>
//                 <button
//                   type="button"
//                   className="action-button"
//                   onClick={handleExportUserRolesData}
//                 >
//                   <FaTable aria-hidden="true" className="icon" />
//                   Export Roles
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <TableContainer
//           component={Paper}
//           className="mt-4"
//           sx={{ width: "100%", margin: "0 auto", marginTop: "1rem" }}
//         >
//           <Table sx={{ width: "100%", tableLayout: "fixed" }}>
//             <TableHead>
//               <TableRow>
//                 <StyledTableCell sx={{ width: "10%" }} align="left">
//                   Role ID
//                 </StyledTableCell>
//                 <StyledTableCell sx={{ width: "30%" }} align="left">
//                   Name
//                 </StyledTableCell>
//                 <StyledTableCell sx={{ width: "10%" }} align="center">
//                   Store Name
//                 </StyledTableCell>
//                 <StyledTableCell sx={{ width: "20%" }} align="center">
//                   Status
//                 </StyledTableCell>
//                 <StyledTableCell
//                   sx={{ width: "20%" }}
//                   align="center"
//                   colSpan={2}
//                 >
//                   Actions
//                 </StyledTableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {displayroles.map((row) => (
//                 <StyledTableRow key={row.RoleID}>
//                   <StyledTableCell align="left">{row.RoleID}</StyledTableCell>
//                   <StyledTableCell align="left">{row.RoleName}</StyledTableCell>
//                   <StyledTableCell align="center">
//                     {row.storeId ===stores.StoreID? stores.StoreName : "Not Found"}
//                   </StyledTableCell>
//                   <StyledTableCell align="center">
//                     <span
//                       className={`status-pill ${
//                         row.Status === "Active"
//                           ? "status-active"
//                           : "status-inactive"
//                       }`}
//                     >
//                       {row.Status}
//                     </span>
//                   </StyledTableCell>
//                   <StyledTableCell align="center" colSpan={2}>
//                     <div className="flex justify-center space-x-2">
//                       <button
//                         type="button"
//                         onClick={() =>
//                           handleEditClick(row.RoleID, row.RoleName, row.StoreID)
//                         }
//                         className="button edit-button flex items-center"
//                       >
//                         <AiOutlineEdit
//                           aria-hidden="true"
//                           className="h-4 w-4 mr-1"
//                         />
//                         Edit
//                       </button>

//                       <button
//                         type="button"
//                         onClick={() => handleDeleteClick(row.RoleID)}
//                         className="button delete-button flex items-center"
//                       >
//                         <MdOutlineCancel
//                           aria-hidden="true"
//                           className="h-4 w-4 mr-1"
//                         />
//                         Delete
//                       </button>
//                     </div>
//                   </StyledTableCell>
//                 </StyledTableRow>
//               ))}
//             </TableBody>
//             <TableFooter>
//               <TableRow>
//                 <TablePagination
//                   rowsPerPageOptions={[10, 20, 25]}
//                   colSpan={4}
//                   count={totalRoles}
//                   rowsPerPage={rowsPerPage}
//                   page={page}
//                   onPageChange={handleChangePage}
//                   onRowsPerPageChange={handleChangeRowsPerPage}
//                   ActionsComponent={TablePaginationActions}
//                 />
//               </TableRow>
//             </TableFooter>
//           </Table>
//         </TableContainer>
//       </div>
//     </div>
//   );
// }

// export default UserRoles;


import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableFooter,
  TablePagination,
} from "@mui/material";
import { FaPlus } from "react-icons/fa";
import * as XLSX from "xlsx";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { FaTable } from "react-icons/fa";
import axios from "axios";
import { UserRoleContext } from "../../Context/roleContext";
import {
  GETALLROLESS_API,
  DELETEROLESBYID_API,
  GETALLSTORES_API,
} from "../../Constants/apiRoutes";
import { MdOutlineCancel } from "react-icons/md";
import "../../style.css";
import {
  StyledTableCell,
  StyledTableRow,
  TablePaginationActions,
} from "../CustomTablePagination";
import { Combobox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import LoadingAnimation from "../Loading/LoadingAnimation";

function UserRoles() {
  const [roles, setRoles] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchName, setSearchName] = useState("");
  const [totalRoles, setTotalRoles] = useState(0);
  const navigate = useNavigate();
  const { setRoleDetails } = useContext(UserRoleContext);
  const [filteredRoles, setFilteredRoles] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [storeMap, setStoreMap] = useState(new Map());
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStore, setSelectedStore] = useState({
    StoreID: "",
    StoreName: "Select Store",
  });

  const getAllRoles = async (pageNum, pageSize, search = "") => {
    try {
      const response = await axios.get(GETALLROLESS_API, {
        params: {
          page: pageNum + 1,
          pageSize: pageSize,
          limit: pageSize,
          SearchText: searchName,
        },
      });
      return {
        roles: response.data.roles,
        totalCount: response.data.totalItems,
      };
    } catch (error) {}
  };
  // Fetch roles data
  useEffect(() => {
    fetchRoles();
  }, [page, rowsPerPage, searchName]);



  const fetchRoles = async () => {
    setLoading(true); // Set loading to true when fetching
    try {
      const { roles, totalCount } = await getAllRoles(
        page,
        rowsPerPage,
        searchName
      );
      setRoles(roles);
      setTotalRoles(totalCount);
      setFilteredRoles(isSearching ? filteredRoles : roles); // Update filteredRoles only if not searching
    } catch (error) {
      console.error("Failed to fetch user roles", error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Handle the deletion of a role
  const deleteRoleById = async (roleId) => {
    try {
      const response = await axios.delete(
        `${DELETEROLESBYID_API}/${roleId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error deleting role:", error);
      throw error;
    }
  };

  // Handle edit button click
  const handleEditClick = async (roleId, roleName, storeId, storeMap) => {
    navigate("/RoleUserEditform", {
      state: { roleId, roleName, storeId, storeMap },
    });
  };

  // Handle delete button click
  const handleDeleteClick = async (roleId) => {
    try {
      await deleteRoleById(roleId);
      fetchRoles(); // Refresh the user list after deletion
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const exportToExcel = (data, fileName) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  const handleExportUserRolesData = async () => {
    try {
      const { roles } = await getAllRoles(0, totalRoles); // Fetch all users for export
      exportToExcel(roles, "userRoles");
    } catch (error) {
      console.error("Error exporting userrole data:", error);
    }
  };

  const handleAddUserRoleClick = () => {
    setRoleDetails(null);
    navigate("/RoleUserAddform", { state: { storeMap } });
  };

  const searchItems = (searchValue) => {
    setSearchName(searchValue);

    if (searchValue === "") {
      setIsSearching(false); // Reset search mode
      setFilteredRoles(roles); // Show all roles when search is cleared
    } else {
      setIsSearching(true); // Enable search mode
      const searchLower = searchValue.toLowerCase();

      const filteredData = roles.filter((role) => {
        return (
          (role.RoleName &&
            role.RoleName.toLowerCase().includes(searchLower)) ||
          (role.Status && role.Status.toLowerCase().includes(searchLower)) ||
          (role.RoleID && role.RoleID.toString().includes(searchLower))
        );
      });
      setFilteredRoles(filteredData);
    }
  };

  const getAllStores = async (pageNum, pageSize, search = "") => {
    try {
      const response = await axios.get(GETALLSTORES_API, {
        params: {
          pageNumber: pageNum + 1,
          pageSize: pageSize,
          search: search,
        },
      });

      return {
        stores: response.data.Stores || [],
        totalCount: response.data.totalItems || 0,
      };
    } catch (error) {
      console.error("Error fetching stores:", error);
      throw error;
    }
  };

  const fetchStores = async () => {
    setLoading(true); 
    try {
      const { stores: fetchedStores } = await getAllStores(0, 1000);
      const storeMap = new Map(
        fetchedStores.map((store) => [store.StoreID, store.StoreName])
      );
      setStoreMap(storeMap);
      setStores([{ StoreID: "", StoreName: "Select Store" }, ...fetchedStores]); 
    } catch (error) {
      console.error("Failed to fetch stores", error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchStores();
  }, [page, rowsPerPage, searchName]);

  const displayroles = searchName ? filteredRoles : roles;

  const displayRoles = () => {
    let filtered = roles;
    if (selectedStore && selectedStore.StoreID) {
      filtered = filtered.filter(
        (role) => role.StoreID === selectedStore.StoreID
      );
    }

    if (searchName) {
      const searchLower = searchName.toLowerCase();

      filtered = filtered.filter(
        (role) =>
          (role.RoleName &&
            role.RoleName.toLowerCase().includes(searchLower)) ||
          (role.Status && role.Status.toLowerCase().includes(searchLower)) ||
          (role.RoleID && role.RoleID.toString().includes(searchLower))
      );
    }

    return filtered;
  };

  return (
    <div className="main-container">
      <div className="body-container">
        <h2 className="heading">Roles</h2>

        <div className="search-button-group">
          <ul className="button-list">
            <li>
              <button
                type="button"
                className="action-button"
                onClick={handleAddUserRoleClick}
              >
                <FaPlus aria-hidden="true" className="icon" />
                Add Roles
              </button>
            </li>
            <li>
              <button
                type="button"
                className="action-button"
                onClick={handleExportUserRolesData}
              >
                <FaTable aria-hidden="true" className="icon" />
                Export Roles
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-container">
        <div className="combobox-container">
          <Combobox value={selectedStore} onChange={setSelectedStore}>
            <div className="combobox-wrapper">
              <Combobox.Input
                className="combobox-input"
                displayValue={(store) => store?.StoreName || ""}
                placeholder="Select Store Name"
              />
              <Combobox.Button className="combobox-button">
                <ChevronUpDownIcon
                  className="combobox-icon"
                  aria-hidden="true"
                />
              </Combobox.Button>
              <Combobox.Options className="combobox-options">
                {stores.map((store) => (
                  <Combobox.Option
                    key={store.StoreID}
                    className={({ active }) =>
                      active ? "combobox-option-active" : "combobox-option"
                    }
                    value={store}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={
                            selected
                              ? "combobox-option-text font-semibold"
                              : "combobox-option-text font-normal"
                          }
                        >
                          {store.StoreName}
                        </span>
                        {selected && (
                          <span
                            className={
                              active
                                ? "combobox-option-selected-icon active-selected-icon"
                                : "combobox-option-selected-icon"
                            }
                          >
                            <CheckIcon
                              className="combobox-check-icon"
                              aria-hidden="true"
                            />
                          </span>
                        )}
                      </>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            </div>
          </Combobox>
        </div>

        <div className="search-container-c-u">
          <label htmlFor="searchName" className="sr-only">
            Search
          </label>
          <input
            id="searchName"
            type="text"
            placeholder="Search by ID / Name / Status "
            value={searchName}
            onChange={(e) => searchItems(e.target.value)}
            className="mt-1 p-1 pr-10 border border-gray-300 rounded-md w-full sm:w-64 "
          />
          <div className="search-icon-container-c-u">
            <IoIosSearch />
          </div>
        </div>
      </div>

      <TableContainer
        component={Paper}
        className="mt-4"
        sx={{ width: "100%", margin: "0 auto", marginTop: "1rem" }}
      >
        <Table sx={{ width: "100%", tableLayout: "fixed" }}>
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Role ID</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="center">Store Name</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center" colSpan={2}>
                Actions
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? ( // Show loading animation while fetching
              <StyledTableRow>
                <StyledTableCell colSpan={5} align="center">
                  <LoadingAnimation /> {/* Display the loading animation */}
                </StyledTableCell>
              </StyledTableRow>
            ) : (
                  displayRoles().map((row) => (
                  <StyledTableRow key={row.RoleID}>
                  <StyledTableCell align="left">{row.RoleID}</StyledTableCell>
                  <StyledTableCell align="left">{row.RoleName}</StyledTableCell>
                  <StyledTableCell align="center" key={row.StoreID}>
                    {storeMap.get(Number(row.StoreID)) || "Not Found"}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <span
                      className={`status-pill ${
                        row.Status === "Active"
                          ? "status-active"
                          : "status-inactive"
                      }`}
                    >
                      {row.Status}
                    </span>
                  </StyledTableCell>
                  <StyledTableCell align="center" colSpan={2}>
                    <div className="flex justify-center space-x-2">
                      <button
                        type="button"
                        onClick={() =>
                          handleEditClick(
                            row.RoleID,
                            row.RoleName,
                            row.StoreID,
                            storeMap
                          )
                        }
                        className="button edit-button "
                      >
                        <AiOutlineEdit
                          aria-hidden="true"
                          className="h-4 w-4 mr-1"
                        />
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDeleteClick(row.RoleID)}
                        className="button delete-button "
                      >
                        <MdOutlineCancel
                          aria-hidden="true"
                          className="h-4 w-4 mr-1"
                        />
                        Delete
                      </button>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 20, 25]}
                colSpan={4}
                count={totalRoles}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}

export default UserRoles;
