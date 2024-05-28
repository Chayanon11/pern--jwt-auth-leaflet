import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `https://pern-passport-auth-leaflet-r13o.vercel.app/register`,
        {
          username: username,
          password: password,
        }
      );

      setUsername("");
      setPassword("");
      setErrorMessage("");
      setAlertMessage(response.data.message);

      // Redirect to login page after successful registration
      window.location.href = "/login";
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    }
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="max-w-screen-xl mx-auto py-10">
          {alertMessage && (
            <div className="text-green-500 text-sm mb-3">
              {alertMessage}
              <button onClick={closeAlert} className="ml-2">
                &times;
              </button>
            </div>
          )}
          <h1 className="text-center text-2xl font-extrabold">Register page</h1>
          <hr className="my-4" />
          <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
            {errorMessage && (
              <div className="text-red-500 text-sm mb-3">{errorMessage}</div>
            )}
            <div className="mb-5">
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900">
                Your username
              </label>
              <input
                name="username"
                type="username"
                id="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900">
                Your password
              </label>
              <input
                name="password"
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
