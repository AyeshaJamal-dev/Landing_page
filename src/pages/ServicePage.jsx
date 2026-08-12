import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

function ServicePage() {

    const { id } = useParams();

    const [member, setMember] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

            .then((response) => {

                if (response.status >= 400) {
    throw new Error(`Request failed with status: ${response.status}`);
}

                return response.json();

            })

            .then((data) => {

                setMember(data);
                setLoading(false);

            })

            .catch((error) => {

                setError(error.message);
                setLoading(false);

            });

    }, [id]);


    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-600 text-lg">
                    Loading profile...
                </p>
            </div>
        );
    }


    if (error) {
    return (
        <>
            <Navbar />

            <div className="min-h-screen flex flex-col items-center justify-center px-6">

                <h1 className="text-4xl font-bold text-red-600">
                    Profile Not Found
                </h1>

                <p className="text-gray-600 mt-4 text-center">
                    The requested profile could not be loaded.
                </p>

                <Link
                    to="/"
                    className="mt-8 bg-gray-900 text-white px-6 py-3 rounded-lg"
                >
                    Back to Home
                </Link>

            </div>

            <Footer />
        </>
    );
}


    return (
        <>
        <Navbar />

        <section className="min-h-screen bg-gray-100 py-20">

            <div className="max-w-4xl mx-auto px-6">

                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">

                    {/* Profile Icon */}

                    <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-4xl font-bold text-blue-600 mx-auto">
                        {member.name.charAt(0)}
                    </div>


                    {/* Name */}

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mt-6">
                        {member.name}
                    </h1>


                    {/* Role */}

                    <p className="text-blue-600 text-center font-medium mt-2">
                        Digital Specialist
                    </p>


                    {/* Information */}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

                        <div className="bg-gray-50 rounded-xl p-5">

                            <p className="text-sm text-gray-500">
                                Username
                            </p>

                            <p className="font-semibold text-gray-900 mt-1">
                                {member.username}
                            </p>

                        </div>


                        <div className="bg-gray-50 rounded-xl p-5">

                            <p className="text-sm text-gray-500">
                                Email
                            </p>

                            <p className="font-semibold text-gray-900 mt-1">
                                {member.email}
                            </p>

                        </div>


                        <div className="bg-gray-50 rounded-xl p-5">

                            <p className="text-sm text-gray-500">
                                Phone
                            </p>

                            <p className="font-semibold text-gray-900 mt-1">
                                {member.phone}
                            </p>

                        </div>


                        <div className="bg-gray-50 rounded-xl p-5">

                            <p className="text-sm text-gray-500">
                                Website
                            </p>

                            <p className="font-semibold text-gray-900 mt-1">
                                {member.website}
                            </p>

                        </div>

                    </div>


                    {/* Company */}

                    <div className="mt-8 bg-blue-50 rounded-xl p-6">

                        <p className="text-sm text-gray-500">
                            Company
                        </p>

                        <h2 className="text-xl font-bold text-gray-900 mt-1">
                            {member.company.name}
                        </h2>

                        <p className="text-gray-600 mt-2">
                            {member.company.catchPhrase}
                        </p>

                    </div>


                    {/* Back Button */}

                    <div className="text-center mt-10">

                        <Link
                            to="/"
                            className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
                        >
                            ← Back to Home
                        </Link>

                    </div>

                </div>

            </div>

        </section>
       <Footer />
       </>
    );
}

export default ServicePage;