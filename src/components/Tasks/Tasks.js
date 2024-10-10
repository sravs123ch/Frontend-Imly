// import React from 'react';

// const Tasks = () => {
//   const taskData = {
//     toDo: [
//       { title: "Finish user onboarding", date: "Tomorrow", comments: 1, tags: [] },
//       { title: "Solve the Dabble prioritization issue", date: "Jan 8, 2022", comments: 2, tags: ["Marketing"] },
//       { title: "Hold to reorder on mobile", date: "Jan 10, 2022", comments: 0, tags: ["Dev"] },
//     ],
//     inProgress: [
//       { title: "Update onboarding workflow templates", date: "Jan 7, 2022", comments: 4, tags: ["Templates"] },
//       { title: "Make figbot send comment when ticket is auto-moved", date: "Today", comments: 2, tags: [] },
//       { title: "Connect time tracking with tasks", date: "Jan 10, 2022", comments: 0, tags: [] },
//       { title: "Intelligent kanban sorting", date: "Jan 10, 2022", comments: 0, tags: [] },
//     ],
//     inReview: [
//       { title: "Finish Mast site", date: "Jan 8, 2022", comments: 4, tags: ["Marketing"] },
//       { title: "Dark mode date picker", date: "Today", comments: 2, tags: [] },
//       { title: "Edit workflow", date: "Jan 10, 2022", comments: 0, tags: ["Dev"] },
//       { title: "Stripe/subscription manager", date: "Jan 10, 2022", comments: 0, tags: [] },
//     ],
//   };

//   return (
//     <div className="main-container">
//       <h1 className="text-3xl font-semibold mb-6">Tasks</h1>
//       <hr className="border-t border-gray-300 mb-6" />
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* To Do Column */}
//         <div >
//           <h2 className="text-xl font-medium mb-4">To Do</h2>
        
//           {taskData.toDo.map((task, index) => (

//             <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
//               <h3 className="text-lg font-semibold">{task.title}</h3>
//               <p className="text-gray-500">{task.date}</p>
//               <p className="text-gray-500">{task.comments} comments</p>
//               <div className="mt-2 space-x-2">
//                 {task.tags.map((tag, i) => (
//                   <span key={i} className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
          
//         </div>
//         {/* In Progress Column */}
//         <div>
            
//           <h2 className="text-xl font-medium mb-4">In Progress</h2>
//           {taskData.inProgress.map((task, index) => (
//             <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
//               <h3 className="text-lg font-semibold">{task.title}</h3>
//               <p className="text-gray-500">{task.date}</p>
//               <p className="text-gray-500">{task.comments} comments</p>
//               <div className="mt-2 space-x-2">
//                 {task.tags.map((tag, i) => (
//                   <span key={i} className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//         {/* In Review Column */}
//         <div>
//           <h2 className="text-xl font-medium mb-4">In Review</h2>
//           {taskData.inReview.map((task, index) => (
//             <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
//               <h3 className="text-lg font-semibold">{task.title}</h3>
//               <p className="text-gray-500">{task.date}</p>
//               <p className="text-gray-500">{task.comments} comments</p>
//               <div className="mt-2 space-x-2">
//                 {task.tags.map((tag, i) => (
//                   <span key={i} className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tasks;



// import React from 'react';

// const Tasks = () => {
//   const taskData = {
//     toDo: [
//       { title: "Finish user onboarding", date: "Tomorrow", comments: 1, tags: [] },
//       { title: "Solve the Dabble prioritization issue", date: "Jan 8, 2022", comments: 2, tags: ["Marketing"] },
//       { title: "Hold to reorder on mobile", date: "Jan 10, 2022", comments: 0, tags: ["Dev"] },
//     ],
//     inProgress: [
//       { title: "Update onboarding workflow templates", date: "Jan 7, 2022", comments: 4, tags: ["Templates"] },
//       { title: "Make figbot send comment when ticket is auto-moved", date: "Today", comments: 2, tags: [] },
//       { title: "Connect time tracking with tasks", date: "Jan 10, 2022", comments: 0, tags: [] },
//       { title: "Intelligent kanban sorting", date: "Jan 10, 2022", comments: 0, tags: [] },
//     ],
//     inReview: [
//       { title: "Finish Mast site", date: "Jan 8, 2022", comments: 4, tags: ["Marketing"] },
//       { title: "Dark mode date picker", date: "Today", comments: 2, tags: [] },
//       { title: "Edit workflow", date: "Jan 10, 2022", comments: 0, tags: ["Dev"] },
//       { title: "Stripe/subscription manager", date: "Jan 10, 2022", comments: 0, tags: [] },
//     ],
//   };

//   return (
//     <div className="main-container">
//       <h1 className="text-3xl font-semibold mb-6">Tasks</h1>
//       <hr className="border-t border-gray-300 mb-6" />
//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//         {/* To Do Column */}
//         <div className="flex flex-col">
//           <h2 className="text-xl font-medium mb-4">To Do</h2>
//           {taskData.toDo.map((task, index) => (
//             <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
//               <h3 className="text-lg font-semibold">{task.title}</h3>
//               <p className="text-gray-500">{task.date}</p>
//               <p className="text-gray-500">{task.comments} comments</p>
//               <div className="mt-2 space-x-2">
//                 {task.tags.map((tag, i) => (
//                   <span key={i} className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//           {/* Vertical Line */}
//         </div>

//         {/* In Progress Column */}
//         <div>
//           <h2 className="text-xl font-medium ">In Progress</h2>
//           {taskData.inProgress.map((task, index) => (
//             <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
//               <h3 className="text-lg font-semibold">{task.title}</h3>
//               <p className="text-gray-500">{task.date}</p>
//               <p className="text-gray-500">{task.comments} comments</p>
//               <div className="mt-2 space-x-2">
//                 {task.tags.map((tag, i) => (
//                   <span key={i} className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//         {/* In Review Column */}
//         <div>
//           <h2 className="text-xl font-medium mb-4">In Review</h2>
//           {taskData.inReview.map((task, index) => (
//             <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
//               <h3 className="text-lg font-semibold">{task.title}</h3>
//               <p className="text-gray-500">{task.date}</p>
//               <p className="text-gray-500">{task.comments} comments</p>
//               <div className="mt-2 space-x-2">
//                 {task.tags.map((tag, i) => (
//                   <span key={i} className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tasks;



// import React, { useEffect, useState } from 'react';

