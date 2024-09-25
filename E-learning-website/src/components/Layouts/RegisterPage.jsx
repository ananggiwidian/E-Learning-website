import Header from "../Fragments/LoginRegisterHeader.jsx";
import InputArea from "../Elements/Input/index.jsx";
import Buttom from "../Elements/buttom/index.jsx";
import LineText from "../Elements/DLL/Line.jsx";
import { Link } from "react-router-dom";

const RegisterPages = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		localStorage.setItem("email", e.target.email.value);
		localStorage.setItem("password", e.target.password.value);
		localStorage.setItem("name", e.target.text.value);
		localStorage.setItem("phone", e.target.tel.value);
		localStorage.setItem("confirmpassword", e.target.confirmpassword.value);
		window.location.href = "/registerNotivication";
	};
	return (
		<div>
			<Header />
			<form onSubmit={handleSubmit}>
				<div className="flex flex-col mb-6 mt-20  w-9/12 p-6 bg-white mx-auto md:w-full  md:max-w-md">
					<h1 className="text-2xl font-bold text-center">Ayo Buat Akunmu</h1>
					<p className="text-sm mb-8 text-center">Yuk, mulai belajarmu di videobelajar</p>
					<InputArea type="text" name="text" LabelName="Nama Lengkap" />
					<InputArea type="email" name="email" LabelName="E-mail" />
					<InputArea type="tel" name="tel" LabelName="No. Hp" />
					<InputArea type="password" name="password" LabelName="Kata Sandi" />
					<InputArea type="password" name="confirmpassword" LabelName="Konfirmasi Kata Sandi" />
					<p className="text-right italic">
						<Link to="/login">Sudah Punya Akun?</Link>
					</p>
					<Buttom type="submit">Daftar</Buttom>
					<LineText LineText="atau" />
					<Link to="https://accounts.google.com/">
						<Buttom>Masuk dengan Google</Buttom>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default RegisterPages;
