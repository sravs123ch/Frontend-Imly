// import { useState } from "react";
// import Logo from '../../assests/Images/logo.jpg'
// import { useNavigate } from "react-router-dom";

// const Login = () =>{
//     const navigate = useNavigate();
//     const [userName, setUserName] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = (e) =>{
//         e.preventDefault();
//         if(userName === "admin" && password ==="admin123"){
//           navigate("dashboard")
//         }
//     }
//     return(
//         <>
//         <div className="flex min-h-full flex-1">
//         <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
//           <div className="mx-auto w-full max-w-sm lg:w-96">
//             <div>
//             <img
//   alt="Your Company"
//   src={Logo}
//   className="h-20 w-auto"
// />

//               <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900 ">
//                Admin Login
//               </h2>
//             </div>

//             <div className="mt-10">
//               <div>
//                 <form className="space-y-6">
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                       User Name
//                     </label>
//                     <div className="mt-2">
//                       <input
//                         id="username"
//                         name="username"
//                         type="text"
//                         required
//                         onChange={(e)=>setUserName(e.target.value)}
//                         className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                       Password
//                     </label>
//                     <div className="mt-2">
//                       <input
//                         id="password"
//                         name="password"
//                         type="password"
//                         required
//                         onChange={(e)=>setPassword(e.target.value)}
//                         className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
//                       />
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center">
//                       <input
//                         id="remember-me"
//                         name="remember-me"
//                         type="checkbox"
//                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                       />
//                       <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-700">
//                         Remember me
//                       </label>
//                     </div>

//                     <div className="text-sm leading-6">
                      
//                     </div>
//                   </div>

//                   <div>
//                     <button
//                       type="submit"
//                       className="flex w-full justify-center rounded-md bg-red-500 hover:bg-red-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                       onClick={(e)=>handleLogin(e)}
//                     >
//                       Sign in
//                     </button>
//                   </div>
//                 </form>
//               </div>

              
//             </div>
//           </div>
//         </div>
//         <div className="relative hidden w-0 flex-1 lg:block h-screen">
//           <img
//             alt=""
//             src="https://images.pexels.com/photos/5864245/pexels-photo-5864245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//             className="absolute inset-0 h-full w-full object-cover"
//           />
//         </div>
//       </div>
//         </>
//     )
// }
// export default Login;


// import { useState } from "react";
// import Logo from "../../assests/Images/imly-logo-new.jpg";
// import image from "../../assests/Images/imly-two.png"
// import { useNavigate } from "react-router-dom";
 
// const Login = () =>{
//     const navigate = useNavigate();
//     const [userName, setUserName] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
 
//     const handleLogin = (e) =>{
//         e.preventDefault();
//         if(userName === "admin" && password ==="admin123"){
//           navigate("/dashboard");
//           setError('');
//         }else{
//           setError('Enter Valid Credentials');
//         }
//     }
//     return(
//         <>
//         <div className="flex min-h-full p-0 m-0 flex-1 bg-white">
//         <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
//           <div className="mx-auto w-full max-w-sm lg:w-96">
//             <div>
//               <img
//                 alt="Your Company"
//                 src={Logo}
//                 className="h-20 w-auto"
//               />
//               <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
//                Admin Login
//               </h2>
//             </div>
 
//             <div className="mt-10">
//               <div>
//                 <form className="space-y-6">
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                       User Name
//                     </label>
//                     <div className="mt-2">
//                       <input
//                         id="username"
//                         name="username"
//                         type="text"
//                         required
//                         onChange={(e)=>setUserName(e.target.value)}
//                         className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
//                       />
//                     </div>
//                   </div>
 
//                   <div>
//                     <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                       Password
//                     </label>
//                     <div className="mt-2">
//                       <input
//                         id="password"
//                         name="password"
//                         type="password"
//                         required
//                         onChange={(e)=>setPassword(e.target.value)}
//                         className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
//                       />
//                     </div>
//                   </div>
 
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center">
//                       <input
//                         id="remember-me"
//                         name="remember-me"
//                         type="checkbox"
//                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 pl-4"
//                       />
//                       <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-700">
//                         Remember me
//                       </label>
//                     </div>
 
//                     <div className="text-sm leading-6">
                     
//                     </div>
//                   </div>
 
//                   <div>
//                     <button
//                       type="submit"
//                       className="flex w-full justify-center rounded-md bg-custom-darkblue hover:bg-custom-lightblue hover:text-gray-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                       onClick={(e)=>handleLogin(e)}
//                     >
//                       Sign in
//                     </button>
//                     {error && <p className="p-2 text-red-500" >{error}</p>}
//                   </div>
//                 </form>
//               </div>
 
             
//             </div>
//           </div>
//         </div>
//         <div className="relative hidden w-0 flex-1 lg:block h-screen">
//           <img
//             alt=""
//             src={image}
//             className="absolute inset-0 h-full w-full object-cover"
//           />
//         </div>
//       </div>
//         </>
//     )
// }
// export default Login;

import { useState } from "react";
import Logo from "../../assests/Images/imly-logo-new.jpg";
import image from "../../assests/Images/imly-two.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import {jwtDecode} from "jwt-decode";
import {LOGIN} from "../../Constants/apiRoutes";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  // Inside handleLogin
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        // "https://imlystudios-backend-mqg4.onrender.com/api/auth/login",
        LOGIN,
         {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Email: userName, Password: password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
        const { token } = data;

        // Decode the JWT token
        const decodedToken = jwtDecode(token);
        const roleID = decodedToken.RoleID;

        // Set user role and token
        login(token, roleID); // Adjust this based on your auth context

        // Redirect based on role or other criteria
        navigate("/dashboard");
      } else {
        console.error("Login failed:", data.message);
        setError(data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred during login");
    }
  };

  return (
    <>
      <div className="flex min-h-full p-0 m-0 flex-1 bg-white">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img alt="Your Company" src={Logo} className="h-20 w-auto" />
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Admin Login
              </h2>
            </div>

            <div className="mt-10">
              <div>
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      User Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="username"
                        name="username"
                        type="text"
                        required
                        onChange={(e) => setUserName(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 pl-4"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-3 block text-sm leading-6 text-gray-700"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm leading-6"></div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-custom-darkblue hover:bg-custom-lightblue hover:text-gray-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={(e) => handleLogin(e)}
                    >
                      Sign in
                    </button>
                    {error && <p className="p-2 text-red-500">{error}</p>}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block h-screen">
          <img
            alt=""
            src={image}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  );
};
export default Login;