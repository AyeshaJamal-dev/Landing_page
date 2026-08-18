import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TeamContext } from "../context/TeamContext.jsx";

function Services() {

    const navigate = useNavigate();

    const {
        teamMembers,
        setSelectedUser,
        loading,
        error
    } = useContext(TeamContext);


    return (

        <section className="bg-gray-100 py-20">

            <div className="max-w-7xl mx-auto px-6">

                <div className="max-w-2xl mx-auto text-center">

                    <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                        Our Team
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                        Meet the people behind our work
                    </h2>

                    <p className="text-gray-600 mt-4">
                        Discover the professionals who help us create
                        modern and effective digital experiences.
                    </p>

                </div>


                {/* API STATUS */}

                <div className="flex justify-center mt-6">

                    {loading && (
                        <div className="flex items-center gap-2 text-sm text-gray-500">

                            <span className="w-2.5 h-2.5 rounded-full bg-gray-400"></span>

                            Checking API...

                        </div>
                    )}


                    {!loading && !error && (
                        <div className="flex items-center gap-2 text-sm text-green-600">

                            <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>

                            API Connected

                        </div>
                    )}


                    {!loading && error && (
                        <div className="flex items-center gap-2 text-sm text-red-600">

                            <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>

                            API Offline

                        </div>
                    )}

                </div>


                {/* LOADING */}

                {loading && (

                    <p className="text-center text-gray-600 mt-12">
                        Loading team members...
                    </p>

                )}


                {/* ERROR */}

                {!loading && error && (

                    <p className="text-center text-red-600 mt-12">
                        Something went wrong: {error}
                    </p>

                )}


                {/* TEAM MEMBERS */}

                {!loading && !error && (

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

                        {teamMembers.map((member) => (

                            <div
                                key={member.id}
                                onClick={() => {
    setSelectedUser(member);
    navigate(`/service/${member.id}`);
}}
                                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                            >

                                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-600">
                                    {member.name.charAt(0)}
                                </div>


                                <h3 className="text-xl font-bold text-gray-900 mt-6">
                                    {member.name}
                                </h3>


                                <p className="text-blue-600 font-medium mt-1">
                                    Digital Specialist
                                </p>


                                <p className="text-gray-600 mt-4">
                                    Helping create modern digital experiences
                                    for our customers.
                                </p>


                                <div className="mt-6">

                                    <span className="text-sm font-semibold text-gray-900">
                                        View Profile →
                                    </span>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </section>

    );
}

export default Services;