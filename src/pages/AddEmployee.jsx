import { useState, useContext } from "react";
import { TeamContext } from "../context/TeamContext.jsx";

function AddEmployeePage() {

    const { addTeamMember } = useContext(TeamContext);

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [website, setWebsite] = useState("");
    const [company, setCompany] = useState("");


    const handleSubmit = (event) => {

        event.preventDefault();

        const newMember = {
            id: Date.now(),
            name: name,
            username: username,
            email: email,
            phone: phone,
            website: website,

            company: {
                name: company
            }
        };

        addTeamMember(newMember);

        alert("Employee added successfully!");

        setName("");
        setUsername("");
        setEmail("");
        setPhone("");
        setWebsite("");
        setCompany("");
    };


    return (

        <section className="min-h-screen bg-gray-100 py-20">

            <div className="max-w-2xl mx-auto px-6">

                <div className="bg-white rounded-2xl shadow-lg p-8">

                    <h1 className="text-3xl font-bold text-gray-900">
                        Add New Employee
                    </h1>

                    <p className="text-gray-600 mt-2">
                        Enter the employee information below.
                    </p>


                    <form
                        onSubmit={handleSubmit}
                        className="mt-8 space-y-5"
                    >

                        {/* NAME */}

                        <div>

                            <label className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>

                            <input
                                type="text"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                placeholder="Enter full name"
                                required
                                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                        </div>


                        {/* USERNAME */}

                        <div>

                            <label className="block text-sm font-medium text-gray-700">
                                Username
                            </label>

                            <input
                                type="text"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                                placeholder="Enter username"
                                required
                                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                        </div>


                        {/* EMAIL */}

                        <div>

                            <label className="block text-sm font-medium text-gray-700">
                                Email
                            </label>

                            <input
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="Enter email"
                                required
                                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                        </div>


                        {/* PHONE */}

                        <div>

                            <label className="block text-sm font-medium text-gray-700">
                                Phone
                            </label>

                            <input
                                type="text"
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}
                                placeholder="Enter phone number"
                                required
                                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                        </div>


                        {/* WEBSITE */}

                        <div>

                            <label className="block text-sm font-medium text-gray-700">
                                Website
                            </label>

                            <input
                                type="text"
                                value={website}
                                onChange={(event) => setWebsite(event.target.value)}
                                placeholder="Enter website"
                                required
                                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                        </div>


                        {/* COMPANY */}

                        <div>

                            <label className="block text-sm font-medium text-gray-700">
                                Company
                            </label>

                            <input
                                type="text"
                                value={company}
                                onChange={(event) => setCompany(event.target.value)}
                                placeholder="Enter company name"
                                required
                                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                        </div>


                        {/* BUTTON */}

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Add Employee
                        </button>

                    </form>

                </div>

            </div>

        </section>

    );
}

export default AddEmployeePage;