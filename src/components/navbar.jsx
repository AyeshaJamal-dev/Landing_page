import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";

function Navbar(){

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className=" relative flex justify-between items-center px-8 py-3 bg-slate-400">

            
            <div className="font-bold text-2xl">
                Tailwind
            </div>


            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6">
                <li className="hover:cursor-pointer hover:font-bold">
                   <Link to="/" onClick={()=>setIsOpen(false)}> Home</Link>
                </li>

                <li className="hover:cursor-pointer hover:font-bold">
                     <Link to="/contact" onClick={()=>setIsOpen(false)}> Contact Us</Link>
                </li>

                <li className="hover:cursor-pointer hover:font-bold">
                     <Link to="/about" onClick={()=>setIsOpen(false)}> About Us</Link>
                </li>
            </ul>



            
            <div className="flex items-center gap-4">


            
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-3xl"
                >
                    ☰
                </button>



                
                <button onClick={()=> navigate("/contact")}
                    className="
                    px-4 py-2 hover:bg-slate-900 hover:cursor-pointer hover:rounded  text-white transition-all duration-300
                    "
                >
                    Sign Up
                </button>

            </div>



            
                
                    <ul
    className={`
        absolute
        top-16
        left-0
        w-full
        bg-slate-400
        flex
        flex-col
        items-center
        gap-5
        py-5
        md:hidden

        transition-all
        duration-300
        ease-in-out

        ${
            isOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-4 pointer-events-none"
        }
    `}
>
                  <li className="hover:font-bold">
    <Link to="/" onClick={() => setIsOpen(false)}>
        Home
    </Link>
</li>

<li className="hover:font-bold">
    <Link to="/contact" onClick={() => setIsOpen(false)}>
        Contact us
    </Link>
</li>

<li className="hover:font-bold">
    <Link to="/about" onClick={() => setIsOpen(false)}>
        About us
    </Link>
</li>
            

</ul>
        </nav>
    );
}

export default Navbar;