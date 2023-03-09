import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

export default function LogIn() {
  // Variables
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [mes, setMes] = useState("");

  const token = sessionStorage.getItem("user");
  useEffect(() => {
    if (token) {
      window.location = "/dashboard";
    }
  }, [token]);

  // Handle Change
  function handleChange(event) {
    setInputs((values) => ({ ...values, [event.target.name]: event.target.value }));
  }

  // Handle Submit
  function handleSubmit(event) {
    event.preventDefault();

    send();
  }

  // Post Data
  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let res = await response.json();

    return res;
  }

  // Check Input
  const checkIt = (it, len) => {
    if (it !== "") {
      if (it.length < len) {
        return true;
      } else {
        setMes("Lengthy Input!");
        return false;
      }
    } else {
      setMes("Empty Input Field!");
      return false;
    }
  };

  // Send
  async function send() {
    if (checkIt(inputs.email, 420) && checkIt(inputs.password, 100)) {
      setMes("");

      let result = await postData("http://localhost:5000/api/v1/user/signin", inputs);

      if (result?.errors?.msg) {
        setMes(result.errors.msg);

        return;
      }

      sessionStorage.setItem("user", result.token);
      window.location = "/dashboard";
    }
  }

  return (
    <section className="h-screen bg-primary">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex items-center mb-6 text-2xl font-semibold  text-white">
          <img src={logo} className="mx-auto h-12 w-auto" alt="logo" />
        </div>
        <div className="w-full ounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white"> LogIn </h1>
            <form action="#" method="POST" onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <p className="p-3 text-white w-full text-center"> {mes ? mes : <br />} </p>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium  text-white">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  value={inputs.email}
                  onChange={handleChange}
                  autoFocus
                  required
                  className=" border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="*Email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium  text-white">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  value={inputs.password}
                  onChange={handleChange}
                  required
                  className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="*Password"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 border border-white"
                >
                  Log In
                </button>
              </div>

              <p className="text-sm font-light  text-gray-400 flex justify-center">Don't have an account?</p>
              <p className="text-sm font-light  text-gray-400 flex justify-center">
                <a href="/signup" className="font-medium text-primary-600 hover:underline text-primary-500">
                  Create an Account
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
