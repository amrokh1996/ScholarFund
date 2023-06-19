import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
export default function CtaHomepage() {
  return (
    <section style={{ backgroundColor: "#252B3F" }}>
      <svg
        id="visual"
        viewBox="0 0 1950 100"
        width="100%"
        height="20%"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <rect x="0" y="-20" width="1950" height="100" fill=" #252B3F "></rect>
        <path
          d="M0 15L1950 77L1950 101L0 101Z"
          fill="#1A56DB"
          stroke-linecap="round"
          stroke-linejoin="miter"
        ></path>
      </svg>

      <div className="dark:bg-[#1A56DB]">
        <div className="pb-20">
          <div className="mx-auto bg-gradient-to-1 h-96">
            <div className="mx-auto container w-full flex flex-col justify-center items-center">
              <div className="flex justify-center items-center flex-col">
                <Fade zoom>
                  <div className="mt-20">
                    <h2 className="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-white">
                      By the numbers
                    </h2>
                  </div>
                </Fade>
                <div className="mt-6 mx-2 md:mx-0 text-center">
                  <p className="lg:text-lg md:text-base leading-6 text-sm  text-white">
                    5 years, consistent quality and you get results. No matter
                    what
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto container md:-mt-28 -mt-20 flex justify-center items-center">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6 md:gap-y-6">
              <Flip left>
                <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                  <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                    18500+
                  </h2>
                  <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                    DONATIONS
                  </p>
                </div>
              </Flip>
              <Flip left>
                <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                  <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                    540+
                  </h2>
                  <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                    donors
                  </p>
                </div>
              </Flip>
              <Flip left>
                <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                  <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                    100
                  </h2>
                  <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                    Scholarships
                  </p>
                </div>
              </Flip>
              <Flip left>
                <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                  <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                    25+
                  </h2>
                  <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                    Awards Won
                  </p>
                </div>
              </Flip>
            </div>
          </div>
        </div>
      </div>

      <svg
        id="visual"
        viewBox="0 0 1950 100"
        width="100%"
        height="20%"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <rect x="0" y="50" width="1950" height="200" fill="#252B3F"></rect>
        <path
          d="M0 83L1950 21L1950 0L0 0Z"
          fill="#1A56DB"
          stroke-linecap="round"
          stroke-linejoin="miter"
        ></path>
      </svg>
    </section>
  );
}
