import { useState, useEffect } from "react";

function Features() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/posts")

            .then((response) => {

                if (!response.ok) {
                    throw new Error("Failed to fetch features");
                }

                return response.json();

            })

            .then((data) => {

                setData(data);
                setLoading(false);

            })

            .catch((error) => {

                setError(error.message);
                setLoading(false);

            });

    }, []);


    return (

        <section className="bg-gray-100 py-20">

            <div className="max-w-7xl mx-auto px-6">


                {/* Section Heading */}

                <div className="max-w-2xl mx-auto text-center">

                    <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                        Our Features
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                        Everything you need to build better websites
                    </h2>

                    <p className="text-gray-600 mt-4">
                        Discover powerful features designed to make your
                        development experience faster, easier, and better.
                    </p>

                </div>


                {/* Features Cards */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">


                    {/* Loading State */}

                    {loading && (

                        <p className="text-center text-gray-600 col-span-full">
                            Loading features...
                        </p>

                    )}


                    {/* Error State */}

                    {!loading && error && (

                        <p className="text-center text-red-600 col-span-full">
                            Something went wrong: {error}
                        </p>

                    )}


                    {/* API Data */}

                    {!loading && !error && (

                        data.slice(0, 3).map((item, index) => (

                            <div
                                key={item.id}
                                className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                            >


                                {/* Top Row */}

                                <div className="flex items-center justify-between">

                                    <span className="text-sm font-semibold text-blue-600">
                                        0{index + 1}
                                    </span>

                                    <span className="text-2xl text-gray-300 group-hover:text-blue-600 transition-colors duration-300">
                                        →
                                    </span>

                                </div>


                                {/* Title */}

                                <h3 className="text-xl font-bold text-gray-900 mt-8 capitalize">
                                    {item.title}
                                </h3>


                                {/* Description */}

                                <p className="text-gray-600 leading-7 mt-4">
                                    {item.body}
                                </p>


                                {/* Bottom Link */}

                                <div className="mt-8">

                                    <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                        Learn more →
                                    </span>

                                </div>

                            </div>

                        ))

                    )}

                </div>

            </div>

        </section>

    );
}

export default Features;