import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
// ...
import logo from "../assets/logo.svg";

export default function Dashboard() {
  const [users, setUsers] = useState(0);

  useEffect(() => {
    async function x() {
      const result = await fetch("http://localhost:5000/api/v1/user/total-users", {
        method: "GET",
        mode: "cors",
      });

      const res = await result.text();

      setUsers(res);
    }

    x();
  }, []);

  // ChartJS
  ChartJS.register(ArcElement, Tooltip, Legend);

  // ChartJS Dummy Values
  const values = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
        hoverOffset: 4,
      },
    ],
  };

  // Log Out
  function logOut() {
    sessionStorage.clear();

    window.location = "/login";
  }

  return (
    <div className="flex bg-primary">
      <div className="flex flex-col p-3 shadow w-60 bg-gray-700 text-white min-h-screen h-auto">
        <div className="space-y-3">
          <div className="flex items-center">
            <img src={logo} alt="" className="mx-auto h-10 w-auto" />
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm flex flex-col">
              <div>
                <li className="rounded-sm">
                  <a href="/dashboard" className="flex items-center p-2 space-x-3 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <span> Home </span>
                  </a>
                </li>

                <li className="rounded-sm">
                  <a href="/products" className="flex items-center p-2 space-x-3 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                    <span> Products </span>
                  </a>
                </li>
              </div>

              <div className="mt-auto">
                <li className="rounded-sm ">
                  <button onClick={logOut} className="flex items-center p-2 space-x-3 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="red"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      />
                    </svg>
                    <span className="font-bold text-red-600"> Logout </span>
                  </button>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-12 ml-5">
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
          <div className="w-5/6">
            <div className="w-full px-4 py-5 rounded-lg shadow bg-gray-700 hover:bg-gray-500 flex flex-col justify-evenly">
              <div>
                <div className="mt-1 text-3xl font-semibold text-white text-center">
                  <h1> Total No. of Users </h1>
                  <br />
                  <p className="-mt-8"> {users} </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-5/6">
            <Doughnut data={values} />
          </div>
        </div>
      </div>
    </div>
  );
}