// const Tasks = () => {
//   const [taskData, setTaskData] = useState({ toDo: [], inProgress: [], inReview: [] });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const response = await fetch('https://imly-b2y.onrender.com/api/orderhistory/getusertasks?UserID=2');
//         const data = await response.json();

//         // Transforming data based on OrderHistoryStatus for different columns
//         const transformedData = {
//           toDo: data.filter(task => !task.OrderHistoryStatus), // No status means it's "To Do"
//           inProgress: data.filter(task => task.OrderHistoryStatus && task.OrderHistoryStatus.includes('Initial Measurements')), // Based on your data logic
//           inReview: data.filter(
//             task => task.OrderHistoryStatus && 
//                     (task.OrderHistoryStatus.includes('Production') || task.OrderHistoryStatus.includes('Dispatch'))
//           )
//         };

//         setTaskData(transformedData);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching tasks:', error);
//         setError('Failed to fetch tasks');
//         setLoading(false);
//       }
//     };

//     fetchTasks();
//   }, []);

//   if (loading) return <p>Loading tasks...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="main-container">
//       <h1 className="text-3xl font-semibold mb-6">User Tasks</h1>
//       <hr className="border-t border-gray-300 mb-6" />
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* To Do Column */}
//         <div>
//           <h2 className="text-xl font-medium mb-4">To Do</h2>
//           {taskData.toDo.length > 0 ? (
//             taskData.toDo.map((task, index) => (
//               <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
//                 <h3 className="text-lg font-semibold">Order {task['OrdersTable.OrderNumber']}</h3>
//                 <p className="text-gray-500">Start Date: {new Date(task.StartDate).toLocaleDateString()}</p>
//                 <p className="text-gray-500">End Date: {new Date(task.EndDate).toLocaleDateString()}</p>
               
//                 <p className="text-gray-500">{task.OrderHistoryStatus}</p>
//                 <div className="mt-2 space-x-2">
//           {task.tags && task.tags.map((tag, i) => (
//             <span key={i} className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
//               {tag}
//             </span>
//           ))}
//         </div>

//                 <p className="text-gray-500">{task.Comments}</p>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500">No tasks to do</p>
//           )}
//         </div>

//         {/* In Progress Column */}
//         <div>
//           <h2 className="text-xl font-medium mb-4">In Progress</h2>
//           {taskData.inProgress.length > 0 ? (
//             taskData.inProgress.map((task, index) => (
//               <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
//                 <h3 className="text-lg font-semibold">Order {task['OrdersTable.OrderNumber']}</h3>
//                 <p className="text-gray-500">Start Date: {new Date(task.StartDate).toLocaleDateString()}</p>
//                 <p className="text-gray-500">End Date: {new Date(task.EndDate).toLocaleDateString()}</p>
//                 <p className="text-gray-500">{task.Comments}</p>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500">No tasks in progress</p>
//           )}
//         </div>

//         {/* In Review Column */}
//         <div>
//           <h2 className="text-xl font-medium mb-4">In Review</h2>
//           {taskData.inReview.length > 0 ? (
//             taskData.inReview.map((task, index) => (
//               <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
//                 <h3 className="text-lg font-semibold">Order {task['OrdersTable.OrderNumber']}</h3>
//                 <p className="text-gray-500">Start Date: {new Date(task.StartDate).toLocaleDateString()}</p>
//                 <p className="text-gray-500">End Date: {new Date(task.EndDate).toLocaleDateString()}</p>
//                 <p className="text-gray-500">{task.Comments}</p>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500">No tasks in review</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tasks;



// import React, { useEffect, useState } from 'react';

// const Tasks = () => {
//   const [taskData, setTaskData] = useState({ toDo: [], inProgress: [], inReview: [] });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const response = await fetch('https://imly-b2y.onrender.com/api/orderhistory/getusertasks?UserID=2');
//         const data = await response.json();

//         // Transforming data based on OrderHistoryStatus for different columns
//         const transformedData = {
//           toDo: data.filter(task => !task.OrderHistoryStatus), // No status means it's "To Do"
//           inProgress: data.filter(task => task.OrderHistoryStatus && task.OrderHistoryStatus.includes('Initial Measurements')), // Based on your data logic
//           inReview: data.filter(
//             task => task.OrderHistoryStatus && 
//                     (task.OrderHistoryStatus.includes('Production') || task.OrderHistoryStatus.includes('Dispatch'))
//           )
//         };

//         setTaskData(transformedData);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching tasks:', error);
//         setError('Failed to fetch tasks');
//         setLoading(false);
//       }
//     };

//     fetchTasks();
//   }, []);

//   if (loading) return <p>Loading tasks...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="main-container">
//       <h1 className="text-3xl font-semibold mb-6">User Tasks</h1>
//       <hr className="border-t border-gray-300 mb-6" />
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* To Do Column */}
//         <div>
//           <h2 className="text-xl font-medium mb-4">To Do({taskData.toDo.length})</h2>
//           {taskData.toDo.length > 0 ? (
//             taskData.toDo.map((task, index) => (
//             //     <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
//             //     <h3 className="text-lg font-semibold">Order {task['OrdersTable.OrderNumber']}</h3>
                
//             //     {/* Flex container for Start Date */}
//             //     <div className="flex justify-between mb-2">
//             //       <span className="text-gray-500">Start Date:</span>
//             //       <span className="ml-2">{new Date(task.StartDate).toLocaleDateString()}</span>
//             //     </div>
              
//             //     {/* Flex container for End Date */}
//             //     <div className="flex justify-between mb-2">
//             //       <span className="text-gray-500">End Date:</span>
//             //       <span className="ml-2">{new Date(task.EndDate).toLocaleDateString()}</span>
//             //     </div>
                
//             //     {/* Flex container for Status */}
//             //     <div className="flex justify-between mb-2">
//             //       <span className="text-gray-500">Status:</span>
//             //       <span className="ml-2">{task.OrderHistoryStatus || 'To Do'}</span>
//             //     </div>
              
//             //     {/* Flex container for Comments */}
//             //     <div className="flex justify-between mb-2">
//             //       <span className="text-gray-500">Comments:</span>
//             //       <span className="ml-2">{task.Comments}</span>
//             //     </div>
//             //   </div>

// //             <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
// //   <h3 className="text-lg font-semibold">Order {task['OrdersTable.OrderNumber']}</h3>

// //   {/* Flex container for Start Date */}
// //   <div className="flex mb-2">
// //     <span className="text-gray-500 w-1/3">Start Date:</span>
// //     <span className="text-gray-900 w-2/3">{new Date(task.StartDate).toLocaleDateString()}</span>
// //   </div>

