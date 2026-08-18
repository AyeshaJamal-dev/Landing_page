import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// Fetch team members from API
export const fetchTeamMembers = createAsyncThunk(
    "team/fetchTeamMembers",

    async () => {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch team members");
        }

        const data = await response.json();

        return data;
    }
);


// Initial Redux state
const initialState = {

    teamMembers: [],

    loading: false,

    error: null

};


// Create team slice
const teamSlice = createSlice({

    name: "team",

    initialState,

    reducers: {

        // Add a manually created employee
       addTeamMember: (state, action) => {

    console.log("REDUX RECEIVED:", action.payload);

    state.teamMembers.push(action.payload);

    console.log("REDUX TEAM COUNT:", state.teamMembers.length);

}

    },


    extraReducers: (builder) => {

        builder

            // API request started
            .addCase(fetchTeamMembers.pending, (state) => {

                state.loading = true;

                state.error = null;

            })


            // API request completed successfully
            .addCase(fetchTeamMembers.fulfilled, (state, action) => {

                state.loading = false;

                // Only store API data if Redux is currently empty
                if (state.teamMembers.length === 0) {

                    state.teamMembers = action.payload;

                }

            })


            // API request failed
            .addCase(fetchTeamMembers.rejected, (state, action) => {

                state.loading = false;

                state.error = action.error.message;

            });

    }

});


// Export actions
export const {
    addTeamMember
} = teamSlice.actions;


// Export reducer
export default teamSlice.reducer;