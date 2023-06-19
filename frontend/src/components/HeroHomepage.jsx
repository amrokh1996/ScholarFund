// import React from "react";
// import { Link } from "react-router-dom";

// export default function HeroHomepage() {
//   return (
//     <section
//       className="dark:bg-gray-900"
//       style={{ backgroundColor: "#EAEAF3", height: "32rem" }}
//     >
//       <div className="relative grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
//         <div className="mr-auto place-self-center lg:col-span-7">
//           <p className="max-w-2xl font-bold text-red-500 text-lg text-xl dark:text-gray-400">
//             <b>This is our dream</b>
//           </p>
//           <h4 className="max-w-xl mb-4 text-xl font-extrabold tracking-tight leading-none lg:text-6xl sm:text-4xl">
//             We can only
//             <br />
//             make it <span className="text-blue-700">together</span>
//           </h4>
//           <p className="max-w-xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl sm:text-2xl dark:text-gray-400">
//             <small>
//               Whether it’s health care, the economy, education, gun reform,
//               equal pay, voting rights, national security, or the climate
//               crisis, We are tackling these issues and others every day.
//             </small>
//           </p>
//         </div>
//         <div className="relative lg:col-span-5">
//           <img
//             src="https://earl.sinclair-theme.com/wp-content/uploads/sites/2/2021/03/hero-earl-1.png"
//             alt="mockup"
//             className="transition-all duration-500 transform hover:scale-105"
//           />
//           <div className="absolute bottom-0 left-0 right-0">
//             <div
//               className="flex justify-between items-center p-5 lg:w-full sm:w-full"
//               style={{ backgroundColor: "#1A56DB", height: "6.5rem" }}
//             >
//               <div className="flex flex-col justify-center">
//                 <p className="text-white text-xl">
//                   <b>Let's Open Doors And Shape A Better Tomorrow</b>
//                 </p>
//               </div>
//               <div>
//                 <Link
//                   to="Checkout"
//                   className="inline-flex bg-white items-center justify-center px-7 py-2 text-bold font-medium text-center text-blue-600 border border-gray-300 rounded-sm hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
//                 >
//                   Donate Now
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

export default function HeroHomepage() {
  return (
    <section
      className="dark:bg-gray-900"
      style={{ backgroundColor: "#EAEAF3", height: "32rem" }}
    >
      <div className="relative grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <Fade left>
            <p className="max-w-2xl font-bold text-blue-500 text-lg text-xl dark:text-gray-400">
              <b>This is our dream</b>
            </p>
          </Fade>
          <Fade zoom>
            <h4 className="max-w-xl mb-4 text-xl font-extrabold tracking-tight leading-none lg:text-6xl sm:text-4xl">
              We can only
              <br />
              make it <span className="text-blue-700">together</span>
            </h4>
          </Fade>
          <Fade right>
            <p className="max-w-xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl sm:text-2xl dark:text-gray-400">
              <small>
                Whether it’s health care, the economy, education, gun reform,
                equal pay, voting rights, national security, or the climate
                crisis, We are tackling these issues and others every day.
              </small>
            </p>
          </Fade>
        </div>
        <Flip left>
          <div className="relative lg:col-span-5">
            <img
              src="https://earl.sinclair-theme.com/wp-content/uploads/sites/2/2021/03/hero-earl-1.png"
              alt="mockup"
              className="transition-all duration-500 transform hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0">
              <div className="flex justify-between items-center p-5 lg:w-full sm:w-full rounded-2xl  bg-blue-600">
                <div className="flex flex-col justify-center">
                  <p className="text-white text-xl">
                    <b>It is urgent to move ahead together</b>
                  </p>
                </div>
                <div>
                  <Link
                    to="Studants"
                    className="inline-flex  bg-white items-center justify-center px-7 py-2 text-2xl text-bold font-medium text-center text-blue-600 border border-gray-300 rounded-2xl hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 transition-all duration-300"
                  >
                    Donate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Flip>
      </div>
    </section>
  );
}