import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import jwtDecode from "jwt-decode";
import education from "../assets/images/education.jpg";
import Inputs from "../components/History";
import Helpform from "../components/Helpform";
import { FaUser } from "react-icons/fa";
import axios from "axios";

const DonarProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          return;
        }
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.user_id;

        const response = await fetch(
          `http://localhost:3100/user/getdata/${userId}`
        );
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  const token = localStorage.getItem("token");
  let role = "";
  if (token) {
    const decodedToken = jwtDecode(token);
    role = decodedToken.role;
  }

  const [problems, setProblems] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.user_id;
    setUserId(userId);
    fetchProblems();
  }, []);

  const fetchProblems = async () => {
    try {
      const response = await axios.get("http://localhost:3100/prob/getproblem");
      setProblems(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("An error occurred while fetching problems", error);
      // Handle error state or display error message
    }
  };

  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://cdn.tailwindcss.com" rel="stylesheet" />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div className="absolute top-0 w-full h-full bg-center bg-cover">
            <img
              src={education}
              alt=""
              className="absolute top-0 w-full h-full bg-center bg-cover"
            />
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            />
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <br />
                      <FaUser className="w-32 h-32 rounded-full mx-auto text-gray-500" />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <br />
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <Link
                        to="/EditProfile"
                        className="bg-red-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-6 py-4 rounded-full outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      >
                        Edit Profile
                      </Link>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <br />
                    <Link
                      to="/Home"
                      className="inline-block bg-white  text-black font-black py-2 px-4 rounded flex items-center gap-1 focus:outline-none"
                    >
                      <FiArrowLeft />
                      Back to Home
                    </Link>
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      {problems.length > 0 &&
                        problems.map((problem) => {
                          if (problem.user_id === userId) {
                            return (
                              <div
                                key={problem.id}
                                className="mr-4 p-3 text-center"
                              >
                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                  {problem.raised}
                                </span>
                                <span className="text-sm text-blueGray-400">
                                  Raised
                                </span>
                              </div>
                            );
                          }
                          return null;
                        })}
                      {problems.length > 0 &&
                        problems.map((problem) => {
                          if (problem.user_id === userId) {
                            return (
                              <div
                                key={problem.id}
                                className="lg:mr-4 p-3 text-center"
                              >
                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                  {problem.amount}
                                </span>
                                <span className="text-sm text-blueGray-400">
                                  Your Scholarship
                                </span>
                              </div>
                            );
                          }
                          return null;
                        })}
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {user && user.username}
                  </h3>

                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-envelope mr-2 text-lg text-blueGray-400" />
                    {user && user.email}
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex justify-center">
                    <div className="w-full bg-white p-10">
                      <h1
                        tabIndex={0}
                        role="heading"
                        aria-label="profile information"
                        className="focus:outline-none text-3xl font-bold text-gray-800 mt-12"
                      >
                        Profile info
                      </h1>
                      <div className="mt-8 md:flex md:flex-wrap md:justify-between">
                        <div className="flex flex-col mb-8 md:w-64">
                          <label className="mb-3 text-lg leading-none text-gray-800">
                            First name
                          </label>
                          <p className="bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200">
                            {user && user.firstname}
                          </p>
                        </div>
                        <div className="flex flex-col mb-8 md:w-64">
                          <label className="mb-3 text-lg leading-none text-gray-800">
                            Last name
                          </label>
                          <p className="bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200">
                            {user && user.lastname}
                          </p>
                        </div>
                        <div className="flex flex-col mb-8 md:w-64">
                          <label className="mb-3 text-lg leading-none text-gray-800">
                            Username
                          </label>
                          <p className="bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200">
                            {user && user.username}
                          </p>
                        </div>

                        <div className="flex flex-col mb-8 md:w-64">
                          <label className="mb-3 text-lg leading-none text-gray-800">
                            Email Address
                          </label>
                          <p className="bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200">
                            {user && user.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="relative bg-blueGray-200 pt-8 pb-2 mt-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center"></div>
              </div>
            </div>
          </footer>

          {role === "student" ? <Helpform /> : null}
          {role === "donor" ? <Inputs /> : null}
        </section>
      </main>
    </>
  );
};

export default DonarProfile;
