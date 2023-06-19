import React from 'react'

const AboutPrograms = () => {
    return (
        <>

            <div className="py-16">
                <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
                    <div className="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center" style={{ boxShadow: '8px 8px 10px rgba(0, 0, 255, 0.1)' }}>
                        <div className="md:5/12 lg:w-1/2">
                            <img
                                src="https://img.freepik.com/free-photo/little-child-online-learning-holding-doll_53876-94848.jpg?w=996&t=st=1687029342~exp=1687029942~hmac=940bfbfffeb691925e5d4426629aa599026cbf31669e310b6dc1e7455003d322"
                                alt="image"
                                loading="lazy"
                                width=""
                                height=""
                                style={{ borderTopRightRadius: '65px', borderBottomLeftRadius: '65px' }}
                            />
                        </div>
                        <div className="md:7/12 lg:w-1/2">
                            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                            Together, we can shape a brighter future through the power of education
                            </h2>
                            <p className="my-8 text-gray-600 dark:text-gray-300">
                                we take pride in our remarkable success in providing top-notch education and empowering students worldwide. With a proven track record of excellence, we have helped countless learners unlock their full potential and achieve academic greatness. Our dedicated team of experienced educators and innovative curriculum ensure that every student receives personalized attention and the highest quality of instruction. Join us on this exciting journey of educational success, where your dreams become realities and your aspirations know no bounds.
                            </p>
                         
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default AboutPrograms