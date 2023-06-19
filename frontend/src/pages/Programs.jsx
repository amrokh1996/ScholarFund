import React, { useRef } from 'react'
import { FaArrowDown } from 'react-icons/fa';
import OurProgramsCards from "../components/OurProgramsCards";
import AboutPrograms from "../components/AboutPrograms";
import { Link } from 'react-router-dom';
// import { programsData } from "../assets/data";


const Programs = () => {
    const programsRef = useRef(null);

    const scrollToPrograms = () => {
        if (programsRef.current) {
            window.scrollTo({
                top: programsRef.current.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            <div className="relative w-full overflow-hidden">
                <div className="min-h-screen flex dark:from-gray-900 bg-gradient-to-b from-white to-blue-50">
                    <div className="container m-auto px-6 py-20 md:pb-0 md:pt-40 md:px-12 lg:py-0 lg:px-10">
                        <div className="flex flex-wrap gap-12">
                            <div className="lg:w-6/12 lg:pt-32 lg:pb-20">
                                <div className="space-y-8 mt-8 lg:-mr-24 xl:-mr-0">
                                    <h1 className="text-4xl text-gray-800 dark:text-white font-bold md:text-5xl lg:leading-tight">
                                        Empowering Minds, Transforming Lives
                                    </h1>
                                    <p className="text-lg text-gray-600 dark:text-gray-300">
                                        Igniting the Spark of Knowledge and Creating Opportunities for a Brighter Future
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                    
                                        <button
                                            type="button"
                                            title="Start buying"
                                            className="w-full py-3 px-6 rounded-xl text-center transition dark:active:bg-blue-900 dark:focus:bg-gray-800 active:bg-blue-200 focus:bg-blue-100 sm:w-max flex items-center justify-center gap-2"
                                            onClick={scrollToPrograms}
                                        >
                                            <span className="block text-blue-700 dark:text-blue-400 font-semibold">
                                                Browse Our Programs
                                            </span>
                                            <FaArrowDown className="text-blue-700 dark:text-blue-400" />
                                        </button>
                                    </div>
                                </div>

                            </div>
                            <div className="hidden bottom-0 md:-right-32 md:block md:w-full md:ml-auto lg:absolute lg:-right-32 lg:w-[60%] xl:-right-48">
                                <img
                                    src="https://img.freepik.com/free-photo/brunette-girl-with-her-friends_1098-2538.jpg?w=826&t=st=1687022827~exp=1687023427~hmac=170125f20c8e243980d8393d79ad821af1c4506999e60890fb8867c8720a32bd"
                                    className="rounded-full ml-48 lg:ml-0"
                                    alt="gril on an horse"
                                    loading="lazy"
                                    width={1053}
                                    height={772}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <AboutPrograms />
            <br />
            <div ref={programsRef}>
                <OurProgramsCards />
            </div>

        </>
    )
}

export default Programs