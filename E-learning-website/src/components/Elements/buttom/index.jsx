import { Children } from "react";

const Buttom = (props) => {
	const { type, children, onClick = () => {} } = props;
	return (
		<button
			type={type}
			onClick={() => onClick()}
			className="bg-green-500 hover:bg-green-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded-lg cursor-pointer select-none my-4 h-auto py-1"
		>
			{children}
		</button>
	);
};

export default Buttom;
