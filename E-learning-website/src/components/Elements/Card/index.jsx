import Buttom from "../buttom";
import Card from "./Card";

const Products = [
	{
		id: 1,
		ProductName: "Product 1",
		Description: "Description 1",
		CardSrc: "./src/assets/image-1.png",
		DiscountPrice: "Rp. 100.000",
		Price: "Rp. 200.000",
	},
	{
		id: 2,
		ProductName: "Product 1",
		Description: "Description 1",
		CardSrc: "./src/assets/image-1.png",
		DiscountPrice: "Rp. 100.000",
		Price: "Rp. 200.000",
	},
];

const CardProduct = () => {
	return (
		<div className="flex flex-wrap justift-center ">
			{Products.map((Product) => (
				<Card key={Product.id}>
					<Card.Img CardSrc={Product.CardSrc}></Card.Img>
					<Card.Body ProductName={Product.ProductName} Description={Product.Description} />
					<Card.Price DiscountPrice={Product.DiscountPrice} Price={Product.Price} />
					<Buttom>Beli</Buttom>
				</Card>
			))}
		</div>
	);
};

export default CardProduct;
