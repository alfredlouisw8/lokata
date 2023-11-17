import { urlFor } from "@/lib/sanity";
import { ProductType } from "@/types";
import { getPlaceholderImage, numberWithCommas } from "@/util";
import Image from "next/image";
import Link from "next/link";

type Props = {
	product: ProductType;
};

export default function Product({ product }: Props) {
	return (
		<Link href={`/product/${product.slug}`} className="h-full pb-3">
			<div className="flex flex-col gap-2 h-full">
				<div className="relative w-full aspect-[2/3] min-w-[132px]">
					<Image
						src={urlFor(product.imagesGallery[0]).url()}
						alt="product"
						fill
						// @ts-ignore
						placeholder={getPlaceholderImage()}
						style={{ objectFit: "cover" }}
					/>
				</div>
				<p className="text-xs lg:text-sm flex-1">{product.title}</p>
				<p className="text-xs lg:text-sm">
					IDR {numberWithCommas(product.price)}
				</p>
			</div>
		</Link>
	);
}
