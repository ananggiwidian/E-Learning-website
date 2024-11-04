import { Link } from "react-router-dom";

const UserNavbar = () => {
	return (
		<div className="flex gap-5">
			<Link to={"/checkout"}>
				<img src="../src/assets/cart.png" alt="" className="w-6 h-8" />
			</Link>
			<Link to={"/profil"}>
				<img src="../src/assets/woman-profil.png" alt="" className="w-6 h-8" />
			</Link>
			<Link>Log out</Link>
		</div>
	);
};

export default UserNavbar;
