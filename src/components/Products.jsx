import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import logo from "../assets/logo.svg";
// import Loading from "./Loading";

export default function Products() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  // const [param, setParam] = useState("");

  function cardMapper(x, y) {
    return <Card key={y} name={x.medicineName} img={x.medicineImage} link={x.detailsUrl} />;
  }

  // Log Out
  function logOut() {
    sessionStorage.clear();

    window.location = "/login";
  }
  const options = {
    method: "GET",
    url: `https://${process.env.REACT_APP_HOST}`,
    params: { medicineName: "prolyte" },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_HOST,
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
        setSearch(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex bg-primary">
      <div className="flex flex-col p-3 shadow w-60 bg-gray-700 text-white min-h-screen h-auto">
        <div className="space-y-3">
          <div className="flex items-center">
            <img src={logo} alt="" className="mx-auto h-10 w-auto" />
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
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

              <div>
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

      <div className="flex flex-col mx-auto mt-12 ">
        <div className="flex justify-center justify-items-center mb-10">
          <input
            type="text"
            name="name"
            onChange={(e) => {
              setSearch(data.filter((d) => d.medicineName.includes(e.target.value)));
            }}
            placeholder="Search"
            maxLength={100}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="flex justify-center justify-items-center mb-10">
          {/* <input
            type="text"
            onChange={(e) => {
              setParam(e.target.value);
            }}
            placeholder="Find a medicine"
            maxLength={100}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />

          <button
            class="ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={SearchHandler}
          >
            Search
          </button> */}
          <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">{data.length > 0 && search?.map(cardMapper)}</div>
        </div>
      </div>
    </div>
  );
}
