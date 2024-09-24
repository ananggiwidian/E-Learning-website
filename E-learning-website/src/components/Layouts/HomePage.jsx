import HomeHeader from "../Fragments/HomeHeader";
import HeroSection from "../Fragments/HeroSection";
import Menu from "../Elements/Menu/Menu";
import FooterSection from "../Fragments/FooterSection";
import CardProduct from "../Elements/Card";

const HomePages = () => {
	return (
		<div>
			<HomeHeader />
			<HeroSection />
			<div className=" text-center bg-gray-900 dark:bg-white text-white">
				<h2 className="text-2xl font-bold pt-4">Koleksi video Pembelajaran Unggulan</h2>
				<p className="pb-4">Jelajahi Dunia pengetahuan melalui Pilihan Kami!</p>
				<Menu />
			</div>

			<CardProduct />
			<FooterSection />
		</div>
	);
};

export default HomePages;
