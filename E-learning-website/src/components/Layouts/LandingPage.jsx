import LoginHeader from "../Fragments/LoginRegisterHeader";
import Buttom from "../Elements/buttom";
import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<div>
			<LoginHeader />
			<div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
				<div className="absolute inset-0">
					<img
						src="../src/assets/coding-theme 1.png"
						alt="Background Image"
						className="object-cover object-center w-full h-full"
					/>
					<div className="absolute inset-0"></div>
				</div>

				<div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
					<h1 className="text-5xl font-bold leading-tight mb-4">Welcome to Videobelajar</h1>
					<p className="text-lg text-gray-300 mb-8">
						Videobelajar adalah platform pembelajaran video berbasis web yang memberikan pengguna
						akses ke beragam kursus dan tutorial berbasis video. Dengan Videobelajar, pengguna dapat
						belajar dengan kecepatan dan jadwal mereka sendiri. Videobelajar menawarkan cara yang
						fleksibel dan nyaman untuk memperoleh keterampilan dan pengetahuan baru, sehingga
						memudahkan pengguna menyesuaikan pembelajaran ke dalam kehidupan mereka yang sibuk.
						Video Belajar menawarkan berbagai kursus dan tutorial, mencakup topik seperti bisnis,
						teknologi, kesehatan dan kesejahteraan, pembelajaran bahasa, dan banyak lagi.
					</p>
					<div className="w-1/3">
						<Link to="/login">
							<Buttom>Mulai</Buttom>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
