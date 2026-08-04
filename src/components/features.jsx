function Features(){

    return(
        <section className="bg-gray-100 py-20">

            <div className="max-w-7xl mx-auto px-6">

                <h1 className="text-2xl font-bold text-center">
                    Why choose Us
                </h1>

                <p className="text-center text-gray-600 mt-4">
                    Everything you need to build beautiful websites faster.
                </p>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-8">


                    <div className="bg-white p-8 rounded-xl shadow-lg">

                        <div className="text-3xl md:text-5xl">
                            ⚡
                        </div>

                        <h3 className="text-2xl font-bold mt-4">
                            Fast
                        </h3>

                        <p className="mt-3 text-gray-600">
                            Build websites quickly using utility classes instead of writing custom CSS.
                        </p>

                    </div>



                    <div className="bg-white p-8 rounded-xl shadow-lg">

                        <div className="text-3xl md:text-5xl">
                            📱
                        </div>

                        <h3 className="text-2xl font-bold mt-4">
                            Responsive
                        </h3>

                        <p className="mt-3 text-gray-600">
                            Create layouts that work beautifully on desktop, tablet, and mobile devices.
                        </p>

                    </div>



                    <div className="bg-white p-8 rounded-xl shadow-lg">

                        <div className="text-3xl md:text-5xl">
                            🔒
                        </div>

                        <h3 className="text-2xl font-bold mt-4">
                            Secure
                        </h3>

                        <p className="mt-3 text-gray-600">
                            Follow modern web standards to build reliable and maintainable websites.
                        </p>

                    </div>


                </div>

            </div>

        </section>
    )
}

export default Features;