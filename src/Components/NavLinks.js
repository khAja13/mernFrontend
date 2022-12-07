import { NavLink } from 'react-router-dom'

function NavLinks() {
    return (
        <>
            <NavLink className={({ isActive }) => isActive? "": ''} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" style={{padding:"4px", font:"bolder"}}  to='/' >Create</NavLink>
            <NavLink className={({ isActive }) => isActive? "": ''} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" style={{padding:"4px", font:"bolder"}} to='/read' >Read</NavLink>
            <NavLink className={({ isActive }) => isActive? "": ''} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" style={{padding:"4px", font:"bolder"}} to='/update' >Update</NavLink>
            <NavLink className={({ isActive }) => isActive? "": ''} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" style={{padding:"4px", font:"bolder"}} to='/delete' >Delete</NavLink>
            <NavLink className={({ isActive }) => isActive? "": ''} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" style={{padding:"4px", font:"bolder"}} to='/search' >Search</NavLink>
        </>
    )
}

export default NavLinks;