export default function Marquee() {
	return (
		<section className="h-14 bg-gray text-primary flex items-center">
			<div className="relative flex overflow-x-hidden items-center flex-1">
				<div className="py-2 animate-marquee whitespace-nowrap">
					{[...Array(4)].map((_, i) => (
						<span key={i} className="mx-10 ">
							#EMBRACE THE BEAUTY WITHIN YOU
						</span>
					))}
				</div>

				<div className="absolute top-0 py-2 animate-marquee2 whitespace-nowrap">
					{[...Array(4)].map((_, i) => (
						<span key={i} className="mx-10 ">
							#EMBRACE THE BEAUTY WITHIN YOU
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
