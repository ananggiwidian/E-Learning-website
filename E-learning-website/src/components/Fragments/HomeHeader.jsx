import UserNavbar from "../Elements/header/UserNavbar";
import { Link } from "react-router-dom";

const UserName = localStorage.getItem("email");

const HomeHeader = () => {
	return (
		<nav className="font-sans flex text-center justify-between py-4 px-3 bg-white shadow  w-full">
			<div>
				<Link to="/home">
					<img src="../src/assets/frame 3.png" alt="" className="w-32 h-auto" />
				</Link>
			</div>
			<div>
				<ul className="flex gap-4">
					<li>
						<p
							href="#"
							className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
						>
							{UserName}
						</p>
					</li>
					<li>
						<UserNavbar />
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default HomeHeader;
