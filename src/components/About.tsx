import Image from "next/image";

export default function About() {
	return (
		<section className="py-16 md:py-40 text-center">
			<div className="container mx-auto px-6 md:px-40 flex flex-col gap-10 items-center">
				<h1 className="text-3xl font-bold">EDITOR&apos;S LETTER</h1>
				<Image src="/img/logo.png" alt="logo" width={75} height={75} />
				<p className="text-sm">
					In a world that celebrates individuality and diversity, we believe in
					the power of modesty. Our fashion campaign is a celebration of the
					elegance and strength that comes from dressing with dignity.
				</p>
				<p className="text-sm">
					Join us as we redefine modest wear, not as a limitation, but as an
					empowerment. Let your style reflect the grace and embrace the beauty
					within you. Together, we can make a statement that modesty is a
					choice, and it&apos;s a beautiful one.
				</p>
			</div>
		</section>
	);
}
