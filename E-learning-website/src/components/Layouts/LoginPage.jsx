import Header from "../Fragments/LoginRegisterHeader.jsx";
import InputArea from "../Elements/Input/index.jsx";
import Buttom from "../Elements/buttom/index.jsx";
import LineText from "../Elements/DLL/Line.jsx";
import { Link } from "react-router-dom";

const handleSubmit = () => {
	console.log("submit");
};
const LoginPages = () => {
	return (
		<div>
			<Header />
			<div className="flex flex-col mb-6 mt-20  w-9/12 p-6 bg-white mx-auto md:w-full  md:max-w-md">
				<h1 className="text-2xl font-bold text-center">Ma suk ke Akun</h1>
				<p className="text-sm mb-8 text-center">Yuk, lanjutin belajarmu di videobelajar</p>
				<form onSubmit={handleSubmit}>
					<InputArea type="email" name="email" LabelName="E-Mail" />
					<InputArea type="text" name="text" LabelName="Kata Sandi" />
				</form>
				<Link to="/lupapassword">
					<p className="text-right italic">Lupa Password?</p>
				</Link>
				<Link to="/home">
					<Buttom type="submit">Masuk</Buttom>
				</Link>
				<Link to="/register">
					<Buttom>Daftar</Buttom>
				</Link>
				<LineText LineText="atau" />
				<Link to="https://accounts.google.com/">
					<Buttom>Masuk dengan Google</Buttom>
				</Link>
			</div>
		</div>
	);
};

export default LoginPages;
