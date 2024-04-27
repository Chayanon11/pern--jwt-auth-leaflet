import axios from "axios";
import { useState } from "react";

const Logout = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogout = async () => {
    try {
      const response = await axios.get("/logout");
      console.log(response.data.message); // Log the success message
      window.location.href = "/login";
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage("Logout failed. Please try again.");
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    }
  };
  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 text-white font-semibold py-2 px-4 rounded-lg">
          Logout
        </button>
        {errorMessage && <div>{errorMessage}</div>}
      </div>
    </>
  );
};

export default Logout;
