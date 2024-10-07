import {
  FaList,
  FaTasks,
  FaTruck,
  FaCheckCircle,
  FaBroom,
  FaBan,
  FaPen,
  FaSearch,
  FaHourglassHalf,
  FaCheck,
  FaTimes,
  FaTools,
  FaMoneyBillWave,
  FaChartBar,
} from "react-icons/fa";

const FilterBar = ({ selectedFilter, onFilterChange, totalCount }) => {
  const statuses = [
    { label: "All", icon: <FaList className="text-gray-500" /> }, // Added All label
    {
      label: "Yet To Start",
      count: "",
      status: "Yet To Start",
      icon: <FaTools className="text-orange-800" />,
      subStatusId: 1,
    }, // SubStatusId 1 for YetToStart
    {
      label: "In Progress",
      count: "",
      status: "In Progress",
      icon: <FaSearch className="text-yellow-500" />,
      subStatusId: 2,
    }, // SubStatusId 2 for InProgress
    {
      label: "Completed",
      count: "",
      status: "Completed",
      icon: <FaCheck className="text-green-700" />,
      subStatusId: 3,
    }, // SubStatusId 3 for Completed
    {
      label: "Cancelled",
      count: "",
      status: "Cancelled",
      icon: <FaTimes className="text-red-500" />,
      subStatusId: 4,
    }, // SubStatusId 4 for Cancelled
  ];
  return (
    <div className="flex flex-col w-full sm:w-1/4 md:w-1/3 lg:w-1/4 p-4 bg-gray-100 rounded-md">
      <div className="p-5 bg-white">
        <h2 className="font-semibold text-lg mb-3">Status Overview</h2>
        <div className="flex flex-col space-y-2">
          {statuses.map((status, index) => (
            <button
              key={index}
              className={`flex items-center justify-between p-2 border-b border-gray-200 w-full text-left transition duration-150 ease-in-out 
                ${
                  selectedFilter.label === status.label
                    ? "bg-custom-darkblue text-white" // Highlight selected filter
                    : "text-gray-700 hover:bg-gray-100"
                } // Add hover effect for non-selected filters
                ${
                  selectedFilter.label === status.label
                    ? "hover:bg-custom-darkblue"
                    : "hover:bg-gray-100"
                }`} // Keep the hover color on selected state
              onClick={() => onFilterChange(status)} // Pass the whole status object
            >
              <span className="flex items-center">
                <span className="mr-2">{status.icon}</span>
                <span className="font-medium">{status.label}</span>
              </span>
              <span className="font-semibold">{status.count}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
