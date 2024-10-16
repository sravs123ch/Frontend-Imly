import React, { useEffect, useState } from "react";
import LoadingAnimation from "../Loading/LoadingAnimation";

const Tasks = () => {
  const [taskData, setTaskData] = useState({
    toDo: [],
    inProgress: [],
    inReview: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userID, setUserID] = useState("1"); // Default user ID (Admin)

  const userOptions = [
    { id: "3", name: "Admin" },
    { id: "1", name: "User 1" },
    { id: "5", name: "User 2" },
  ];

  const fetchTasks = async (userId) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://imly-b2y.onrender.com/api/orderhistory/getusertasks?UserID=${userId}`
      );
      const data = await response.json();

      const transformedData = {
        toDo: data.filter(
          (task) =>
            !task.OrderHistoryStatus ||
            task.OrderHistoryStatus.includes("Quick Quote") ||
            task.OrderHistoryStatus.includes("Initial Design") ||
            task.OrderHistoryStatus.includes("Initial Measurements")
        ),
        inProgress: data.filter(
          (task) =>
            task.OrderHistoryStatus &&
            (task.OrderHistoryStatus.includes("Revised Design (R1)") ||
              task.OrderHistoryStatus.includes("Revised Design (R2)") ||
              task.OrderHistoryStatus.includes("Revised Design (R#)") ||
              task.OrderHistoryStatus.includes("Final Measurement") ||
              task.OrderHistoryStatus.includes("Signup Document") ||
              task.OrderHistoryStatus.includes("Production") ||
              task.OrderHistoryStatus.includes("PDI") ||
              task.OrderHistoryStatus.includes("Dispatch"))
        ),
        inReview: data.filter(
          (task) =>
            task.OrderHistoryStatus &&
            (task.OrderHistoryStatus.includes("Installation") ||
              task.OrderHistoryStatus.includes("Completion") ||
              task.OrderHistoryStatus.includes("Canceled"))
        ),
      };
      setTaskData(transformedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setError("Failed to fetch tasks"); // Set error message
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks(userID); // Fetch tasks based on the initial userID
  }, [userID]); // Re-fetch when userID changes

  const handleUserChange = (e) => {
    setUserID(e.target.value); // Update userID state with selected user ID
  };

  if (error) return <p className="main-container">{error}</p>; // Apply error class

  return (
    <div className="main-container">
      {loading && <LoadingAnimation />}
      <h1 className="text-3xl font-semibold mb-6">User Tasks</h1>
      <hr className="border-t border-gray-300 mb-6" />

      {/* Dropdown for User Selection */}
      <div className="mb-4">
        <label className="mr-2">Select User:</label>
        <select
          value={userID}
          onChange={handleUserChange}
          className="border rounded p-2"
        >
          {userOptions.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* To Do Column */}
        <div className="relative">
          <h2 className="text-xl font-medium mb-4">
            To Do ({taskData.toDo.length})
          </h2>
          {taskData.toDo.length > 0 ? (
            taskData.toDo.map((task, index) => (
              <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
                <h3 className="text-lg font-semibold">
                  Order {task["OrdersTable.OrderNumber"]}
                </h3>

                {/* Flex container for Start Date */}
                <div className="flex mb-2">
                  <span className="text-gray-500 w-1/3">Start Date</span>
                  <span className="text-gray-900 w-2/3">
                    <span className="pr-8">:</span>
                    {new Date(task.StartDate).toLocaleDateString()}
                  </span>
                </div>

                {/* Flex container for End Date */}
                <div className="flex mb-2">
                  <span className="text-gray-500 w-1/3">End Date</span>
                  <span className="text-gray-900 w-2/3">
                    <span className="pr-8">:</span>
                    {new Date(task.EndDate).toLocaleDateString()}
                  </span>
                </div>

                {/* Flex container for Status */}
                <div className="flex mb-2">
                  <span className="text-gray-500 w-1/3">Status</span>
                  <span className="text-green-400 w-2/3">
                    <span className="pr-8">:</span>
                    {task.OrderHistoryStatus || "To Do"}
                  </span>
                </div>

                {/* Flex container for Comments */}
                <div className="flex mb-2">
                  <span className="text-gray-500 w-1/3">Comments</span>
                  <p className="text-orange-500 w-2/3">
                    <span className="pr-8">:</span>
                    {task.Comments}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No tasks to do</p>
          )}
          <div className="absolute top-0 -right-3 h-full border-r border-gray-300"></div>{" "}
          {/* Vertical line */}
        </div>

        {/* In Progress Column */}
        <div className="relative">
          <h2 className="text-xl font-medium mb-4">
            In Progress ({taskData.inProgress.length})
          </h2>
          {taskData.inProgress.length > 0 ? (
            taskData.inProgress.map((task, index) => (
              <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
                <h3 className="text-lg font-semibold">
                  Order {task["OrdersTable.OrderNumber"]}
                </h3>

                {/* Flex container for Start Date */}
                <div className="flex mb-2">
                  <span className="text-gray-500 w-1/3">Start Date</span>
                  <span className="text-gray-900 w-2/3">
                    <span className="pr-8">:</span>
                    {new Date(task.StartDate).toLocaleDateString()}
                  </span>
                </div>

                {/* Flex container for End Date */}
                <div className="flex mb-2">
                  <span className="text-gray-500 w-1/3">End Date</span>
                  <span className="text-gray-900 w-2/3">
                    <span className="pr-8">:</span>
                    {new Date(task.EndDate).toLocaleDateString()}
                  </span>
                </div>

                {/* Flex container for Status */}
                <div className="flex mb-2">
                  <span className="text-gray-500 w-1/3">Status</span>
                  <span className="text-violet-800 w-2/3">
                    <span className="pr-8">:</span>
                    {task.OrderHistoryStatus || "In Progress"}
                  </span>
                </div>

                {/* Flex container for Comments */}
                <div className="flex mb-2">
                  <span className="text-gray-500 w-1/3">Comments</span>
                  <span className="text-green-500 w-2/3">
                    <span className="pr-8">:</span>
                    {task.Comments}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No tasks in progress</p>
          )}
          <div className="absolute top-0 -right-3 h-full border-r border-gray-300"></div>{" "}
          {/* Vertical line */}
        </div>

        {/* In Review Column */}
        <div className="relative">
          <h2 className="text-xl font-medium mb-4">
            In Review ({taskData.inReview.length})
          </h2>
          {taskData.inReview.length > 0 ? (
            taskData.inReview.map((task, index) => (
              <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
                <h3 className="text-lg font-semibold">
                  Order {task["OrdersTable.OrderNumber"]}
                </h3>

                {/* Flex container for Start Date */}
                <div className="flex mb-2">
                  <span className="text-gray-500 w-1/3">Start Date</span>
                  <span className="text-gray-900 w-2/3">
                    <span className="pr-8">:</span>
                    {new Date(task.StartDate).toLocaleDateString()}
                  </span>
                </div>

                {/* Flex container for End Date */}
                <div className="flex mb-2">
                  <span className="text-gray-500 w-1/3">End Date</span>
                  <span className="text-gray-900 w-2/3">
                    <span className="pr-8">:</span>
                    {new Date(task.EndDate).toLocaleDateString()}
                  </span>
                </div>

                {/* Flex container for Status */}
                <div className="flex mb-2">
                  <span className="text-gray-500 w-1/3">Status</span>
                  <span className="text-red-500 w-2/3">
                    <span className="pr-8">:</span>
                    {task.OrderHistoryStatus || "In Review"}
                  </span>
                </div>

                {/* Flex container for Comments */}
                <div className="flex mb-2">
                  <span className="text-gray-500 w-1/3">Comments</span>
                  <span className="text-blue-500 w-2/3">
                    <span className="pr-8">:</span>
                    {task.Comments}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No tasks in review</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
