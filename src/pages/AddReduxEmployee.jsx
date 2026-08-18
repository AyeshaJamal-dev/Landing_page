import { useState } from "react";
import {useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTeamMember } from "../redux/teamSlice.js";

function AddReduxEmployee() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",

        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: ""
        },

        company: {
            name: "",
            catchPhrase: "",
            bs: ""
        }
    });


    const handleChange = (e) => {

        const { name, value } = e.target;

        // Address fields
        if (
            name === "street" ||
            name === "suite" ||
            name === "city" ||
            name === "zipcode"
        ) {

            setFormData({
                ...formData,

                address: {
                    ...formData.address,
                    [name]: value
                }
            });

        }

        // Company fields
        else if (
            name === "companyName" ||
            name === "catchPhrase" ||
            name === "bs"
        ) {

            const companyField =
                name === "companyName"
                    ? "name"
                    : name;

            setFormData({
                ...formData,

                company: {
                    ...formData.company,
                    [companyField]: value
                }
            });

        }

        // Basic fields
        else {

            setFormData({
                ...formData,
                [name]: value
            });

        }
    };


    const handleSubmit = (e) => {

        e.preventDefault();

        const newEmployee = {
            ...formData,
            id: Date.now()
        };

        console.log("BEFORE DISPATCH:", newEmployee);

        dispatch(addTeamMember(newEmployee));

        console.log("AFTER DISPATCH");

        alert("Employee added successfully!");
        navigate("/redux-team");

        // Reset form
        setFormData({
            name: "",
            username: "",
            email: "",
            phone: "",
            website: "",

            address: {
                street: "",
                suite: "",
                city: "",
                zipcode: ""
            },

            company: {
                name: "",
                catchPhrase: "",
                bs: ""
            }
        });
    };


    return (

        <section className="min-h-screen bg-gray-100 py-16">

            <div className="max-w-4xl mx-auto px-6">

                <div className="text-center mb-10">

                    <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                        Redux Toolkit
                    </p>

                    <h1 className="text-4xl font-bold text-gray-900 mt-3">
                        Add New Employee
                    </h1>

                    <p className="text-gray-600 mt-4">
                        Add a new team member to the Redux store.
                    </p>

                </div>


                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8"
                >

                    {/* Basic Information */}

                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Basic Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div>

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter full name"
                            />

                        </div>


                        <div>

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Username
                            </label>

                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter username"
                            />

                        </div>


                        <div>

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter email"
                            />

                        </div>


                        <div>

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Phone
                            </label>

                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter phone number"
                            />

                        </div>


                        <div className="md:col-span-2">

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Website
                            </label>

                            <input
                                type="text"
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter website"
                            />

                        </div>

                    </div>


                    {/* Address */}

                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                        Address
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div>

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Street
                            </label>

                            <input
                                type="text"
                                name="street"
                                value={formData.address.street}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                                placeholder="Enter street"
                            />

                        </div>


                        <div>

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Suite
                            </label>

                            <input
                                type="text"
                                name="suite"
                                value={formData.address.suite}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                                placeholder="Enter suite"
                            />

                        </div>


                        <div>

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                City
                            </label>

                            <input
                                type="text"
                                name="city"
                                value={formData.address.city}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                                placeholder="Enter city"
                            />

                        </div>


                        <div>

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Zipcode
                            </label>

                            <input
                                type="text"
                                name="zipcode"
                                value={formData.address.zipcode}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                                placeholder="Enter zipcode"
                            />

                        </div>

                    </div>


                    {/* Company */}

                    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                        Company
                    </h2>

                    <div className="grid grid-cols-1 gap-6">

                        <div>

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Company Name
                            </label>

                            <input
                                type="text"
                                name="companyName"
                                value={formData.company.name}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                                placeholder="Enter company name"
                            />

                        </div>


                        <div>

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Catch Phrase
                            </label>

                            <input
                                type="text"
                                name="catchPhrase"
                                value={formData.company.catchPhrase}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                                placeholder="Enter company catch phrase"
                            />

                        </div>


                        <div>

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Business
                            </label>

                            <input
                                type="text"
                                name="bs"
                                value={formData.company.bs}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                                placeholder="Enter business description"
                            />

                        </div>

                    </div>


                    {/* Submit */}

                    <button
                        type="submit"
                        className="w-full mt-10 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
                    >
                        Add Employee to Redux
                    </button>

                </form>

            </div>

        </section>

    );
}

export default AddReduxEmployee;