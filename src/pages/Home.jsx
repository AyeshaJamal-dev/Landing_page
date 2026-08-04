import Navbar from "../components/navbar.jsx";
import Contact from "../components/contact.jsx";
import Features from "../components/features.jsx";
import Footer from "../components/footer.jsx";
import Hero from "../components/hero.jsx";
import Achievements from "../components/achievements.jsx";
import About from "../components/about.jsx";



function Home(){
    return(
        <>
         <Navbar />
         <Hero/>
         <Features/>
         <About />
          <Achievements />
          <Contact />
           
            <Footer/>
             
             
               
        </>
    )
}
export default Home;