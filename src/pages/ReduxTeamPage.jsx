import { useSelector } from "react-redux";

function ReduxTeamPage() {

    const { teamMembers, loading, error } = useSelector(
        (state) => state.team
    );
console.log("TEAM MEMBERS IN REDUX:", teamMembers);

    if (loading) {

        return (
            <section className="min-h-screen bg-gray-100 py-20">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <p className="text-gray-600">
                        Loading team members...
                    </p>

                </div>

            </section>
        );

    }


    if (error) {

        return (
            <section className="min-h-screen bg-gray-100 py-20">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <p className="text-red-600">
                        Something went wrong: {error}
                    </p>

                </div>

            </section>
        );

    }


    return (

        <section className="min-h-screen bg-gray-100 py-20">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center">

                    <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                        Redux Toolkit
                    </p>

                    <h1 className="text-4xl font-bold text-gray-900 mt-3">
                        Redux Team Members
                    </h1>

                    <p className="text-gray-600 mt-4">
                        These team members are currently stored in Redux.
                    </p>

                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

                    {teamMembers.map((member) => (

                        <div
                            key={member.id}
                            className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition"
                        >

                            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-600">

                                {member.name.charAt(0)}

                            </div>


                            <h2 className="text-xl font-bold text-gray-900 mt-6">

                                {member.name}

                            </h2>


                            <p className="text-blue-600 mt-1">

                                @{member.username}

                            </p>


                            <p className="text-gray-600 mt-4">

                                {member.email}

                            </p>


                            <p className="text-gray-600 mt-2">

                                {member.phone}

                            </p>


                            <p className="text-gray-500 mt-4 text-sm">

                                Company: {member.company?.name}

                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}

export default ReduxTeamPage;