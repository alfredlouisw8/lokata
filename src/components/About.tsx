import Image from "next/image";

export default function About() {
	return (
		<section className="py-16">
			<div className="container mx-auto px-6">
				<h1 className="text-3xl font-bold">EDITOR&apos;S LETTER</h1>
			</div>

			<div className="flex flex-col md:flex-row-reverse md:items-center md:container md:mx-auto gap-5 relative">
				<div className="relative w-screen aspect-video">
					<Image
						alt="about"
						src="/img/about-bg.png"
						fill
						className="object-cover"
					/>
				</div>
				<div className="container px-6 mx-auto flex flex-col gap-5">
					<p className="text-xs">
						In a world that celebrates individuality and diversity, we believe
						in the power of modesty. Our fashion campaign is a celebration of
						the elegance and strength that comes from dressing with dignity.
					</p>
					<p className="text-xs">
						Join us as we redefine modest wear, not as a limitation, but as an
						empowerment. Let your style reflect the grace and embrace the beauty
						within you. Together, we can make a statement that modesty is a
						choice, and it&apos;s a beautiful one.
					</p>
				</div>
			</div>
		</section>
	);
}
