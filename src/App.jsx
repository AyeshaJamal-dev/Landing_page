import {Routes , Route} from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";
function App(){

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
path="/service/:serviceName"
element={<ServicePage />} />

   </Routes>
 </>
)

}

export default App;