import { ImageSource } from "@/types";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

const config = {
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	apiVersion: "2022-03-07",
	useCdn: false,
};

export const sanityClient = createClient(config);

export const urlFor = (source: ImageSource) =>
	imageUrlBuilder(sanityClient).image(source);
