import About from "@/components/About";
import Collection from "@/components/Collection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Products from "@/components/Products";
import { getProducts, getThumbnail } from "@/queries";
import Image from "next/image";

export default async function Home() {
	const thumbnails = await getThumbnail();
	const products = await getProducts();
	return (
		<>
			<Hero
				desktopImages={thumbnails.desktopImages}
				mobileImages={thumbnails.mobileImages}
			/>
			<Marquee />
			<About />
			<Collection />
			<Products products={products} />
		</>
	);
}
