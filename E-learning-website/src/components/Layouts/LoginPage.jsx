import Header from "../Fragments/LoginRegisterHeader.jsx";
import InputArea from "../Elements/Input/index.jsx";
import Buttom from "../Elements/buttom/index.jsx";
import LineText from "../Elements/DLL/Line.jsx";
import { Link } from "react-router-dom";

const LoginPages = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		localStorage.setItem("email", e.target.email.value);
		localStorage.setItem("password", e.target.password.value);
		window.location.href = "/home";
	};
	return (
		<div>
			<Header />
			<div className="flex flex-col mb-6 mt-20  w-9/12 p-6 bg-white mx-auto md:w-full  md:max-w-md">
				<h1 className="text-2xl font-bold text-center">Ma suk ke Akun</h1>
				<p className="text-sm mb-8 text-center">Yuk, lanjutin belajarmu di videobelajar</p>
				<form onSubmit={handleSubmit}>
					<InputArea type="email" name="email" LabelName="E-Mail" />
					<InputArea type="password" name="password" LabelName="Kata Sandi" />
					<Link to="/lupapassword">
						<p className="text-right italic">Lupa Password?</p>
					</Link>
					<Buttom type="submit">Masuk</Buttom>
					<Link to="/register">
						<Buttom>Daftar</Buttom>
					</Link>
					<LineText LineText="atau" />
					<Link to="https://accounts.google.com/">
						<Buttom>Masuk dengan Google</Buttom>
					</Link>
				</form>
			</div>
		</div>
	);
};

export default LoginPages;
