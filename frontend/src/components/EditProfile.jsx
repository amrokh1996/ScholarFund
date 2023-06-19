import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

import axios from "axios";

const EditProfile = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [images, setImages] = useState([]);

  const handleClick = () => {
    navigate("/DonarProfile");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.user_id;

      // Create a FormData object
      const formData = new FormData();
      formData.append("email", email);
      formData.append("username", username);
      formData.append("firstname", firstName);
      formData.append("lastname", lastName);
      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }

      // Convert formData to JSON string
      const formDataJson = JSON.stringify(Object.fromEntries(formData));

      // Make an HTTP POST request to the server
      const response = await axios.post(
        `http://localhost:3100/user/update/${userId}`,
        formDataJson,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle the response from the server
      console.log(response.data); // You can do something with the response if needed

      // Redirect the user to the desired page
      navigate("/DonarProfile");
    } catch (error) {
      console.error(error);
      // Handle any errors that occurred during the request
    }
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="xl:w-10/12 w-full px-8">
          <div className="bg-blue-800 py-12 flex flex-wrap items-center justify-center shadow">
            <button
              className="w-52 h-16 relative md:mt-0 mt-4"
              onClick={handleClick}
            >
              <img
                src="https://i.ibb.co/DwNs7zG/Steps.png"
                alt="step1"
                className="w-full h-full"
              />
              <div className="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                <p className="w-full text-sm font-large leading-4 text-white">
                  Back To Profile
                </p>
              </div>
            </button>
            <div className="w-52 h-16 relative md:mt-0 mt-4">
              <img
                src="https://i.ibb.co/wNZ4nzy/Steps2.png"
                alt="step2"
                className="w-full h-full"
              />
              <div className="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                <p className="w-full text-sm font-large leading-4 text-indigo-800">
                  Edit Your Information
                </p>
              </div>
            </div>
          </div>
          <div className="xl:px-24">
            <form onSubmit={handleSubmit}>
              <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
                <div className="w-80">
                  <div className="flex items-center">
                    <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">
                      Personal Information
                    </h1>
                  </div>
                  <p className="mt-4 text-sm leading-5 text-gray-600">
                    Information about the section could go here and a brief
                    description of how this might be used.
                  </p>
                </div>
                <div>
                  <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                    <div className="md:w-64">
                      <label
                        className="text-sm leading-none text-gray-800"
                        htmlFor="firstName"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        placeholder=""
                      />
                    </div>
                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label
                        className="text-sm leading-none text-gray-800"
                        htmlFor="lastName"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="md:flex items-center lg:ml-24 mt-8">
                    <div className="md:w-64">
                      <label
                        className="text-sm leading-none text-gray-800"
                        htmlFor="emailAddress"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        id="emailAddress"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        placeholder=""
                      />
                    </div>
                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label
                        className="text-sm leading-none text-gray-800"
                        htmlFor="username"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 lg:flex justify-between border-gray-200 pb-16">
                <div className="w-80"></div>

                <div className="flex justify-center border-b">
                  <button
                    className="bg-red-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-6 py-4 rounded-full outline-none focus:outline-none sm:mr-2 mb-5 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleClick}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-green-500 active:bg-green-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-6 py-4 rounded-full outline-none focus:outline-none sm:mr-2 mb-5 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
