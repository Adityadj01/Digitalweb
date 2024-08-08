/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import {IoCloseOutline } from 'react-icons/io5'

const Popup = ({orderPopup, handleOrderPopup}) => {
  return (
    <>
    {
      orderPopup && (
        <div>
      <div className='h-screen w-screen fixed top-0 left-0 z-50 bg-black/50 backdrop-blur-sm'>
        <div className='w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-md'>
          {/* Header Section */}
          <div className='flex justify-between items-center '> 
            <h1>Order Form</h1>
            <IoCloseOutline
            onClick={handleOrderPopup}
            className='text-2xl cursor-pointer'/>
          </div>
          {/* Form Section */}
        </div>
      </div>
    </div>
      )
    }
    </>
  ) 
}

export default Popup

Popup.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired,
  orderPopup: PropTypes.bool.isRequired,
};