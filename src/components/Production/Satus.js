// import React from 'react';

// const StatusBadge = ({ status }) => {
//   const badgeColor =
//   status === "Cancelled"
//     ? "bg-red-100 text-red-800 ring-red-700/30" // Red background and text for Cancelled
//     : status === "Dispatched"
//     ? "bg-green-100 text-green-800 ring-green-700/30" // Green background and text for Dispatched
//     : status === "Site Clearance"
//     ? "bg-teal-100 text-teal-800 ring-teal-700/30" // Teal background and text for Site Clearance
//     : status === "Payment Done"
//     ? "bg-blue-100 text-blue-800 ring-blue-700/30" // Blue background and text for Payment Done
//     : status === "Readyto Dispatch"
//     ? "bg-yellow-100 text-yellow-800 ring-yellow-700/30" // Yellow background and text for Ready to Dispatch
//     : status === "Workstarted"
//     ? "bg-purple-100 text-purple-800 ring-purple-700/30" // Purple background and text for Workstarted
//     : "bg-gray-100 text-gray-800 ring-gray-700/30"; // Default color for undefined statuses

//   return (
//     <span
//       className={`inline-flex items-center justify-center rounded-full w-32 h-8 text-xs font-semibold ring-1 ring-inset ${badgeColor}`}
//     >
//       {status}
//     </span>
//   );
// };

// export default StatusBadge;

import React from "react";

const Statuses = ({ status }) => {
  const badgeColor =
    status === "Dispatch"
      ? "bg-teal-100 text-teal-800 ring-teal-700/30" // Teal background and text for Dispatch
      : status === "Completed"
      ? "bg-green-100 text-green-800 ring-green-700/30"
      : status === "Yet To Start"
      ? "bg-orange-100 text-orange-800 ring-orange-700/30" // Light orange background and text for Yet To Start
      : status === "In Progress"
      ? "bg-yellow-100 text-yellow-800 ring-yellow-700/30" // Light yellow background and text for In Progress
      : // Default background and text for other statuses // Green background and text for Completed
      status === "Cancelled"
      ? "bg-red-100 text-red-800 ring-red-700/30" // Red background and text for Cancelled
      : "bg-gray-100 text-gray-800 ring-gray-700/30"; // Default color for any undefined status

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full 
              w-full max-w-[8rem] min-w-[5rem] h-8 text-xs font-semibold 
              ring-1 ring-inset ${badgeColor}`}
    >
      {status}
    </span>
  );
};

export default Statuses;
