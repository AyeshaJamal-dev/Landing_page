function Footer(){

    return(

        <footer className="bg-gray-900 text-white pt-16 pb-8">

            <div className="max-w-7xl mx-auto px-6">


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">


                    <div>

                        <h2 className="font-bold text-3xl text-blue-400">
                            Tailwind
                        </h2>

                        <p className="text-gray-400 mt-4 leading-7">
                            Build beautiful and responsive websites using Tailwind CSS.
                            Learn by creating real-world projects from scratch.
                        </p>

                    </div>




                    <div>

                        <h3 className="text-xl font-semibold mb-5">
                            Quick Links
                        </h3>


                        <ul className="space-y-3 text-gray-400">

                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-white transition">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Features
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Contact
                                </a>
                            </li>

                        </ul>

                    </div>





                    <div>

                        <h3 className="text-xl font-semibold mb-5">
                            Services
                        </h3>


                        <ul className="space-y-3 text-gray-400">

                            <li>Web Design</li>
                            <li>Web Development</li>
                            <li>UI/UX Design</li>
                            <li>SEO Optimization</li>

                        </ul>

                    </div>





                    <div>

                        <h3 className="text-xl font-semibold mb-5">
                            Contact
                        </h3>


                        <ul className="space-y-3 text-gray-400">

                            <li>📧 ayesha@gmail.com</li>
                            <li>📞 +92 309 7888888</li>
                            <li>📍 Lahore</li>

                        </ul>


                    </div>


                </div>



                <hr className="border-gray-700 my-10"/>



                <div className="flex flex-col md:flex-row justify-between items-center">


                    <p className="text-gray-400 text-center">
                        © 2026 Tailwind. All Rights Reserved.
                    </p>



                    <div className="flex gap-5 mt-5 md:mt-0">

                        <a href="#" className="hover:text-blue-400">
                            Facebook
                        </a>


                        <a href="#" className="hover:text-blue-400">
                            Twitter
                        </a>


                        <a href="#" className="hover:text-blue-400">
                            LinkedIn
                        </a>


                    </div>


                </div>


            </div>

        </footer>

    )
}

export default Footer;