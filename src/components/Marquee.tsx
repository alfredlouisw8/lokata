export default function Marquee() {
	const textClass = "mx-10 lg:text-3xl";
	return (
		<section className="h-14 lg:h-24 bg-gray text-primary flex items-center">
			<div className="relative flex overflow-x-hidden items-center">
				<div className="py-2 animate-marquee whitespace-nowrap">
					{[...Array(3)].map((_, i) => (
						<span key={i} className="mx-10 lg:text-3xl">
							#EMBRACE THE BEAUTY WITHIN YOU
						</span>
					))}
				</div>

				<div className="absolute top-0 py-2 animate-marquee2 whitespace-nowrap">
					{[...Array(3)].map((_, i) => (
						<span key={i} className="mx-10 lg:text-3xl">
							#EMBRACE THE BEAUTY WITHIN YOU
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
