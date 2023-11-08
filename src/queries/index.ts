import { sanityClient } from "@/lib/sanity";
import { ProductType, ThumbnailType } from "@/types";

export const getProducts = (): Promise<ProductType[]> => {
	const productsQuery = `*[_type == "product"][0...12] | order(order asc) {
    _id,
    title,
    price,
    'slug': slug.current,
    description,
    measurement,
    colors,
    material,
    imagesGallery
  }`;

	return sanityClient.fetch(productsQuery);
};

export const getProduct = (slug: string): Promise<ProductType> => {
	const productsQuery = `*[_type == "product" && slug.current == '${slug}'][0] {
    _id,
    title,
    price,
    'slug': slug.current,
    description,
    measurement,
    colors,
    material,
    imagesGallery
  }`;

	return sanityClient.fetch(productsQuery);
};

export const getSimilarProducts = (slug: string): Promise<ProductType> => {
	const productsQuery = `*[_type == "product" && slug.current != '${slug}'][0...6] {
    _id,
    title,
    price,
    'slug': slug.current,
    description,
    measurement,
    colors,
    material,
    imagesGallery
  }`;

	return sanityClient.fetch(productsQuery);
};

export const getThumbnail = (): Promise<ThumbnailType> => {
	const thumbnailQuery = `*[_type == "thumbnail"][0] {
    title,
		description,
    desktopImages,
		mobileImages
  }`;

	return sanityClient.fetch(thumbnailQuery);
};
