import CardStudent from "../components/CardStudent";

export default function Students() {
  return (
    <>
      <div className="overflow-y-hidden">
        <div className="xl:mx-auto xl:container  xl:px-20 md:px-6 px-4 py-12">
          <div className="lg:flex items-center justify-center lg:space-x-12 2xl:space-x-6">
            <div className>
              <p className="lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
                At ScholarFund,
              </p>
              <p className="text-lg leading-7 text-gray-600 mt-4 xl:w-7/12 w-full">
              ScholarFund strives to alleviate challenges and fuel transformative education for students. Funding opportunities
              </p>
              <div className="lg:hidden lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="ongoing meeting"
                  className="w-full obejct-fit object-center object-fill h-full"
                />
              </div>
              <div className="mt-6 md:mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:mt-6 2xl:mt-12">
                <div className="flex items-center">
                  <div className="w-16 h-16 relative">
                    <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg1.svg"
                        alt="clock"
                      />
                    </div>
                  </div>
                  <div className="flex items-start flex-col ml-6 pt-8">
                    <h2 className="text-lg font-semibold leading-4 text-gray-800">
                      Time Prompt
                    </h2>
                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                      Whether article spirits new her covered.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 relative">
                    <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg2.svg"
                        alt="Friendly"
                      />
                    </div>
                  </div>
                  <div className="flex items-start flex-col ml-6 pt-8">
                    <h2 className="text-lg font-semibold leading-4 text-gray-800">
                      User Friendly
                    </h2>
                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                      Whether article spirits new her covered.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 relative">
                    <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg3.svg"
                        alt="Creative"
                      />
                    </div>
                  </div>
                  <div className="flex items-start flex-col ml-6 pt-8">
                    <h2 className="text-lg font-semibold leading-4 text-gray-800">
                      Creative Ideas
                    </h2>
                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                      Whether article spirits new her covered.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 relative">
                    <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg4.svg"
                        alt="Achievments"
                      />
                    </div>
                  </div>
                  <div className="flex items-start flex-col ml-6 pt-8">
                    <h2 className="text-lg font-semibold leading-4 text-gray-800">
                      Achievments
                    </h2>
                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                      Whether article spirits new her covered.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="ongoing meeting"
                className="w-full obejct-fit object-center object-fill h-full rounded-lg mt-8"
              />
            </div>
          </div>
        </div>
      </div>
      <CardStudent />
    </>
  );
}
