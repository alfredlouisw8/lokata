import Logo from "@/components/Logo";
import Marquee from "@/components/Marquee";
import ProductDisplay from "@/components/ProductDisplay";
import SimiliarProducts from "@/components/SimiliarProducts";
import { getProduct, getSimilarProducts } from "@/queries";
import Image from "next/image";

export default async function Page({
	params: { slug },
}: {
	params: { slug: string };
}) {
	const product = await getProduct(slug);
	const similarProducts = await getSimilarProducts(slug);
	return (
		<section>
			<div className="relative">
				<Logo />
			</div>
			<Marquee />
			<ProductDisplay product={product} />
			<SimiliarProducts products={similarProducts} />
		</section>
	);
}
