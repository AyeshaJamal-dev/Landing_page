import { useContext } from "react";
import { TeamContext } from "../context/TeamContext.jsx";

function ServicePage() {

    const { selectedUser } = useContext(TeamContext);


    if (!selectedUser) {

        return (
            <div className="min-h-screen flex items-center justify-center">

                <p className="text-gray-600 text-lg">
                    No team member selected.
                </p>

            </div>
        );

    }


    return (

        <section className="min-h-screen bg-gray-100 py-20">

            <div className="max-w-3xl mx-auto px-6">

                <div className="bg-white rounded-2xl shadow-lg p-10">

                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-3xl font-bold text-blue-600 mx-auto">

                        {selectedUser.name.charAt(0)}

                    </div>


                    <h1 className="text-3xl font-bold text-gray-900 text-center mt-6">

                        {selectedUser.name}

                    </h1>


                    <p className="text-blue-600 text-center mt-2 font-medium">

                        Digital Specialist

                    </p>


                    <div className="mt-8 space-y-4">

                        <div className="border-b pb-3">

                            <p className="text-sm text-gray-500">
                                Username
                            </p>

                             <p className="font-medium text-gray-900">
                                {selectedUser.username}
                            </p>

                        </div>


                        <div className="border-b pb-3">

                            <p className="text-sm text-gray-500">
                                Email
                            </p>

                            <p className="font-medium text-gray-900">
                                {selectedUser.email}
                            </p>

                        </div>


                        <div className="border-b pb-3">

                            <p className="text-sm text-gray-500">
                                Phone
                            </p>

                            <p className="font-medium text-gray-900">
                                {selectedUser.phone}
                            </p>

                        </div>


                        <div className="border-b pb-3">

                            <p className="text-sm text-gray-500">
                                Website
                            </p>

                            <p className="font-medium text-gray-900">
                                {selectedUser.website}
                            </p>

                        </div>


                        <div>

                            <p className="text-sm text-gray-500">
                                Company
                            </p>

                            <p className="font-medium text-gray-900">
                                {selectedUser.company.name}
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );
}

export default ServicePage;