// //   {/* Flex container for End Date */}
// //   <div className="flex mb-2">
// //     <span className="text-gray-500 w-1/3">End Date:</span>
// //     <span className="text-gray-900 w-2/3">{new Date(task.EndDate).toLocaleDateString()}</span>
// //   </div>

// //   {/* Flex container for Status */}
// //   <div className="flex mb-2">
// //     <span className="text-gray-500 w-1/3">Status:</span>
// //     <span className="text-gray-900 w-2/3">{task.OrderHistoryStatus || 'To Do'}</span>
// //   </div>

// //   {/* Flex container for Comments */}
// //   <div className="flex mb-2">
// //     <span className="text-gray-500 w-1/3">Comments:</span>
// //     <span className="text-gray-900 w-2/3">{task.Comments}</span>
// //   </div>
// // </div>

 
// <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
//   <h3 className="text-lg font-semibold">Order {task['OrdersTable.OrderNumber']}</h3>

//   {/* Flex container for Start Date */}
//   <div className="flex mb-2">
//     <span className="text-gray-500 w-1/3">Start Date</span>
//     <span className="text-gray-900 w-2/3"><span className='pr-8'>:</span>{new Date(task.StartDate).toLocaleDateString()}</span>
//   </div>

//   {/* Flex container for End Date */}
//   <div className="flex mb-2">
//     <span className="text-gray-500 w-1/3">End Date</span>
//     <span className="text-gray-900 w-2/3"><span className='pr-8'>:</span>{new Date(task.EndDate).toLocaleDateString()}</span>
//   </div>

//   {/* Flex container for Status */}
//   <div className="flex mb-2">
//     <span className="text-gray-500 w-1/3">Status</span>
//     <span className="text-green-400 w-2/3"><span className='pr-8'>:</span>{task.OrderHistoryStatus || 'To Do'}</span>
//   </div>

//   {/* Flex container for Comments */}
//   <div className="flex mb-2">
//     <span className="text-gray-500 w-1/3">Comments</span>
//     <p className="text-orange-500 w-2/3"><span className='pr-8'>:</span>{task.Comments}</p>
//   </div>
// </div>             
//             ))
//           ) : (
//             <p className="text-gray-500">No tasks to do</p>
//           )}
//         </div>

//         {/* In Progress Column */}
//         <div>
//           <h2 className="text-xl font-medium mb-4">In Progress({taskData.inProgress.length})</h2>
//           {taskData.inProgress.length > 0 ? (
//             taskData.inProgress.map((task, index) => (
//             //   <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
//             //     <h3 className="text-lg font-semibold">Order {task['OrdersTable.OrderNumber']}</h3>
//             //     <p className="text-gray-500">Start Date: {new Date(task.StartDate).toLocaleDateString()}</p>
//             //     <p className="text-gray-500">End Date: {new Date(task.EndDate).toLocaleDateString()}</p>
//             //     {/* Display OrderHistoryStatus */}
//             //     <p className="text-gray-500">Status: {task.OrderHistoryStatus || 'In Progress'}</p>
//             //     <p className="text-gray-500">Comments:{task.Comments}</p>
//             //   </div>
// //             <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
// //   <h3 className="text-lg font-semibold">Order {task['OrdersTable.OrderNumber']}</h3>
  
// //   {/* Flex container for Start Date */}
// //   <div className="flex justify-between mb-2">
// //     <span className="text-gray-500">Start Date:</span>
// //     <span className="ml-2">{new Date(task.StartDate).toLocaleDateString()}</span>
// //   </div>

// //   {/* Flex container for End Date */}
// //   <div className="flex justify-between mb-2">
// //     <span className="text-gray-500">End Date:</span>
// //     <span className="ml-2">{new Date(task.EndDate).toLocaleDateString()}</span>
// //   </div>
  
// //   {/* Flex container for Status */}
// //   <div className="flex justify-between mb-2">
// //     <span className="text-gray-500">Status:</span>
// //     <span className="ml-2">{task.OrderHistoryStatus || 'In Progress'}</span>
// //   </div>

// //   {/* Flex container for Comments */}
// //   <div className="flex justify-between mb-2">
// //     <span className="text-gray-500">Comments:</span>
// //     <span className="ml-2">{task.Comments}</span>
// //   </div>
// // </div>



// // <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
// //   <h3 className="text-lg font-semibold">Order {task['OrdersTable.OrderNumber']}</h3>

// //   {/* Flex container for Start Date */}
// //   <div className="flex mb-2">
// //     <span className="text-gray-500 w-1/3">Start Date</span>
// //     <span className="text-gray-900 w-2/3"><span className='pr-8'>:</span>{new Date(task.StartDate).toLocaleDateString()}</span>
// //   </div>

// //   {/* Flex container for End Date */}
// //   <div className="flex mb-2">
// //     <span className="text-gray-500 w-1/3">End Date</span>
// //     <span className="text-gray-900 w-2/3"><span className='pr-8'>:</span>{new Date(task.EndDate).toLocaleDateString()}</span>
// //   </div>

// //   {/* Flex container for Status */}
// //   <div className="flex mb-2">
// //     <span className="text-gray-500 w-1/3">Status</span>
// //     <span className="text-gray-900 w-2/3"><span className='pr-8'>:</span>{task.OrderHistoryStatus || 'To Do'}</span>
// //   </div>

// //   {/* Flex container for Comments */}
// //   <div className="flex mb-2">
// //     <span className="text-gray-500 w-1/3">Comments</span>
// //     <span className="text-gray-900 w-2/3"><span className='pr-8'>:</span>{task.Comments}</span>
// //   </div>
// // </div>

// <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
//   <h3 className="text-lg font-semibold">Order {task['OrdersTable.OrderNumber']}</h3>

//   {/* Flex container for Start Date */}
//   <div className="flex mb-2">
//     <span className="text-gray-500 w-1/3">Start Date</span>
//     <span className="text-gray-900 w-2/3"><span className='pr-8'>:</span>{new Date(task.StartDate).toLocaleDateString()}</span>
//   </div>

//   {/* Flex container for End Date */}
//   <div className="flex mb-2">
//     <span className="text-gray-500 w-1/3">End Date</span>
//     <span className="text-gray-900 w-2/3"><span className='pr-8'>:</span>{new Date(task.EndDate).toLocaleDateString()}</span>
//   </div>

//   {/* Flex container for Status */}
//   <div className="flex mb-2">
//     <span className="text-gray-500 w-1/3">Status</span>
//     <span className="text-violet-800 w-2/3"><span className='pr-8'>:</span>{task.OrderHistoryStatus || 'In Progress'}</span>
//   </div>

