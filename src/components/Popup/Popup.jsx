/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import PropTypes from "prop-types";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, handleOrderPopup }) => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    handleOrderPopup();
  };

  return (
    <>
      {orderPopup && (
        <div>
          <div className="h-screen w-screen fixed top-0 left-0 z-50 bg-black/50 backdrop-blur-sm">
            <div className="w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-md">
              {/* Header Section */}
              <div className="flex justify-between items-center ">
                <h1>Order Form</h1>
                <IoCloseOutline
                  onClick={handleOrderPopup}
                  className="text-2xl cursor-pointer"
                />
              </div>
              {/* Form Section */}
              <div className="mt-4">
                <form>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleFormChange}
                    className="form-input"
                  />
                  <div className="relative">
                    <input
                      type="text"
                      name="gender"
                      placeholder="Gender"
                      onChange={handleFormChange}
                      className="form-input cursor-pointer"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      onChange={handleFormChange}
                      className="form-input"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      onChange={handleFormChange}
                      className="form-input"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="address"
                      placeholder="Address"
                      onChange={handleFormChange}
                      className="form-input"
                    />
                  </div>
                  <button
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleSubmit}
                  >
                    Order Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;

Popup.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired,
  orderPopup: PropTypes.bool.isRequired,
};
