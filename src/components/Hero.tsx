"use client";
import Image from "next/image";
import SliderSlick from "./Slider";
import useWindowSize from "@/hooks/useWindowSize";
import dynamic from "next/dynamic";
import Logo from "./Logo";
import { ImageSource } from "@/types";
import { urlFor } from "@/lib/sanity";
import { getPlaceholderImage } from "@/util";

type Props = {
	desktopImages: ImageSource[];
	mobileImages: ImageSource[];
};

export default function Hero({ desktopImages, mobileImages }: Props) {
	const settings = {
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: false,
		arrows: false,
		dots: true,
		dotsClass: "slick-dots slick-dots-tw",
	};

	const { height, width } = useWindowSize();

	const images = width! < 768 ? mobileImages : desktopImages;
	console.log(images);
	return (
		<section className="relative mb-[-7px]">
			<Logo absolute />
			{width ? (
				<SliderSlick settings={settings}>
					{images.map((image, i) => (
						<div key={i} className={`w-full h-screen relative`}>
							<Image
								src={urlFor(image).url()}
								fill
								alt="Image1"
								className="object-cover object-top"
								// @ts-ignore
								placeholder={getPlaceholderImage()}
							/>
						</div>
					))}
				</SliderSlick>
			) : (
				<div className={`w-full h-screen relative`}>
					<Image
						src={getPlaceholderImage()}
						fill
						alt="Image1"
						className="object-cover object-top"
					/>
				</div>
			)}
		</section>
	);
}
