const FinancialForm = ({
  onClose,
  financeTimePeriod,
  financePercentage,
  setAmount,
  fund,
  refreshListOfFunds,
}) => {
  const handleDivClick = (e) => {
    onClose();
  };

  const handleInputChange = (e) => {
    setAmount(e.target.value);
  };

  const handleButtonClick = () => {
    fund();
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 text-gray-700 z-50"
      onClick={handleDivClick}
    >
      <div
        className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="md:flex items-center">
          <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
            <p className="text-sm text-gray-700 my-8">
              Investing your hard-earned money is a big decision, and you want
              to ensure that you are putting your trust in a reliable and
              trustworthy financial institution. At our institution, we offer
              you the opportunity to finance your funds and enjoy guaranteed
              returns on your investment for {financeTimePeriod} days. With a
              competitive {financePercentage} interest rate, you can be
              confident that you will maximize your returns and reach your
              financial goals faster. As an investor, we understand that your
              peace of mind and security are crucial, which is why we offer you
              the reassurance of a full refund of your principal in case of
              unexpected circumstances that may require you to withdraw your
              investment before the maturity date. We are confident that our
              investment plan will exceed your expectations, and we look forward
              to helping you achieve your financial goals. So why wait? Finance
              with us today and watch your money grow. Our investment plan is
              the ultimate choice for those looking to maximize their returns
              and reach their financial goals faster. With our unparalleled
              security, peace of mind, and competitive interest rates, investing
              your funds with us is a decision you will never regret.
            </p>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="0.1"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="text-center mt-4 md:flex md:justify-center">
          <button
            onClick={handleButtonClick}
            className="w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gradient-to-r from-blue-500 to-blue-800 text-white rounded-lg font-semibold text-sm my-8 md:mt-0 md:order-1

            "
          >
            Finance Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinancialForm;
