import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { useTheme } from "@mui/material/styles";
import { FaPlus, FaTable } from "react-icons/fa";
import * as XLSX from "xlsx";
import PropTypes from "prop-types";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import axios from "axios";
import { PaymentContext } from "../../Context/paymentContext";
import {
  StyledTableCell,
  StyledTableRow,
  TablePaginationActions,
} from "../CustomTablePagination";
import {
  GET_ALL_PAYMENTS_API,
  GET_PAYMENTSBY_ORDERID_API,
  GETPAYMENTSBY_PAYMETID_API,
  CREATEORUPDATE_PAYMENTS_API,
} from "../../../src/Constants/apiRoutes";
import LoadingAnimation from "../Loading/LoadingAnimation";
function Payment() {
  const [payments, setPayments] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalPayments, setTotalPayments] = useState(0);
  const [searchName, setSearchName] = useState("");
  const navigate = useNavigate();
  const { setPaymentDetails } = useContext(PaymentContext);
  const [paginatedPeople, setPaginatedPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPayments = async () => {
    setIsLoading(true); // Set isLoading to true before making the network call
    try {
      const { payments, totalCount } = await getAllPayments(
        page,
        rowsPerPage,
        searchName
      );
      setPayments(payments);
      setTotalPayments(totalCount);
    } catch (error) {
      console.error("Failed to fetch payments", error);
    } finally {
      setIsLoading(false); // Set isLoading to false in the finally block
    }
  };

  const getAllPayments = async (pageNum, pageSize, search = "") => {
    try {
      const response = await axios.get(
        GET_ALL_PAYMENTS_API,

        {
          params: {
            page: pageNum + 1,
            limit: pageSize,
            search: search,
          },
        }
      );
      return {
        payments: response.data.data || [],
        totalCount: response.data.totalRecords || 0,
      };
    } catch (error) {
      console.error("Error fetching payments:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchPayments();
  }, [page, rowsPerPage, searchName]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleAddPaymentClick = () => {
    setPaymentDetails(null);
    navigate("/Paymentsform"); // Make sure this matches the route path defined
  };

  const exportToExcel = (data, fileName) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  const handleExportPaymentsData = async () => {
    try {
      const { payments } = await getAllPayments(0, totalPayments);
      exportToExcel(payments, "Payments");
    } catch (error) {
      console.error("Error exporting payments data:", error);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-4 sm:ml-10 lg:ml-72 w-auto">
      <div className="mt-6 bg-white p-6 ">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
          <h2 className="text-xl font-semibold">Payments</h2>
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative flex w-full sm:w-[20rem]">
              <label htmlFor="searchName" className="sr-only">
                Search
              </label>
              <input
                id="searchName"
                type="text"
                placeholder="Search by CustomerName Or OrderNumber"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                className="w-full p-2 pr-10 border border-gray-300 rounded-md"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <IoIosSearch />
              </div>
            </div>

            <ul className="button-list">
              <li>
                <button
                  type="button"
                  className="action-button"
                  onClick={handleAddPaymentClick}
                >
                  <FaPlus aria-hidden="true" className="icon" />
                  Add Payments
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="action-button"
                  onClick={handleExportPaymentsData}
                >
                  <FaTable aria-hidden="true" className="icon" />
                  Export Payments
                </button>
              </li>
            </ul>
          </div>
        </div>
        {isLoading && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-700">
            <LoadingAnimation />
          </div>
        )}
        <TableContainer component={Paper} className="mt-4">
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Payment Method</StyledTableCell>
                <StyledTableCell>Payment Date</StyledTableCell>
                <StyledTableCell>Order ID</StyledTableCell>
                <StyledTableCell>Customer ID</StyledTableCell>
                <StyledTableCell>Total Amount</StyledTableCell>
                <StyledTableCell>Payment Status</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {payments.map((payment) => (
                <StyledTableRow key={payment.PaymentID}>
                  <StyledTableCell>{payment.PaymentMethod}</StyledTableCell>
                  <StyledTableCell>
                    {new Date(payment.PaymentDate).toLocaleDateString()}
                  </StyledTableCell>
                  <StyledTableCell>
                    {payment.OrderID ?? "Not available"}
                  </StyledTableCell>
                  <StyledTableCell>
                    {payment.CustomerID ?? "Not available"}
                  </StyledTableCell>
                  <StyledTableCell>
                    {payment.TotalAmount
                      ? `₹${new Intl.NumberFormat("en-IN", {
                          maximumFractionDigits: 2,
                        }).format(payment.TotalAmount)}`
                      : "₹0.00"}
                  </StyledTableCell>

                  {/* Payment Status with Conditional Styling */}
                  <StyledTableCell className="text-center">
                    <span
                      className={`inline-block px-2 py-1 text-xs font-semibold rounded-full
  ${
    payment.PaymentStatus === "Processing"
      ? "bg-blue-200 text-blue-800"
      : payment.PaymentStatus === "Completion"
      ? "bg-green-200 text-green-800"
      : payment.PaymentStatus === "Completed"
      ? "bg-green-200 text-green-800"
      : payment.PaymentStatus === "Dispatch"
      ? "bg-pink-200 text-pink-800"
      : payment.PaymentStatus === "Failed"
      ? "bg-red-200 text-red-800"
      : "bg-red-200 text-red-800"
  }`}
                    >
                      {payment.PaymentStatus ?? "Failed"}
                    </span>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[10, 20, 25]}
                  colSpan={6}
                  count={totalPayments}
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
    </div>
  );
}

export default Payment;
