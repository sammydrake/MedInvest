import React from "react";
import PropTypes from "prop-types";

const ListOfFunds = ({ finances, getFund }) => {
  return (
    <div className="max-w-lg mx-auto my-10 font-sans">
      <h2 className="text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
        Investment Portfolio Summary
      </h2>
      <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2">
        {finances.length > 0 &&
          finances.map((user, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-2"></div>
                </div>
                <div className="text-sm font-medium text-gray-500">
                  {user.daysRemaining} Days Left
                </div>
              </div>
              <div className="mt-4">
                <div className="text-xl font-semibold">{user.etherFunded}</div>
                <div className="text-sm font-medium text-gray-500">
                  Current Interest: {user.etherInterest}%
                </div>
              </div>
              <div className="mt-4">
                {user.isOpen ? (
                  <button
                    onClick={() => getFund(user.financeId)}
                    className="w-full bg-green-500 hover:bg-green-600 py-2 px-4 text-sm font-medium text-white rounded-md"
                  >
                    Withdraw
                  </button>
                ) : (
                  <button
                    onClick={() => getFund(user.financeId)}
                    className="w-full bg-gray-300 hover:bg-gray-400 py-2 px-4 text-sm font-medium text-white rounded-md cursor-default"
                    disabled
                  >
                    Withdrawn
                  </button>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

ListOfFunds.propTypes = {
  finances: PropTypes.arrayOf(
    PropTypes.shape({
      financeId: PropTypes.string.isRequired,
      etherFunded: PropTypes.number.isRequired,
      etherInterest: PropTypes.number.isRequired,
      daysRemaining: PropTypes.number.isRequired,
      isOpen: PropTypes.bool.isRequired,
    })
  ).isRequired,
  getFund: PropTypes.func.isRequired,
};

export default ListOfFunds;
