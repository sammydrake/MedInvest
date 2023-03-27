const Hero = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">
            What We Offer
            <br className="hidden md:block" />
            As A Company
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
        <p className="text-gray-700 lg:text-sm lg:max-w-md">
          "Our company, MedInvest, is a leading medical chemical supplier that
          provides high-quality chemicals to pharmaceutical companies to help
          them produce safe and effective drugs. We work with a network of
          trusted suppliers to source the best raw materials, which we then use
          to create our proprietary blends of medical chemicals. Our business
          model is unique in that we rely on investments from interested parties
          to purchase these raw materials. These funds are then used to produce
          our medical chemicals, which we then sell to pharmaceutical companies
          at competitive prices. The profits we make from these sales are then
          used to pay back our investors, making MedInvest a mutually beneficial
          investment opportunity."
        </p>
      </div>
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://consumer.healthday.com/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMzYzMzI2Ni9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTczMDMwMDExOH0.iOzgFtQQSatJTJ831HlZyxt6FVl0KwreYcLFz-Z9qhY/image.jpg?width=1245&height=700&quality=85&coordinates=0%2C74%2C0%2C74"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
                Our company is committed to using only the highest quality
                medical chemicals to produce drugs that are safe and effective
                for our customers. With your investment, we can continue to
                source the best materials and produce top-tier products that
                meet the needs of patients around the world.
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDr6ehWQgIUDMz747wZHPB-SHh1ThQL18ZigRkaemSQ00e2NJvLJHoR_3_KNNyW49O-Y&usqp=CAU"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
                As an investor in our medical company, you can be confident that
                your funds are being used to create products that have a
                positive impact on people's lives. Our drugs have been proven to
                treat a range of conditions, and we are constantly innovating to
                develop new therapies that improve patient outcomes.
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://assets.theedgemarkets.com/citiid_cambridge_institute_of_therapeutic_immunology_and_infectious_disease_lab_covid_19_patient_blood_sample_20220809162237_bloomberg.jpg?6G8yfzp476URTXX5hkdWQE3Aj3ZqMzny"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
                Our business model is designed to benefit both our customers and
                our investors. By using funds from investors to purchase medical
                chemicals and produce drugs, we are able to generate revenue
                that is reinvested into the company and used to pay back our
                investors with interest. It's a win-win for everyone involved.
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://static.wixstatic.com/media/8010cf_55a82ca4efb54fbd9144a4696b3fdffc~mv2.jpg/v1/crop/x_80,y_0,w_1418,h_1050/fill/w_434,h_322,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8010cf_55a82ca4efb54fbd9144a4696b3fdffc~mv2.jpg"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
                Our team is comprised of experienced professionals with a deep
                understanding of the pharmaceutical industry. With their
                expertise, we are able to identify and capitalize on emerging
                market opportunities, ensuring our investors see a significant
                return on their investment.
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="text-center"></div>
    </div>
  );
};

export default Hero;