//   {/* Flex container for Comments */}
//   <div className="flex mb-2">
//     <span className="text-gray-500 w-1/3">Comments</span>
//     <span className="text-green-500 w-2/3"><span className='pr-8'>:</span>{task.Comments}</span>
//   </div>
// </div>
//             ))
//           ) : (
//             <p className="text-gray-500">No tasks in progress</p>
//           )}
//         </div>

//         {/* In Review Column */}

//         <div>
//           <h2 className="text-xl font-medium mb-4">In Review({taskData.inReview.length})</h2>
//           {taskData.inReview.length > 0 ? (
//             taskData.inReview.map((task, index) => (
//             //   <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
//             //     <h3 className="text-lg font-semibold">Order {task['OrdersTable.OrderNumber']}</h3>
//             //     <p className="text-gray-500">Start Date: {new Date(task.StartDate).toLocaleDateString()}</p>
//             //     <p className="text-gray-500">End Date: {new Date(task.EndDate).toLocaleDateString()}</p>
//             //     {/* Display OrderHistoryStatus */}
//             //     <p className="text-gray-500">Status: {task.OrderHistoryStatus || 'In Review'}</p>
//             //     <p className="text-gray-500">comments:{task.Comments}</p>
//             //   </div>
// //             <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
// //   <h3 className="text-lg font-semibold">Order {task['OrdersTable.OrderNumber']}</h3>
  
// //   {/* Flex container for Start Date */}
// //   <div className="flex justify-between mb-2">
// //     <span className="text-gray-500">Start Date:</span>
// //     <span className="ml-2">{new Date(task.StartDate).toLocaleDateString()}</span>
// //   </div>

// //   {/* Flex container for End Date */}
// //   <div className="flex justify-between mb-2">
// //     <span className="text-gray-500">End Date:</span>
// //     <span className="ml-2">{new Date(task.EndDate).toLocaleDateString()}</span>
// //   </div>
  
// //   {/* Flex container for Status */}
// //   <div className="flex justify-between mb-2">
// //     <span className="text-gray-500">Status:</span>
// //     <span className="ml-2">{task.OrderHistoryStatus || 'In Review'}</span>
// //   </div>

// //   {/* Flex container for Comments */}
// //   <div className="flex justify-between mb-2">
// //     <span className="text-gray-500">Comments:</span>
// //     <span className="ml-2">{task.Comments}</span>
// //   </div>
// // </div>

// <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
//   <h3 className="text-lg font-semibold">Order {task['OrdersTable.OrderNumber']}</h3>

//   {/* Flex container for Start Date */}
//   <div className="flex mb-2">
//     <span className="text-gray-500 w-1/3">Start Date</span>
//     <span className="text-gray-900 w-2/3"><span className='pr-8'>:</span>{new Date(task.StartDate).toLocaleDateString()}</span>
//   </div>

//   {/* Flex container for End Date */}
//   <div className="flex mb-2">
//     <span className="text-gray-500 w-1/3">End Date</span>
//     <span className="text-gray-900 w-2/3"><span className='pr-8'>:</span>{new Date(task.EndDate).toLocaleDateString()}</span>
//   </div>

//   {/* Flex container for Status */}
//   <div className="flex mb-2">
//     <span className="text-gray-500 w-1/3">Status</span>
//     <span className="text-orange-600 w-2/3"><span className='pr-8'>:</span>{task.OrderHistoryStatus || 'In Review'}</span>
//   </div>

//   {/* Flex container for Comments */}
//   <div className="flex mb-2">
//     <span className="text-gray-500 w-1/3">Comments</span>
//     <span className="text-purple-600 w-2/3"><span className='pr-8'>:</span>{task.Comments}</span>
//   </div>
// </div>


//             ))
//           ) : (
//             <p className="text-gray-500">No tasks in review</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tasks;





// import React, { useEffect, useState } from 'react';

// const Tasks = () => {
//   const [taskData, setTaskData] = useState({ toDo: [], inProgress: [], inReview: [] });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const response = await fetch('https://imly-b2y.onrender.com/api/orderhistory/getusertasks?UserID=2');
//         const data = await response.json();

//         // Transforming data based on OrderHistoryStatus for different columns
//         const transformedData = {
//           toDo: data.filter(task => !task.OrderHistoryStatus), // No status means it's "To Do"
//           inProgress: data.filter(task => task.OrderHistoryStatus && task.OrderHistoryStatus.includes('Initial Measurements')), // Based on your data logic
//           inReview: data.filter(
//             task => task.OrderHistoryStatus && 
//                     (task.OrderHistoryStatus.includes('Production') || task.OrderHistoryStatus.includes('Dispatch'))
//           )
//         };

//         setTaskData(transformedData);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching tasks:', error);
//         setError('Failed to fetch tasks');
//         setLoading(false);
//       }
//     };

//     fetchTasks();
//   }, []);

//   if (loading) return <p>Loading tasks...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="main-container">
//       <h1 className="text-3xl font-semibold mb-6">User Tasks</h1>
//       <hr className="border-t border-gray-300 mb-6" />
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* To Do Column */}
//         <div>
//           <h2 className="text-xl font-medium mb-4">To Do({taskData.toDo.length})</h2>
//           {taskData.toDo.length > 0 ? (
//             taskData.toDo.map((task, index) => (
           
// <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
//   <h3 className="text-lg font-semibold">Order {task['OrdersTable.OrderNumber']}</h3>

//   {/* Flex container for Start Date */}
//   <div className="flex mb-2">
//     <span className="text-gray-500 w-1/3">Start Date</span>
//     <span className="text-gray-900 w-2/3"><span className='pr-8'>:</span>{new Date(task.StartDate).toLocaleDateString()}</span>
//   </div>

//   {/* Flex container for End Date */}
//   <div className="flex mb-2">
//     <span className="text-gray-500 w-1/3">End Date</span>
//     <span className="text-gray-900 w-2/3"><span className='pr-8'>:</span>{new Date(task.EndDate).toLocaleDateString()}</span>
//   </div>

//   {/* Flex container for Status */}
//   <div className="flex mb-2">
//     <span className="text-gray-500 w-1/3">Status</span>
//     <span className="text-green-400 w-2/3"><span className='pr-8'>:</span>{task.OrderHistoryStatus || 'To Do'}</span>
//   </div>

