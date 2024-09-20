import { Link } from "react-router-dom";
import Buttom from "../Elements/buttom";

const DaftarNotification = () => {
	return (
		<div className="bg-white rounded-3xl mx-4 md:mx-auto max-w-screen-md border-2 border-gray-800 mt-16">
			<div className="px-8 py-6 md:p-10">
				<h1 className="text-4xl md:text-5xl font-medium leading-tight text-gray-800 mb-6 text-center">
					Pembuatan Akun Anda Berhasil
				</h1>
				<p className="text-base md:text-lg font-normal leading-normal text-gray-800 mb-6">
					Silahkan click tombol di bawah untuk login.
				</p>
				<div className="px-24">
					<Link to="/login">
						<Buttom>Login</Buttom>
					</Link>
				</div>
				<p className="text-sm md:text-base font-normal leading-normal text-gray-800 mt-2">
					Terimakasih sudah bergabunug bersama Videobelajar.
				</p>
			</div>
		</div>
	);
};

export default DaftarNotification;
