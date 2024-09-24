import { Link } from "react-router-dom";

const Card = (props) => {
	const { children } = props;
	return (
		<div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl m-5">
			{children}
		</div>
	);
};

const CardBody = (props) => {
	const { ProductName, Description } = props;
	return (
		<div className="px-4 py-3 w-72">
			<p className="text-lg font-bold text-black truncate block capitalize">{ProductName}</p>
			<span className="text-gray-400 mr-3 uppercase text-xs">{Description}</span>
		</div>
	);
};

const CardImg = (props) => {
	const { CardSrc } = props;
	return (
		<div>
			<img src={CardSrc} alt="Product" className="h-80 w-72 object-fit rounded-t-xl" />
		</div>
	);
};

const CardPrice = (props) => {
	const { DiscountPrice, Price } = props;
	return (
		<div className=" px-4 py-3 w-72 flex items-center">
			<p className="text-lg font-semibold text-black cursor-auto my-3">{DiscountPrice}</p>
			<del>
				<p className="text-sm text-gray-600 cursor-auto ml-2">{Price}</p>
			</del>
		</div>
	);
};

Card.Img = CardImg;
Card.Body = CardBody;
Card.Price = CardPrice;

export default Card;
