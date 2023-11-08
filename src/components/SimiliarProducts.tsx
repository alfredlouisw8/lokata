import { ProductType } from "@/types";
import Product from "./Product";
import Products from "./Products";

type Props = {
	products: ProductType[];
};

export default function SimiliarProducts({ products }: Props) {
	return (
		<section className="container mx-auto px-6 flex flex-col gap-5 py-10">
			<p className="text-xs underline md:text-xl">SIMILAR PRODUCTS</p>
			<div className="flex items-start gap-3 overflow-auto lg:grid lg:grid-cols-6 lg:gap-6">
				{products.map((product, i) => (
					<Product key={i} product={product} />
				))}
			</div>
		</section>
	);
}
