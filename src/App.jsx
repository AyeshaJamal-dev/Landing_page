import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { fetchTeamMembers } from "./redux/teamSlice.js";
import {Routes , Route} from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";
import AddEmployee from "./pages/AddEmployee.jsx";
import ReduxTeamPage from "./pages/ReduxTeamPage.jsx";
import AddReduxEmployee from "./pages/AddReduxEmployee.jsx";
function App(){
  const dispatch = useDispatch();
  const teamMembers = useSelector(
    (state) => state.team.teamMembers 
  );
useEffect(() => {
  if(teamMembers.length === 0){
    dispatch(fetchTeamMembers());
  }
} ,[dispatch, teamMembers.length])
return(
 <>
   <Routes>
<Route 
path="/"
element={<Home />} />
<Route 
path="/about"
element={<AboutPage />}
/>
<Route
path="/contact"
element={<ContactPage />}
/>
<Route
path="/service/:id"
element={<ServicePage />} />
<Route 
path="redux-team"
element={<ReduxTeamPage />}
/>
<Route 
path="/add-redux-employee"
element={<AddReduxEmployee />}
/>
<Route
    path="/add-employee"
    element={<AddEmployee />}
/>

   </Routes>
 </>
)

}

export default App;