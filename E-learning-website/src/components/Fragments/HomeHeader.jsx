import UserNavbar from "../Elements/header/UserNavbar";

const HomeHeader = () => {
	return (
		<nav className="font-sans flex text-center justify-between py-4 px-3 bg-white shadow  w-full">
			<div>
				<a href="#">
					<img src="../src/assets/frame 3.png" alt="" className="w-32 h-auto" />
				</a>
			</div>
			<div>
				<ul className="flex gap-4">
					<li>
						<a
							href="#"
							className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
						>
							Kategori
						</a>
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
