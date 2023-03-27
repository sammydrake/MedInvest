// Define a React functional component named `Header`
const Header = () => {
  return (
    <div className="relative">
      <img
        src="https://www.healthytomorrow.org/wp-content/uploads/2023/02/laboratory-3827743__480.jpg"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Revolutionizing Medical Investment{" "}
                <span className="text-teal-accent-400">
                  And Investing in Organic Chemicals for Drug Production with
                  Crypto Currency
                </span>
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg text-blue-300">
                We are a medical company that offers investors the opportunity
                to invest with us using cryptocurrency. With the funds raised
                from our investors, we purchase organic chemicals from people
                and use them to produce drugs for treatment. We then sell the
                drugs and use the profits to pay back our investors with their
                capital plus an interest at the end of the investment period.
                Our focus on using organic chemicals allows us to produce drugs
                that are not only effective but also environmentally friendly.
                We are committed to providing our investors with a safe and
                profitable investment opportunity while contributing to the
                betterment of healthcare and the environment.
              </p>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
