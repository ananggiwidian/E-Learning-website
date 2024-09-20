import HomeHeader from "../Fragments/HomeHeader";
import HeroSection from "../Fragments/HeroSection";
import Card from "../Elements/Card/Card";
import Menu from "../Elements/Menu/Menu";
import FooterSection from "../Fragments/FooterSection";

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
			<section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
				<Card
					Src="../src/assets/image-1.png"
					ProductName="Management Part 1"
					Rincian="Belajar management"
					Price="Rp. 600.000"
					DiscountPrice="Rp. 400.000"
				/>
				<Card
					Src="../src/assets/image-2.png"
					ProductName="Management Part 2"
					Rincian="Belajar management"
					Price="Rp. 700.000"
					DiscountPrice="Rp. 500.000"
				/>
				<Card
					Src="../src/assets/image-3.png"
					ProductName="Management Part 3"
					Rincian="Belajar management"
					Price="Rp. 800.000"
					DiscountPrice="Rp. 700.000"
				/>
				<Card
					Src="../src/assets/image-4.png"
					ProductName="Management Part 4"
					Rincian="Belajar management"
					Price="Rp. 400.000"
					DiscountPrice="Rp. 300.000"
				/>
				<Card
					Src="../src/assets/image-5.png"
					ProductName="Management Part 5"
					Rincian="Belajar management"
					Price="Rp. 1.000.000"
					DiscountPrice="Rp. 500.000"
				/>
			</section>
			<FooterSection />
		</div>
	);
};

export default HomePages;
