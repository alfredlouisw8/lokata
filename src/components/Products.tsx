import { ProductType } from "@/types";
import Product from "./Product";

type Props = {
	products: ProductType[];
};

export default function Products({ products }: Props) {
	return (
		<section className="px-6 py-12  container mx-auto">
			<div className="flex items-start gap-3 overflow-auto lg:grid lg:grid-cols-6 lg:gap-6">
				{products.map((product, i) => (
					<Product key={i} product={product} />
				))}
			</div>
		</section>
	);
}
