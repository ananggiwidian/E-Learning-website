import Buttom from "../Elements/buttom";
import { Link } from "react-router-dom";

const HeroSection = () => {
	return (
		<div className="bg-white dark:bg-gray-900 md:mb-56 lg:mb-1 p-6 ">
			<div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse  lg:max-w-5xl xl:max-w-6xl">
				<div className="w-full h-64 lg:w-1/2 lg:h-auto">
					<img src="../src/assets/hero-picture.png" alt="" className="h-full w-full object-cover" />
				</div>

				<div className="max-w-lg bg-white md:max-w-2xl md:z-10  md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
					<div className="flex flex-col p-12 md:px-16">
						<h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">
							VIDEO BELAJAR
						</h2>
						<p className="mt-4">
							Temukan ilmu baru yang menarik dan mendalam melalui konesksi video pembelajaran
							berkualitas tinggi. tidak hanya itu, Anda juga dapat berpartisipasi dalam pelatihan
							interaktif yang akan menintgkatkan pemahaman anda.
						</p>
						<Link to="/register">
							<Buttom>Daftar</Buttom>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
