import { createContext, useState, useEffect } from "react";

const TeamContext = createContext();

function TeamProvider({ children }) {

    const [teamMembers, setTeamMembers] = useState(() => {

        const savedMembers = localStorage.getItem("teamMembers");

        return savedMembers ? JSON.parse(savedMembers) : [];

    });


    const [selectedUser, setSelectedUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);


    // Fetch users from API
    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")

            .then((response) => {

                if (!response.ok) {
                    throw new Error("Failed to fetch team members");
                }

                return response.json();

            })

            .then((data) => {

                setTeamMembers((currentMembers) => {

                    // If users are already stored, keep them
                    if (currentMembers.length > 0) {
                        return currentMembers;
                    }

                    return data;

                });

                setLoading(false);

            })

            .catch((error) => {

                setError(error.message);

                setLoading(false);

            });

    }, []);


    // Save team members to localStorage
    useEffect(() => {

        if (teamMembers.length > 0) {

            localStorage.setItem(
                "teamMembers",
                JSON.stringify(teamMembers)
            );

        }

    }, [teamMembers]);


    // Add manually created employee
    const addTeamMember = (newMember) => {

        setTeamMembers((currentMembers) => [

            ...currentMembers,

            newMember

        ]);

    };


    return (

        <TeamContext.Provider
            value={{

                teamMembers,

                selectedUser,

                setSelectedUser,

                addTeamMember,

                loading,

                error

            }}
        >

            {children}

        </TeamContext.Provider>

    );

}


export { TeamContext, TeamProvider };