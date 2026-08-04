function Hero(){

    return(
        <section className="mx-auto bg-gray-100 px-6 py-20">

            <div className="grid md:grid-cols-2 gap-10 items-center">

                <div>

                    <h1 className="text-5xl font-bold leading-tight">
                        Build Amazing Website 
                        <span className="text-blue-600">
                            with Tailwind CSS
                        </span>
                    </h1>

                    <p className="text-gray-800 mt-6 text-2xl">
                        Learn modern web development by building real-world projects.
                        Tailwind CSS helps you create beautiful, responsive websites
                        without writing custom CSS.
                    </p>


                    <div className="flex gap-4 mt-8">

                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                            Get Started
                        </button>

                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                            Learn More
                        </button>

                    </div>

                </div>


                <div>

                    <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
                    alt="Hero"
                    className="rounded-xl shadow-lg"
                    />

                </div>

            </div>

        </section>
    )
}

export default Hero;