//   {/* Flex container for Comments */}
//   <div className="flex mb-2">
//     <span className="text-gray-500 w-1/3">Comments</span>
//     <p className="text-orange-500 w-2/3"><span className='pr-8'>:</span>{task.Comments}</p>
//   </div>
// </div>             
//             ))
//           ) : (
//             <p className="text-gray-500">No tasks to do</p>
//           )}
//         </div>

//         {/* In Progress Column */}
//         <div>
//           <h2 className="text-xl font-medium mb-4">In Progress({taskData.inProgress.length})</h2>
//           {taskData.inProgress.length > 0 ? (
//             taskData.inProgress.map((task, index) => (
           
// <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
//   <h3 className="text-lg font-semibold">Order {task['OrdersTable.OrderNumber']}</h3>

//   {/* Flex container for Start Date */}
//   <div className="flex mb-2">
//     <span className="text-gray-500 w-1/3">Start Date</span>
//     <span className="text-gray-900 w-2/3"><span className='pr-8'>:</span>{new Date(task.StartDate).toLocaleDateString()}</span>
//   </div>

//   {/* Flex container for End Date */}
//   <div className="flex mb-2">
//     <span className="text-gray-500 w-1/3">End Date</span>
//     <span className="text-gray-900 w-2/3"><span className='pr-8'>:</span>{new Date(task.EndDate).toLocaleDateString()}</span>
//   </div>

//   {/* Flex container for Status */}
//   <div className="flex mb-2">
//     <span className="text-gray-500 w-1/3">Status</span>
//     <span className="text-violet-800 w-2/3"><span className='pr-8'>:</span>{task.OrderHistoryStatus || 'In Progress'}</span>
//   </div>

//   {/* Flex container for Comments */}
//   <div className="flex mb-2">
//     <span className="text-gray-500 w-1/3">Comments</span>
//     <span className="text-green-500 w-2/3"><span className='pr-8'>:</span>{task.Comments}</span>
//   </div>
// </div>
//             ))
//           ) : (
//             <p className="text-gray-500">No tasks in progress</p>
//           )}
//         </div>

//         {/* In Review Column */}
        
//         <div>
//           <h2 className="text-xl font-medium mb-4">In Review({taskData.inReview.length})</h2>
//           {taskData.inReview.length > 0 ? (
//             taskData.inReview.map((task, index) => (
           

// <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
//   <h3 className="text-lg font-semibold">Order {task['OrdersTable.OrderNumber']}</h3>

//   {/* Flex container for Start Date */}
//   <div className="flex mb-2">
//     <span className="text-gray-500 w-1/3">Start Date</span>
//     <span className="text-gray-900 w-2/3"><span className='pr-8'>:</span>{new Date(task.StartDate).toLocaleDateString()}</span>
//   </div>

//   {/* Flex container for End Date */}
//   <div className="flex mb-2">
//     <span className="text-gray-500 w-1/3">End Date</span>
//     <span className="text-gray-900 w-2/3"><span className='pr-8'>:</span>{new Date(task.EndDate).toLocaleDateString()}</span>
//   </div>

//   {/* Flex container for Status */}
//   <div className="flex mb-2">
//     <span className="text-gray-500 w-1/3">Status</span>
//     <span className="text-orange-600 w-2/3"><span className='pr-8'>:</span>{task.OrderHistoryStatus || 'In Review'}</span>
//   </div>

//   {/* Flex container for Comments */}
//   <div className="flex mb-2">
//     <span className="text-gray-500 w-1/3">Comments</span>
//     <span className="text-purple-600 w-2/3"><span className='pr-8'>:</span>{task.Comments}</span>
//   </div>
// </div>


//             ))
//           ) : (
//             <p className="text-gray-500">No tasks in review</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tasks;



// import React, { useEffect, useState } from 'react';

// const Tasks = () => {
//   const [taskData, setTaskData] = useState({ toDo: [], inProgress: [], inReview: [] });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const response = await fetch('https://imly-b2y.onrender.com/api/orderhistory/getusertasks?UserID=2');
//         const data = await response.json();

//         // Transforming data based on OrderHistoryStatus for different columns
//         const transformedData = {
//           toDo: data.filter(task => !task.OrderHistoryStatus), // No status means it's "To Do"
//           inProgress: data.filter(task => task.OrderHistoryStatus && task.OrderHistoryStatus.includes('Initial Measurements')), // Based on your data logic
//           inReview: data.filter(
//             task => task.OrderHistoryStatus && 
//                     (task.OrderHistoryStatus.includes('Production') || task.OrderHistoryStatus.includes('Dispatch'))
//           )
//         };

//         setTaskData(transformedData);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching tasks:', error);
//         setError('Failed to fetch tasks');
//         setLoading(false);
//       }
//     };

//     fetchTasks();
//   }, []);

//   if (loading) return <p>Loading tasks...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="main-container">
//       <h1 className="text-3xl font-semibold mb-6">User Tasks</h1>
//       <hr className="border-t border-gray-300 mb-6" />
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* To Do Column */}
//         <div className="relative">
//           <h2 className="text-xl font-medium mb-4">To Do({taskData.toDo.length})</h2>
//           {taskData.toDo.length > 0 ? (
//             taskData.toDo.map((task, index) => (
//               <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
//                 <h3 className="text-lg font-semibold">Order {task['OrdersTable.OrderNumber']}</h3>

//                 {/* Flex container for Start Date */}
//                 <div className="flex mb-2">
//                   <span className="text-gray-500 w-1/3">Start Date</span>
//                   <span className="text-gray-900 w-2/3"><span className='pr-8'>:</span>{new Date(task.StartDate).toLocaleDateString()}</span>
//                 </div>

//                 {/* Flex container for End Date */}
//                 <div className="flex mb-2">
//                   <span className="text-gray-500 w-1/3">End Date</span>
//                   <span className="text-gray-900 w-2/3"><span className='pr-8'>:</span>{new Date(task.EndDate).toLocaleDateString()}</span>
//                 </div>

//                 {/* Flex container for Status */}
//                 <div className="flex mb-2">
//                   <span className="text-gray-500 w-1/3">Status</span>
//                   <span className="text-green-400 w-2/3"><span className='pr-8'>:</span>{task.OrderHistoryStatus || 'To Do'}</span>
//                 </div>

//                 {/* Flex container for Comments */}
//                 <div className="flex mb-2">
//                   <span className="text-gray-500 w-1/3">Comments</span>
//                   <p className="text-orange-500 w-2/3"><span className='pr-8'>:</span>{task.Comments}</p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500">No tasks to do</p>
//           )}
//           <div className="absolute top-0 -right-3 h-full border-r border-gray-300"></div> {/* Vertical line */}
//         </div>

