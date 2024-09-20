import { Link } from "react-router-dom";

const Card = (props) => {
	const { Src, ProductName, Rincian, Price, DiscountPrice } = props;
	return (
		<div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
			<Link to={ProductName}>
				<img src={Src} alt="Product" class="h-80 w-72 object-fit rounded-t-xl" />
				<div className="px-4 py-3 w-72">
					<p className="text-lg font-bold text-black truncate block capitalize">{ProductName}</p>
					<span className="text-gray-400 mr-3 uppercase text-xs">{Rincian}</span>
					<div className="flex items-center">
						<p className="text-lg font-semibold text-black cursor-auto my-3">{DiscountPrice}</p>
						<del>
							<p className="text-sm text-gray-600 cursor-auto ml-2">{Price}</p>
						</del>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Card;
