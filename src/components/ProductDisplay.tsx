import { urlFor } from "@/lib/sanity";
import { ProductType } from "@/types";
import { getPlaceholderImage, numberWithCommas } from "@/util";
import Image from "next/image";

type Props = {
	product: ProductType;
};

export default function ProductDisplay({ product }: Props) {
	return (
		<section className="container py-10 px-6 mx-auto">
			<div className="flex-wrap flex-col md:flex md:flex-row-reverse relative">
				<div className="flex items-start gap-8 overflow-auto pb-5 lg:w-4/5  md:w-4/6 md:flex-col lg:pl-[10%] lg:pr-[30%] md:pl-[5%] md:pr-[20%]">
					{product.imagesGallery.map((image, i) => (
						<div
							key={i}
							className="relative w-full aspect-[2/3] min-w-[240px] md:max-w-[540px]"
						>
							<Image
								src={urlFor(image).url()}
								alt={product.title}
								fill // @ts-ignore
								placeholder={getPlaceholderImage()}
								style={{ objectFit: "cover" }}
							/>
						</div>
					))}
				</div>
				<div className="flex flex-col gap-6 md:w-2/6 lg:w-1/5 sticky top-6 self-start">
					<h1 className="text-xl">{product.title}</h1>
					<p className="text-xs">{product.description}</p>
					<p className="text-xs">IDR {numberWithCommas(product.price)}</p>
					<p className="text-xs">
						Measurement: {product.measurement}
						<br></br>Material: {product.material}
						<br></br>Colors:
						{product.colors}
					</p>
					<p className="text-xs">
						*The colors may be slightly difference due to camera flash or the
						setting of your display screen*
					</p>
					<a href="#" className="underline text-xs bg-yellow py-1 px-2 w-fit">
						SHOP NOW
					</a>
				</div>
			</div>
		</section>
	);
}
