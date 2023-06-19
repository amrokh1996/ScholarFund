import React from "react";

function Edit() {
    return (

        <div className="flex justify-center">
            <div className="w-full bg-white p-10">
                <h1 tabIndex={0} role="heading" aria-label="profile information" className="focus:outline-none text-3xl font-bold text-gray-800 mt-12">
                    Donar info
                </h1>
                <div className="mt-8 md:flex md:flex-wrap md:justify-between">
                    <div className="flex flex-col mb-8 md:w-64">
                        <label className="mb-3 text-lg leading-none text-gray-800">First name</label>
                        <p className="bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200">
                            William
                        </p>
                    </div>
                    <div className="flex flex-col mb-8 md:w-64">
                        <label className="mb-3 text-lg leading-none text-gray-800">Last name</label>
                        <p className="bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200">
                            Smith
                        </p>
                    </div>
                    <div className="flex flex-col mb-8 md:w-64">
                        <label className="mb-3 text-lg leading-none text-gray-800">City</label>
                        <p className="bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200">
                            Smith
                        </p>
                    </div>
                    <div className="flex flex-col mb-8 md:w-64">
                        <label className="mb-3 text-lg leading-none text-gray-800">Address</label>
                        <p className="bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200">
                            Smith
                        </p>
                    </div>
                    <div className="flex flex-col mb-8 md:w-64">
                        <label className="mb-3 text-lg leading-none text-gray-800">Email Address</label>
                        <p className="bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200">
                            smith.william@gmail.com
                        </p>
                    </div>
                    <div className="flex flex-col mb-8 md:w-64">
                        <label className="mb-3 text-lg leading-none text-gray-800">Phone number</label>
                        <p className="bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200">
                            +81 839274
                        </p>
                    </div>
                    <div className="flex flex-col mb-8 md:w-64">
                        <label className="mb-3 text-lg leading-none text-gray-800">Phone number</label>
                        <p className="bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200">
                            +81 839274
                        </p>
                    </div>
                    <div className="flex flex-col mb-8 md:w-64">
                        <label className="mb-3 text-lg leading-none text-gray-800">Phone number</label>
                        <p className="bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200">
                            +81 839274
                        </p>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default Edit;
