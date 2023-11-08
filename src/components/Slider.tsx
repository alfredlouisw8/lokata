"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";

type Props = {
	settings: Settings;
	children: React.ReactNode;
};

export default function SliderSlick({ settings, children }: Props) {
	return <Slider {...settings}>{children}</Slider>;
}
