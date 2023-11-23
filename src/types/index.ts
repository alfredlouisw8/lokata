export type ImageSource = {
	_type: string;
	asset: {
		_ref: string;
		_type: string;
	};
};

export type ThumbnailType = {
	_id: string;
	title: string;
	description: string;
	desktopImages: ImageSource[];
	mobileImages: ImageSource[];
	tiktok: string;
	whatsapp: string;
	instagram: string;
	shopee: string;
};

export type ProductType = {
	_id: string;
	title: string;
	slug: string;
	price: number;
	description: string;
	measurement: string;
	material: string;
	colors: string;
	imagesGallery: ImageSource[];
};
