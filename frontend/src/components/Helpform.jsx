import { useEffect, useState } from "react";
import Cardprob from "./Cardprob";
import axios from "axios";
import jwtDecode from "jwt-decode";
export default function Helpform() {
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.user_id;
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [city, setCity] = useState("");
  const [gpa, setGpa] = useState("");
  const [program, setProgram] = useState("");
  const [problemDescription, setProblemDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [images, setImages] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formSubmitted) {
      return;
    }

    const formData = new FormData();
    formData.append("fullname", fullname);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("dateOfBirth", dateOfBirth);
    formData.append("city", city);
    formData.append("gpa", gpa);
    formData.append("amount", amount);
    formData.append("program", program);
    formData.append("problemDescription", problemDescription);
    formData.append("user_id", User.user_id);

    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    try {
      await axios.post("http://localhost:3100/prob/addproblem", formData);
      const submittedId = userId; // Assuming the response contains the submitted ID
      alert("Problem submitted successfully");

      // Save submittedId to localStorage
      const submittedIdsString = localStorage.getItem("submittedIds");
      const submittedIds = submittedIdsString
        ? JSON.parse(submittedIdsString)
        : [];

      // Add the new submittedId to the array
      submittedIds.push(submittedId);

      // Save the updated array to localStorage
      localStorage.setItem("submittedIds", JSON.stringify(submittedIds));

      setFullname("");
      setEmail("");
      setPhoneNumber("");
      setDateOfBirth("");
      setCity("");
      setGpa("");
      setProgram("");
      setProblemDescription("");
      setAmount("");
      setImages([]);
      setFormSubmitted(true);
    } catch (error) {
      console.error("An error occurred while submitting the problem", error);
      alert("An error occurred while submitting the problem");
    }
  };

  const [User, setUser] = useState();

  console.log(User);
  useEffect(() => {
    const token = localStorage.getItem("token") || false;
    fetchUser(token);
  }, []);

  async function fetchUser(token) {
    try {
      const response = await axios
        .get("http://localhost:3100/user/checkToken", {
          headers: {
            authorization: `barear ${token}`,
          },
        })
        .then((response) => {
          setUser(response?.data);
        });
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  const handleFileChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages(selectedImages);
  };

  // Check if form has been submitted and userId is present in localStorage
  const submittedIdsString = localStorage.getItem("submittedIds");
  const submittedIds = submittedIdsString ? JSON.parse(submittedIdsString) : [];

  if (submittedIds.includes(userId)) {
    return (
      <section className="py-1 bg-blueGray-50">
        <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <Cardprob submittedId={userId} />
        </div>
      </section>
    );
  } else {
    return (
      <>
        <section className="py-1 bg-blueGray-50">
          <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
              <div
                className="rounded-t bg-red-100 mb-0 px-6 py-6"
                style={{ backgroundColor: "#cf1a45" }}
              >
                <div className="text-center flex justify-between">
                  <h6 className="text-black-700 text-xl font-bold">
                    Add your problem
                  </h6>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={handleSubmit}>
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Personal Information:
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="fullname"
                        >
                          Full name
                        </label>
                        <input
                          type="text"
                          id="fullname"
                          value={fullname}
                          onChange={(e) => setFullname(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="FULL NAME"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="email"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="jesse@example.com"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="phoneNumber"
                        >
                          Phone number
                        </label>
                        <input
                          type="tel"
                          id="phoneNumber"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="dateOfBirth"
                        >
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          id="dateOfBirth"
                          value={dateOfBirth}
                          onChange={(e) => setDateOfBirth(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="1998-01-01"
                        />
                      </div>
                    </div>
                  </div>

                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Educational Background:
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-4/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="gpa"
                        >
                          GPA:
                        </label>
                        <input
                          type="number"
                          id="gpa"
                          value={gpa}
                          onChange={(e) => setGpa(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Enter your GPA"
                        />
                      </div>
                    </div>

                    <div className="w-full lg:w-4/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="program"
                        >
                          Which program:
                        </label>
                        <select
                          id="program"
                          value={program}
                          onChange={(e) => setProgram(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue="Engineering Management"
                        >
                          <option value="Engineering Management">
                            Engineering Management
                          </option>
                          <option value="Computer Science">
                            Computer Science
                          </option>
                          <option value="International Healthcare Management">
                            International Healthcare Management
                          </option>
                          <option value="Human Resource Management">
                            Human Resource Management
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="multiple_files"
                      >
                        Upload Letters of Recommendation , Cv , passport
                        (images) :
                      </label>
                      <input
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:focus:border-gray-500 dark:focus:shadow-outline-gray form-input"
                        type="file"
                        id="multiple_files"
                        name="multiple_files"
                        multiple
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>

                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Problem Details:
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-4/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="gpa"
                        >
                          The amount required :
                        </label>
                        <input
                          type="number"
                          id="amount"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="the Amount"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-12/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="problemDescription"
                        >
                          Describe your problem
                        </label>
                        <textarea
                          id="problemDescription"
                          rows="4"
                          cols="80"
                          value={problemDescription}
                          onChange={(e) =>
                            setProblemDescription(e.target.value)
                          }
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          defaultValue=""
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="submit"
                      style={{ transition: "all .15s ease" }}
                    >
                      Submit Problem
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <Cardprob />
        </section>
      </>
    );
  }
}
  