//         {/* In Progress Column */}
//         <div className="relative">
//           <h2 className="text-xl font-medium mb-4">In Progress({taskData.inProgress.length})</h2>
//           {taskData.inProgress.length > 0 ? (
//             taskData.inProgress.map((task, index) => (
//               <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
//                 <h3 className="text-lg font-semibold">Order {task['OrdersTable.OrderNumber']}</h3>

//                 {/* Flex container for Start Date */}
//                 <div className="flex mb-2">
//                   <span className="text-gray-500 w-1/3">Start Date</span>
//                   <span className="text-gray-900 w-2/3"><span className='pr-8'>:</span>{new Date(task.StartDate).toLocaleDateString()}</span>
//                 </div>

//                 {/* Flex container for End Date */}
//                 <div className="flex mb-2">
//                   <span className="text-gray-500 w-1/3">End Date</span>
//                   <span className="text-gray-900 w-2/3"><span className='pr-8'>:</span>{new Date(task.EndDate).toLocaleDateString()}</span>
//                 </div>

//                 {/* Flex container for Status */}
//                 <div className="flex mb-2">
//                   <span className="text-gray-500 w-1/3">Status</span>
//                   <span className="text-violet-800 w-2/3"><span className='pr-8'>:</span>{task.OrderHistoryStatus || 'In Progress'}</span>
//                 </div>

//                 {/* Flex container for Comments */}
//                 <div className="flex mb-2">
//                   <span className="text-gray-500 w-1/3">Comments</span>
//                   <span className="text-green-500 w-2/3"><span className='pr-8'>:</span>{task.Comments}</span>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500">No tasks in progress</p>
//           )}
//           <div className="absolute top-0 -right-3 h-full border-r border-gray-300"></div> {/* Vertical line */}
//         </div>

//         {/* In Review Column */}
//         <div>
//           <h2 className="text-xl font-medium mb-4">In Review({taskData.inReview.length})</h2>
//           {taskData.inReview.length > 0 ? (
//             taskData.inReview.map((task, index) => (
//               <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
//                 <h3 className="text-lg font-semibold">Order {task['OrdersTable.OrderNumber']}</h3>

//                 {/* Flex container for Start Date */}
//                 <div className="flex mb-2">
//                   <span className="text-gray-500 w-1/3">Start Date</span>
//                   <span className="text-gray-900 w-2/3"><span className='pr-8'>:</span>{new Date(task.StartDate).toLocaleDateString()}</span>
//                 </div>

//                 {/* Flex container for End Date */}
//                 <div className="flex mb-2">
//                   <span className="text-gray-500 w-1/3">End Date</span>
//                   <span className="text-gray-900 w-2/3"><span className='pr-8'>:</span>{new Date(task.EndDate).toLocaleDateString()}</span>
//                 </div>

//                 {/* Flex container for Status */}
//                 <div className="flex mb-2">
//                   <span className="text-gray-500 w-1/3">Status</span>
//                   <span className="text-orange-600 w-2/3"><span className='pr-8'>:</span>{task.OrderHistoryStatus || 'In Review'}</span>
//                 </div>

//                 {/* Flex container for Comments */}
//                 <div className="flex mb-2">
//                   <span className="text-gray-500 w-1/3">Comments</span>
//                   <span className="text-purple-600 w-2/3"><span className='pr-8'>:</span>{task.Comments}</span>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500">No tasks in review</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tasks;



// import React, { useEffect, useState } from 'react';

// const Tasks = () => {
//   const [taskData, setTaskData] = useState({ toDo: [], inProgress: [], inReview: [] });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [userID, setUserID] = useState('1'); // Default user ID (Admin)
//   const [searchUserID, setSearchUserID] = useState('');

//   const userOptions = [
//     { id: '2', name: 'Admin' },

//     { id: '1', name: 'User 1' },

//     { id: '3', name: 'User 2' },
//     { id: '4', name: 'User 3' },
//   ];

//   const fetchTasks = async (userId) => {
//     try {
//       const response = await fetch(`https://imly-b2y.onrender.com/api/orderhistory/getusertasks?UserID=${userId}`);
//       const data = await response.json();

//       // Transforming data based on OrderHistoryStatus for different columns
//     //   const transformedData = {
//     //     toDo: data.filter(task => !task.OrderHistoryStatus), // No status means it's "To Do"
//     //     inProgress: data.filter(task => task.OrderHistoryStatus && task.OrderHistoryStatus.includes('Initial Measurements')),
//     //     inReview: data.filter(
//     //       task => task.OrderHistoryStatus && 
//     //               (task.OrderHistoryStatus.includes('Production') || task.OrderHistoryStatus.includes('Dispatch'))
//     //     )
//     //   };
//     const transformedData = {
//         toDo: data.filter(task => 
//           !task.OrderHistoryStatus || 
//           task.OrderHistoryStatus.includes('Quick Quote') || 
//           task.OrderHistoryStatus.includes('Initial Design') || 
//           task.OrderHistoryStatus.includes('Initial Measurements')
//         ),
//         inProgress: data.filter(task => 
//           task.OrderHistoryStatus && 
//           (
//             task.OrderHistoryStatus.includes('Revised Design (R1)') || 
//             task.OrderHistoryStatus.includes('Revised Design (R2)') || 
//             task.OrderHistoryStatus.includes('Revised Design (R#)') || 
//             task.OrderHistoryStatus.includes('Final Measurement') || 
//             task.OrderHistoryStatus.includes('Signup Document') || 
//             task.OrderHistoryStatus.includes('Production') || 
//             task.OrderHistoryStatus.includes('PDI') || 
//             task.OrderHistoryStatus.includes('Dispatch')
//           )
//         ),
//         inReview: data.filter(task => 
//           task.OrderHistoryStatus && 
//           (
//             task.OrderHistoryStatus.includes('Installation') || 
//             task.OrderHistoryStatus.includes('Completion') || 
//             task.OrderHistoryStatus.includes('Canceled')
//           )
//         )
//       };
//       setTaskData(transformedData);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching tasks:', error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTasks(userID); // Fetch tasks based on the initial userID
//   }, [userID]); // Re-fetch when userID changes

//   const handleUserChange = (e) => {
//     setUserID(e.target.value); // Update userID state with selected user ID
//   };

