import { useState } from "react";

function About(){

    const [isModalOpen, setIsModalOpen] = useState(false);


    return(

        <section className="py-20">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">


                    <div>

                        <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900"
                        alt="Team"
                        className="rounded-xl shadow-lg w-full"
                        />

                    </div>



                    <div>

                        <h2 className="text-4xl font-bold">
                            About Our Company
                        </h2>


                        <p className="text-gray-600 mt-6 leading-8">
                            We help developers learn modern web development through
                            practical projects and hands-on learning. Our goal is to
                            make coding simple, enjoyable, and accessible for everyone.
                        </p>



                        <div className="mt-8 space-y-4">


                            <div className="flex items-center gap-3">
                                <span className="text-green-500 text-2xl">
                                    ✓
                                </span>
                                <p>Easy to Learn</p>
                            </div>


                            <div className="flex items-center gap-3">
                                <span className="text-green-500 text-2xl">
                                    ✓
                                </span>
                                <p>Responsive Design</p>
                            </div>


                            <div className="flex items-center gap-3">
                                <span className="text-green-500 text-2xl">
                                    ✓
                                </span>
                                <p>Real World Projects</p>
                            </div>


                        </div>



                        <button
                        onClick={() => setIsModalOpen(true)}
                        className="mt-10 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Learn More
                        </button>


                    </div>


                </div>


            </div>



    

            {
                isModalOpen && (

                    <div 
                    onClick={() => setIsModalOpen(false)}
                    className="
                    fixed 
                    inset-0 
                    bg-black/50 
                    flex 
                    items-center 
                    justify-center 
                    z-50
                    ">


                        <div  
                        onClick={(e) => e.stopPropagation()}
                         className="
                        bg-white 
                        rounded-xl 
                        p-8 
                        max-w-md 
                        w-full 
                        shadow-2xl
                        transform
                        transition-all
                        duration-300
                        scale-100
                        ">


                            <div className="flex justify-between items-center mb-5">


                                <h2 className="text-2xl font-bold">
                                    About Our Company
                                </h2>


                                <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-500 hover:text-black text-2xl"
                                >
                                    ✕
                                </button>


                            </div>



                            <p className="text-gray-600 leading-7">
                                Our company focuses on creating modern web solutions
                                and helping developers improve their skills through
                                practical learning experiences.
                            </p>


                            <p className="text-gray-600 mt-4 leading-7">
                                We provide beginner-friendly resources, real-world
                                projects, and professional guidance to make web
                                development easier for everyone.
                            </p>



                            <button
                            onClick={() => setIsModalOpen(false)}
                            className="
                            mt-6
                            w-full
                            bg-blue-600
                            text-white
                            py-3
                            rounded-lg
                            hover:bg-blue-700
                            "
                            >
                                Close
                            </button>


                        </div>


                    </div>

                )
            }


        </section>

    )
}

export default About;