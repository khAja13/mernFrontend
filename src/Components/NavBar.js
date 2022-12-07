import { Routes, Route } from "react-router-dom";
import Create from "./Create";
import Read from "./Read";
import Delete from "./Delete";
import Update from "./Update";
import Search from "./Search";
import NavLinks from "./NavLinks";

function NavBar() {
	return (
		<>
			<nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
				<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
					<div
						className="text-sm lg:flex-grow"
						style={{ display: "flex", justifyContent: "center" }}
					>
						<NavLinks />
					</div>
				</div>
			</nav>

			<Routes>
				<Route
					exact
					path="/"
					element={<Create  msg={'Form'} val={0} />}
					className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 one"
				></Route>
				<Route
					element={<Read />}
					exact
					path="/read"
					className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
				></Route>
				<Route
					element = {<Update msg={"Enter the details to update"} val={1}/>}
					exact 
					path="/update"
					className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
				>			
				</Route>
				<Route
					element = {<Delete />}
					exact 
					path="/delete"
					className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
				>			
				</Route>
				<Route
					element = {<Search />}
					exact 
					path="/search"
					className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
				>
				</Route>
			</Routes>
		</>
	);
}
export default NavBar;