//   if (loading) return <p>Loading tasks...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="main-container">
//       <h1 className="text-3xl font-semibold mb-6">User Tasks</h1>
//       <hr className="border-t border-gray-300 mb-6" />

//       {/* Dropdown for User Selection */}
//       <div className="mb-4">
//         <label className="mr-2">Select User:</label>
//         <select
//           value={userID}
//           onChange={handleUserChange}
//           className="border rounded p-2"
//         >
//           {userOptions.map(user => (
//             <option key={user.id} value={user.id}>
//               {user.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* To Do Column */}
//         <div className="relative">
//           <h2 className="text-xl font-medium mb-4">To Do ({taskData.toDo.length})</h2>
//           {taskData.toDo.length > 0 ? (
//             taskData.toDo.map((task, index) => (
//               <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
//                 <h3 className="text-lg font-semibold">Order {task['OrdersTable.OrderNumber']}</h3>

//                 {/* Flex container for Start Date */}
//                 <div className="flex mb-2">
//                   <span className="text-gray-500 w-1/3">Start Date</span>
//                   <span className="text-gray-900 w-2/3">
//                     <span className='pr-8'>:</span>{new Date(task.StartDate).toLocaleDateString()}
//                   </span>
//                 </div>

//                 {/* Flex container for End Date */}
//                 <div className="flex mb-2">
//                   <span className="text-gray-500 w-1/3">End Date</span>
//                   <span className="text-gray-900 w-2/3">
//                     <span className='pr-8'>:</span>{new Date(task.EndDate).toLocaleDateString()}
//                   </span>
//                 </div>

//                 {/* Flex container for Status */}
//                 <div className="flex mb-2">
//                   <span className="text-gray-500 w-1/3">Status</span>
//                   <span className="text-green-400 w-2/3">
//                     <span className='pr-8'>:</span>{task.OrderHistoryStatus || 'To Do'}
//                   </span>
//                 </div>

//                 {/* Flex container for Comments */}
//                 <div className="flex mb-2">
//                   <span className="text-gray-500 w-1/3">Comments</span>
//                   <p className="text-orange-500 w-2/3">
//                     <span className='pr-8'>:</span>{task.Comments}
//                   </p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500">No tasks to do</p>
//           )}
//           <div className="absolute top-0 -right-3 h-full border-r border-gray-300"></div> {/* Vertical line */}
//         </div>

//         {/* In Progress Column */}
//         <div className="relative">
//           <h2 className="text-xl font-medium mb-4">In Progress ({taskData.inProgress.length})</h2>
//           {taskData.inProgress.length > 0 ? (
//             taskData.inProgress.map((task, index) => (
//               <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
//                 <h3 className="text-lg font-semibold">Order {task['OrdersTable.OrderNumber']}</h3>

//                 {/* Flex container for Start Date */}
//                 <div className="flex mb-2">
//                   <span className="text-gray-500 w-1/3">Start Date</span>
//                   <span className="text-gray-900 w-2/3">
//                     <span className='pr-8'>:</span>{new Date(task.StartDate).toLocaleDateString()}
//                   </span>
//                 </div>

//                 {/* Flex container for End Date */}
//                 <div className="flex mb-2">
//                   <span className="text-gray-500 w-1/3">End Date</span>
//                   <span className="text-gray-900 w-2/3">
//                     <span className='pr-8'>:</span>{new Date(task.EndDate).toLocaleDateString()}
//                   </span>
//                 </div>

//                 {/* Flex container for Status */}
//                 <div className="flex mb-2">
//                   <span className="text-gray-500 w-1/3">Status</span>
//                   <span className="text-violet-800 w-2/3">
//                     <span className='pr-8'>:</span>{task.OrderHistoryStatus || 'In Progress'}
//                   </span>
//                 </div>

//                 {/* Flex container for Comments */}
//                 <div className="flex mb-2">
//                   <span className="text-gray-500 w-1/3">Comments</span>
//                   <span className="text-green-500 w-2/3">
//                     <span className='pr-8'>:</span>{task.Comments}
//                   </span>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500">No tasks in progress</p>
//           )}
//           <div className="absolute top-0 -right-3 h-full border-r border-gray-300"></div> {/* Vertical line */}
//         </div>

//         {/* In Review Column */}
//         <div>
//           <h2 className="text-xl font-medium mb-4">In Review ({taskData.inReview.length})</h2>
//           {taskData.inReview.length > 0 ? (
//             taskData.inReview.map((task, index) => (
//               <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
//                 <h3 className="text-lg font-semibold">Order {task['OrdersTable.OrderNumber']}</h3>

//                 {/* Flex container for Start Date */}
//                 <div className="flex mb-2">
//                   <span className="text-gray-500 w-1/3">Start Date</span>
//                   <span className="text-gray-900 w-2/3">
//                     <span className='pr-8'>:</span>{new Date(task.StartDate).toLocaleDateString()}
//                   </span>
//                 </div>

//                 {/* Flex container for End Date */}
//                 <div className="flex mb-2">
//                   <span className="text-gray-500 w-1/3">End Date</span>
//                   <span className="text-gray-900 w-2/3">
//                     <span className='pr-8'>:</span>{new Date(task.EndDate).toLocaleDateString()}
//                   </span>
//                 </div>

//                 {/* Flex container for Status */}
//                 <div className="flex mb-2">
//                   <span className="text-gray-500 w-1/3">Status</span>
//                   <span className="text-red-500 w-2/3">
//                     <span className='pr-8'>:</span>{task.OrderHistoryStatus || 'In Review'}
//                   </span>
//                 </div>

//                 {/* Flex container for Comments */}
//                 <div className="flex mb-2">
//                   <span className="text-gray-500 w-1/3">Comments</span>
//                   <span className="text-blue-500 w-2/3">
//                     <span className='pr-8'>:</span>{task.Comments}
//                   </span>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500">No tasks in review</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tasks;


import React, { useEffect, useState } from 'react';

