function Achievements(){

    return(

        <section className="bg-slate-600 py-20">

            <div className="max-w-7xl mx-auto px-6">

                <h1 className="text-4xl font-bold text-white text-center">
                    Our Achievements
                </h1>

                <p className="text-center text-white mt-4">
                    Thousands of developers trust our platform
                </p>


                <div className="grid grid-cols-2 md:grid-cols-4 mt-16 gap-8">


                    <div className="text-center">
                        <h3 className="text-5xl font-bold text-white">
                            10k+
                        </h3>
                        <p className="text-blue-100 mt-3">
                            Students
                        </p>
                    </div>


                    <div className="text-center">
                        <h3 className="text-5xl font-bold text-white">
                            500+
                        </h3>
                        <p className="text-blue-100 mt-3">
                            Projects
                        </p>
                    </div>


                    <div className="text-center">
                        <h3 className="text-5xl font-bold text-white">
                            24/7
                        </h3>
                        <p className="text-blue-100 mt-3">
                            Support
                        </p>
                    </div>


                    <div className="text-center">
                        <h3 className="text-5xl font-bold text-white">
                            99%
                        </h3>
                        <p className="text-blue-100 mt-3">
                            Success Rate
                        </p>
                    </div>


                </div>

            </div>

        </section>

    )
}

export default Achievements;