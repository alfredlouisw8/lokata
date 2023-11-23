import Image from "next/image";

export default function Collection() {
	return (
		<section
			className="px-6 py-12  flex flex-col gap-3 container mx-auto"
			id="catalogue"
		>
			<p className="text-sm underline">FIRST COLLECTION 2023</p>
			<div className="w-full aspect-video relative">
				<Image src="/img/collection.png" alt="FIRST COLLECTION 2023" fill />
			</div>
		</section>
	);
}
