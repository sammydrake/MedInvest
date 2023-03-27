import React from "react";
import PropTypes from "prop-types";

const FinancialPlan = ({ onClick, plan, duration, desc }) => {
  return (
    <div className="relative text-center">
      <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24"></div>
      <h2 className="mb-2 text-2xl font-bold">{plan}</h2>
      <h3 className="mb-2 text-2xl font-medium">{duration}</h3>
      <p className="max-w-md mb-3 text-base text-gray-900 sm:mx-auto">{desc}</p>

      <button
        onClick={onClick}
        className="inline-flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Finance Here
      </button>

      <div className="absolute top-0 right-0 h-24 lg:-mr-8 flex items-center justify-center">
        <svg
          className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        ></svg>
      </div>
    </div>
  );
};

FinancialPlan.propTypes = {
  onClick: PropTypes.func.isRequired,
  plan: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default FinancialPlan;
