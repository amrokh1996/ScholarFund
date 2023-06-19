import { useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from 'jwt-decode';

export default function Cardprob() {
  const [problems, setProblems] = useState([]);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
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

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("T")[0].split("-");
    return `${year}-${month}-${day}`;
  };

  return (
    <>
      <h1 className="text-3xl text-center text-black">your scholarship</h1>
      <br />
      <hr />
      {problems.length > 0 ? (
        problems.map((problem) => {
          if (problem.user_id === userId) {
            return (
              <div
                key={problem.id}
                className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg"
              >
                <img
                  className="h-48 w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Product Image"
                />
                <div className="p-4">
                  <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                    {problem.program}
                  </h2>
                  <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
                    {problem.problemDescription}
                  </p>
                  <div className="flex items-center">
                    <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                      Raised:
                    </p>
                    <p className="text-base font-medium text-gray-500  dark:text-gray-300">
                      ${problem.raised}
                    </p>
                    <p className="ml-auto text-base font-medium text-green-500">
                      Amount: ${problem.amount}
                    </p>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })
      ) : (
        <p>No problems found.</p>
      )}
      <br /> <br /> <br />
    </>
  );
}