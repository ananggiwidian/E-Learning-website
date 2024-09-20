const Menu = (props) => {
	const {
		className = "px-2 hover:border-b-2 dark:hover:border-blue-500 hover:border-yellow-600 rounded-b-md ",
	} = props;
	return (
		<div className="h-fit flex flex-col items-center justify-center bg-gray-900 dark:bg-white p-1">
			<div className=" text-sm sm:text-base sm:w-fit xs:w-[90%] sm:px-4 py-2 rounded-sm flex md:flex-no-wrap xs:flex-wrap md:gap-4 xs:gap-1 justify-center dark:bg-gray-200 bg-gray-800 text-white dark:text-black cursor-pointer md:text-lg md:font-semibold xs:text-sm ">
				<div className={className}>Semua Kelas</div>
				<div className={className}>Pemasaran</div>
				<div className={className}>Desain</div>
				<div className={className}>Pengembangan Diri</div>
				<div className={className}>Bisnis</div>
			</div>
		</div>
	);
};

export default Menu;