const Tasks = () => {
  const [taskData, setTaskData] = useState({ toDo: [], inProgress: [], inReview: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userID, setUserID] = useState('1'); // Default user ID (Admin)

  const userOptions = [
    { id: '3', name: 'Admin' },
    { id: '1', name: 'User 1' },
    { id: '5', name: 'User 2' },

  ];

  const fetchTasks = async (userId) => {
    try {
      const response = await fetch(`https://imly-b2y.onrender.com/api/orderhistory/getusertasks?UserID=${userId}`);
      const data = await response.json();

      const transformedData = {
        toDo: data.filter(task => 
          !task.OrderHistoryStatus || 
          task.OrderHistoryStatus.includes('Quick Quote') || 
          task.OrderHistoryStatus.includes('Initial Design') || 
          task.OrderHistoryStatus.includes('Initial Measurements')
        ),
        inProgress: data.filter(task => 
          task.OrderHistoryStatus && 
          (
            task.OrderHistoryStatus.includes('Revised Design (R1)') || 
            task.OrderHistoryStatus.includes('Revised Design (R2)') || 
            task.OrderHistoryStatus.includes('Revised Design (R#)') || 
            task.OrderHistoryStatus.includes('Final Measurement') || 
            task.OrderHistoryStatus.includes('Signup Document') || 
            task.OrderHistoryStatus.includes('Production') || 
            task.OrderHistoryStatus.includes('PDI') || 
            task.OrderHistoryStatus.includes('Dispatch')
          )
        ),
        inReview: data.filter(task => 
          task.OrderHistoryStatus && 
          (
            task.OrderHistoryStatus.includes('Installation') || 
            task.OrderHistoryStatus.includes('Completion') || 
            task.OrderHistoryStatus.includes('Canceled')
          )
        )
      };
      setTaskData(transformedData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      setError('Failed to fetch tasks'); // Set error message
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks(userID); // Fetch tasks based on the initial userID
  }, [userID]); // Re-fetch when userID changes

  const handleUserChange = (e) => {
    setUserID(e.target.value); // Update userID state with selected user ID
  };

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p className="main-container">{error}</p>; // Apply error class

  return (
    <div className="main-container">
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
          {userOptions.map(user => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* To Do Column */}
        <div className="relative">
          <h2 className="text-xl font-medium mb-4">To Do ({taskData.toDo.length})</h2>
          {taskData.toDo.length > 0 ? (
            taskData.toDo.map((task, index) => (
              <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
                <h3 className="text-lg font-semibold">Order {task['OrdersTable.OrderNumber']}</h3>

                {/* Flex container for Start Date */}
                <div className="flex mb-2">
                  <span className="text-gray-500 w-1/3">Start Date</span>
                  <span className="text-gray-900 w-2/3">
                    <span className='pr-8'>:</span>{new Date(task.StartDate).toLocaleDateString()}
                  </span>
                </div>

                {/* Flex container for End Date */}
                <div className="flex mb-2">
                  <span className="text-gray-500 w-1/3">End Date</span>
                  <span className="text-gray-900 w-2/3">
                    <span className='pr-8'>:</span>{new Date(task.EndDate).toLocaleDateString()}
                  </span>
                </div>

                {/* Flex container for Status */}
                <div className="flex mb-2">
                  <span className="text-gray-500 w-1/3">Status</span>
                  <span className="text-green-400 w-2/3">
                    <span className='pr-8'>:</span>{task.OrderHistoryStatus || 'To Do'}
                  </span>
                </div>

                {/* Flex container for Comments */}
                <div className="flex mb-2">
                  <span className="text-gray-500 w-1/3">Comments</span>
                  <p className="text-orange-500 w-2/3">
                    <span className='pr-8'>:</span>{task.Comments}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No tasks to do</p>
          )}
          <div className="absolute top-0 -right-3 h-full border-r border-gray-300"></div> {/* Vertical line */}
        </div>

        {/* In Progress Column */}
        <div className="relative">
          <h2 className="text-xl font-medium mb-4">In Progress ({taskData.inProgress.length})</h2>
          {taskData.inProgress.length > 0 ? (
            taskData.inProgress.map((task, index) => (
              <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
                <h3 className="text-lg font-semibold">Order {task['OrdersTable.OrderNumber']}</h3>

                {/* Flex container for Start Date */}
                <div className="flex mb-2">
                  <span className="text-gray-500 w-1/3">Start Date</span>
                  <span className="text-gray-900 w-2/3">
                    <span className='pr-8'>:</span>{new Date(task.StartDate).toLocaleDateString()}
                  </span>
                </div>

                {/* Flex container for End Date */}
                <div className="flex mb-2">
                  <span className="text-gray-500 w-1/3">End Date</span>
                  <span className="text-gray-900 w-2/3">
                    <span className='pr-8'>:</span>{new Date(task.EndDate).toLocaleDateString()}
                  </span>
                </div>

                {/* Flex container for Status */}
                <div className="flex mb-2">
                  <span className="text-gray-500 w-1/3">Status</span>
                  <span className="text-violet-800 w-2/3">
                    <span className='pr-8'>:</span>{task.OrderHistoryStatus || 'In Progress'}
                  </span>
                </div>

                {/* Flex container for Comments */}
                <div className="flex mb-2">
                  <span className="text-gray-500 w-1/3">Comments</span>
                  <span className="text-green-500 w-2/3">
                    <span className='pr-8'>:</span>{task.Comments}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No tasks in progress</p>
          )}
          <div className="absolute top-0 -right-3 h-full border-r border-gray-300"></div> {/* Vertical line */}
        </div>

        {/* In Review Column */}
        <div className="relative">
          <h2 className="text-xl font-medium mb-4">In Review ({taskData.inReview.length})</h2>
          {taskData.inReview.length > 0 ? (
            taskData.inReview.map((task, index) => (
              <div className="bg-white p-4 rounded-lg shadow mb-4" key={index}>
                <h3 className="text-lg font-semibold">Order {task['OrdersTable.OrderNumber']}</h3>

                {/* Flex container for Start Date */}
                <div className="flex mb-2">
                  <span className="text-gray-500 w-1/3">Start Date</span>
                  <span className="text-gray-900 w-2/3">
                    <span className='pr-8'>:</span>{new Date(task.StartDate).toLocaleDateString()}
                  </span>
                </div>

                {/* Flex container for End Date */}
                <div className="flex mb-2">
                  <span className="text-gray-500 w-1/3">End Date</span>
                  <span className="text-gray-900 w-2/3">
                    <span className='pr-8'>:</span>{new Date(task.EndDate).toLocaleDateString()}
                  </span>
                </div>

                {/* Flex container for Status */}
                <div className="flex mb-2">
                  <span className="text-gray-500 w-1/3">Status</span>
                  <span className="text-red-500 w-2/3">
                    <span className='pr-8'>:</span>{task.OrderHistoryStatus || 'In Review'}
                  </span>
                </div>

                {/* Flex container for Comments */}
                <div className="flex mb-2">
                  <span className="text-gray-500 w-1/3">Comments</span>
                  <span className="text-blue-500 w-2/3">
                    <span className='pr-8'>:</span>{task.Comments}
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
