import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

export default function SignUp() {
  // Variables
  const [inputs, setInputs] = useState({ username: "", email: "", password: "", repassword: "" });
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
    if (
      checkIt(inputs.username, 100) &&
      checkIt(inputs.email, 420) &&
      checkIt(inputs.password, 100) &&
      checkIt(inputs.repassword, 100)
    ) {
      setMes("");

      if (inputs.password !== inputs.repassword) {
        setMes("Passwords Does Not Match");

        return;
      }

      let result = await postData("http://localhost:5000/api/v1/user/signup", {
        username: inputs.username,
        email: inputs.email,
        password: inputs.repassword,
      });

      if (result?.errors.msg) {
        setMes(result.errors.msg);

        return;
      }

      window.location("/login");
    }
  }

  return (
    <>
      <section className="h-screen bg-primary">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="flex items-center mb-6 text-2xl font-semibold text-white">
            <img src={logo} className="mx-auto h-12 w-auto" alt="logo" />
          </div>
          <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                {" "}
                Create Account{" "}
              </h1>
              <form action="#" method="POST" onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <p className="p-3 text-white w-full text-center"> {mes ? mes : <br />} </p>

                <div>
                  <label htmlFor="username" className="block mb-2 text-sm font-medium  text-white">
                    {" "}
                    Your Username{" "}
                  </label>
                  <input
                    type="username"
                    name="username"
                    value={inputs.username}
                    onChange={handleChange}
                    placeholder="User123"
                    autoFocus
                    required
                    className="border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium  text-white">
                    {" "}
                    Your Email{" "}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={inputs.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    required
                    className="border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium  text-white">
                    {" "}
                    Password{" "}
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={inputs.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    className="border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium  text-white">
                    {" "}
                    Confirm Password{" "}
                  </label>
                  <input
                    type="password"
                    name="repassword"
                    value={inputs.repassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    className=" border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button
                  type="button"
                  onClick={send}
                  className="w-full text-gray-400 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 border border-white"
                >
                  {" "}
                  Create an account{" "}
                </button>
                <p className="text-sm font-light  text-gray-400 flex justify-center">Already have an account?</p>
                <p className="text-sm font-light  text-gray-400 flex justify-center">
                  <a href="/login" className="font-medium text-primary-600 hover:underline text-primary-500">
                    {" "}
                    Login Here{" "}
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
