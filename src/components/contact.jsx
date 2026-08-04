function Contact(){

    return(

        <section className="py-20 bg-gray-100">

            <div className="max-w-7xl mx-auto px-6">


                <h2 className="text-4xl font-bold text-center">
                    Contact Us
                </h2>


                <p className="text-gray-600 text-center mt-4">
                    Have a question? We'd love to hear from you.
                </p>



                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">


                    <div>

                        <h3 className="text-2xl font-bold mb-8">
                            Get In Touch
                        </h3>


                        <div className="space-y-6">


                            <div>
                                <h4 className="font-semibold">
                                    📍 Address
                                </h4>

                                <p className="text-gray-600">
                                    A1 Block, PIA Housing Society, Lahore
                                </p>
                            </div>



                            <div>
                                <h4 className="font-semibold">
                                    📞 Phone
                                </h4>

                                <p className="text-gray-600">
                                    +92 309 78888888
                                </p>
                            </div>



                            <div>
                                <h4 className="font-semibold">
                                    📧 Email
                                </h4>

                                <p className="text-gray-600">
                                    ayesha@gmail.com
                                </p>
                            </div>


                        </div>


                    </div>



                    <div className="bg-white p-8 rounded-xl shadow-lg">


                        <form className="space-y-5">


                            <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />



                            <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />



                            <input
                            type="text"
                            placeholder="Subject"
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />



                            <textarea
                            rows="5"
                            placeholder="Your Message"
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>



                            <button
                            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                            >
                                Send Message
                            </button>


                        </form>


                    </div>


                </div>


            </div>


        </section>

    )
}

export default Contact;