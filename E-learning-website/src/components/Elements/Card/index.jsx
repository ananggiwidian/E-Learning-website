import Card from "./Card";

const Products = [
	{
		id: 1,
		ProductName: "Finance Analysis 1",
		Description:
			"Cari tahu strategi penguasaan keahlian yang dibutuhkan oleh para karyawan perusahaan papan atas",
		CardSrc: "./src/assets/image-1.png",
		DiscountPrice: "Rp. 100.000",
		Price: "Rp. 200.000",
	},
	{
		id: 2,
		ProductName: "Finance Analysis 2",
		Description:
			"Cari tahu strategi penguasaan keahlian yang dibutuhkan oleh para karyawan perusahaan papan atas",
		CardSrc: "./src/assets/image-2.png",
		DiscountPrice: "Rp. 100.000",
		Price: "Rp. 200.000",
	},
	{
		id: 3,
		ProductName: "Finance Analysis 3",
		Description:
			"Cari tahu strategi penguasaan keahlian yang dibutuhkan oleh para karyawan perusahaan papan atas",
		CardSrc: "./src/assets/image-3.png",
		DiscountPrice: "Rp. 100.000",
		Price: "Rp. 200.000",
	},
	{
		id: 4,
		ProductName: "Finance Analysis 4",
		Description:
			"Cari tahu strategi penguasaan keahlian yang dibutuhkan oleh para karyawan perusahaan papan atas",
		CardSrc: "./src/assets/image-4.png",
		DiscountPrice: "Rp. 100.000",
		Price: "Rp. 200.000",
	},
	{
		id: 5,
		ProductName: "Finance Analysis 5",
		Description:
			"Cari tahu strategi penguasaan keahlian yang dibutuhkan oleh para karyawan perusahaan papan atas",
		CardSrc: "./src/assets/image-5.png",
		DiscountPrice: "Rp. 100.000",
		Price: "Rp. 200.000",
	},
	{
		id: 6,
		ProductName: "Finance Analysis 6",
		Description:
			"Cari tahu strategi penguasaan keahlian yang dibutuhkan oleh para karyawan perusahaan papan atas",
		CardSrc: "./src/assets/image-6.png",
		DiscountPrice: "Rp. 100.000",
		Price: "Rp. 200.000",
	},
	{
		id: 7,
		ProductName: "Finance Analysis 7",
		Description:
			"Cari tahu strategi penguasaan keahlian yang dibutuhkan oleh para karyawan perusahaan papan atas",
		CardSrc: "./src/assets/image-7.png",
		DiscountPrice: "Rp. 100.000",
		Price: "Rp. 200.000",
	},
	{
		id: 8,
		ProductName: "Finance Analysis 8",
		Description:
			"Cari tahu strategi penguasaan keahlian yang dibutuhkan oleh para karyawan perusahaan papan atas",
		CardSrc: "./src/assets/image-8.png",
		DiscountPrice: "Rp. 100.000",
		Price: "Rp. 200.000",
	},
	{
		id: 9,
		ProductName: "Finance Analysis 9",
		Description:
			"Cari tahu strategi penguasaan keahlian yang dibutuhkan oleh para karyawan perusahaan papan atas",
		CardSrc: "./src/assets/image-9.png",
		DiscountPrice: "Rp. 100.000",
		Price: "Rp. 200.000",
	},
];

const CardProduct = (e) => {
	const CardClick = () => {
		window.location.href = "/{{Product.id}}";
	};
	return (
		<div className="flex flex-wrap justift-center cursor-default" onClick={CardClick}>
			{Products.map((Product) => (
				<Card key={Product.id} className="flex flex-col justify-between">
					<Card.Img CardSrc={Product.CardSrc}></Card.Img>
					<Card.Body ProductName={Product.ProductName} Description={Product.Description} />
					<Card.Price DiscountPrice={Product.DiscountPrice} Price={Product.Price} />
				</Card>
			))}
		</div>
	);
};

export default CardProduct;
