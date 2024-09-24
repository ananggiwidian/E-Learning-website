const FooterSection = () => {
	return (
		<div>
			<div className="bg-gray-100">
				<div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
					<div className="p-5">
						<h3>
							<img src="../src/assets/frame 3.png" alt="" />
						</h3>
					</div>
					<div className="p-5">
						<div className="text-sm uppercase text-indigo-600 font-bold">Resources</div>
						<a className="my-3 block" href="/#">
							Documentation <span className="text-teal-600 text-xs p-1"></span>
						</a>
						<a className="my-3 block" href="/#">
							Tutorials <span className="text-teal-600 text-xs p-1"></span>
						</a>
						<a className="my-3 block" href="/#">
							Support <span className="text-teal-600 text-xs p-1">New</span>
						</a>
					</div>
					<div className="p-5">
						<div className="text-sm uppercase text-indigo-600 font-bold">Support</div>
						<a className="my-3 block" href="/#">
							Help Center <span className="text-teal-600 text-xs p-1"></span>
						</a>
						<a className="my-3 block" href="/#">
							Privacy Policy <span className="text-teal-600 text-xs p-1"></span>
						</a>
						<a className="my-3 block" href="/#">
							Conditions <span className="text-teal-600 text-xs p-1"></span>
						</a>
					</div>
					<div className="p-5">
						<div className="text-sm uppercase text-indigo-600 font-bold">Contact us</div>
						<a className="my-3 block" href="/#">
							BSD, Floor 4 Jakarta, Indonesia
							<span className="text-teal-600 text-xs p-1"></span>
						</a>
						<a className="my-3 block" href="/#">
							Videobelajar@company.com
							<span className="text-teal-600 text-xs p-1"></span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FooterSection;
