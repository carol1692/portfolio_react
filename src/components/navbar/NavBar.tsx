import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
        <div className="text-(--color-almond-silk-700) silkscreen-regular md:min-h-16">
           <div className="flex justify-center pt-5 gap-3 md:gap-6 flex-wrap">
               <NavLink
                    to="/"
                    className={({ isActive }) => `${isActive? "text-(--color-coffee-bean-800:) border-b-2": "text-(--color-almond-silk-700) hover:text-(--color-desert-sand-800) hover:scale-105"}`} 
                >
                    Home
                </NavLink>
                <NavLink
                    to="/skills"
                    className={({ isActive }) => `${isActive? "text-(--color-coffee-bean-800:) border-b-2": "text-(--color-almond-silk-700) hover:text-(--color-desert-sand-800) hover:scale-105"
                    }`} 
                    >
                    Skills
                </NavLink>
                <NavLink
                    to="/resume"
                    className={({ isActive }) => `${isActive? "text-(--color-coffee-bean-800:) border-b-2": "text-(--color-almond-silk-700) hover:text-(--color-desert-sand-800) hover:scale-105"
                    }`} 
                    >
                    Resume
                </NavLink>
                <NavLink
                    to="/projects"
                    className={({ isActive }) => `${isActive? "text-(--color-coffee-bean-800:) border-b-2": "text-(--color-almond-silk-700) hover:text-(--color-desert-sand-800) hover:scale-105"
                    }`} 
                    >
                    Projects
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) => `${isActive? "text-(--color-coffee-bean-800:) border-b-2": "text-(--color-almond-silk-700) hover:text-(--color-desert-sand-800) hover:scale-105"
                    }`} 
                    >
                    Contact Me
                </NavLink>
           </div>
          
        </div>
           
       
    </>
  )
}

export default NavBar
