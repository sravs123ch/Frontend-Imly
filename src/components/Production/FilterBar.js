
import React from 'react';
import { FaList, FaTruck,FaTasks, FaBan,FaSpinner,FaCheckCircle, FaBroom} from 'react-icons/fa';
const FilterBar = ({ selectedFilter, onFilterChange }) => {
  return (
    <div className="flex space-x-4 p-4 bg-gray-100 rounded-md">
      <button
        className={`inline-flex items-center gap-x-1.5 px-4 py-2 text-sm font-semibold rounded-md ${
          selectedFilter === 'All'
            ? 'bg-custom-darkblue text-white hover:bg-custom-lightblue hover:text-gray-700'
            : 'bg-white text-gray-700 hover:bg-custom-lightblue hover:text-gray-700'
        }`}
        onClick={() => onFilterChange('All')}
      >
        <FaList/>
        All
      </button>
      <button
  className={`inline-flex items-center gap-x-1.5 px-4 py-2 text-sm font-semibold rounded-md ${
    selectedFilter === 'Workstarted'
      ? 'bg-custom-darkblue text-white hover:bg-custom-lightblue hover:text-gray-700'
      : 'bg-white text-gray-700 hover:bg-custom-lightblue hover:text-gray-700'
  }`}
  onClick={() => onFilterChange('Workstarted')}
>
  <FaTasks /> {/* Use the new icon */}
  Workstarted
</button>
    <div className="flex gap-4"> {/* Optional: Add a container with gap for spacing between buttons */}
      {/* Button for Ready to Dispatch */}
      <button
        className={`inline-flex items-center gap-x-1.5 px-4 py-2 text-sm font-semibold rounded-md ${
          selectedFilter === 'DispatchDate'
            ? 'bg-custom-darkblue text-white hover:bg-custom-lightblue hover:text-gray-700'
            : 'bg-white text-gray-700 hover:bg-custom-lightblue hover:text-gray-700'
        }`}
        onClick={() => onFilterChange('DispatchDate')}
      >
        <FaTruck /> {/* Icon for Ready to Dispatch */}
        Ready to Dispatch
      </button>

      {/* Button for Payment Done */}
      <button
        className={`inline-flex items-center gap-x-1.5 px-4 py-2 text-sm font-semibold rounded-md ${
          selectedFilter === 'PaymentDone'
            ? 'bg-custom-darkblue text-white hover:bg-custom-lightblue hover:text-gray-700'
            : 'bg-white text-gray-700 hover:bg-custom-lightblue hover:text-gray-700'
        }`}
        onClick={() => onFilterChange('PaymentDone')}
      >
        <FaCheckCircle /> {/* Icon for Payment Done */}
        Payment Done
      </button>

      {/* Button for Site Clearance */}
      <button
        className={`inline-flex items-center gap-x-1.5 px-4 py-2 text-sm font-semibold rounded-md ${
          selectedFilter === 'SiteClearance'
            ? 'bg-custom-darkblue text-white hover:bg-custom-lightblue hover:text-gray-700'
            : 'bg-white text-gray-700 hover:bg-custom-lightblue hover:text-gray-700'
        }`}
        onClick={() => onFilterChange('SiteClearance')}
      >
        <FaBroom /> {/* Icon for Site Clearance */}
        Site Clearance
      </button>
    <button
        className={`inline-flex items-center gap-x-1.5 px-4 py-2 text-sm font-semibold rounded-md ${
          selectedFilter === 'Dispatched'
       ? 'bg-custom-darkblue text-white hover:bg-custom-lightblue hover:text-gray-700'
            : 'bg-white text-gray-700 hover:bg-custom-lightblue hover:text-gray-700'
        }`}
        onClick={() => onFilterChange('Dispatched')}
      >
        <FaTruck/>
        Dispatched
      </button>
      <button
        className={`inline-flex items-center gap-x-1.5 px-4 py-2 text-sm font-semibold rounded-md ${
          selectedFilter === 'Canceled'
        ? 'bg-custom-darkblue text-white hover:bg-custom-lightblue hover:text-gray-700'
            : 'bg-white text-gray-700 hover:bg-custom-lightblue hover:text-gray-700'
        }`}
        onClick={() => onFilterChange('Canceled')}
      >
        <FaBan/>
        Cancelled
      </button>
    </div>
    </div>
  );
};

export default FilterBar;
