import Image from "next/image";

export default function Footer() {
	const createContact = async (formData: FormData) => {
		"use server";

		const body = {
			email: formData.get("email"),
		};

		await fetch("https://api.brevo.com/v3/contacts", {
			method: "POST",
			//@ts-ignore
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				"api-key": process.env.BREVO_API_KEY,
			},
			body: JSON.stringify(body),
		});
	};

	return (
		<section className="bg-gray py-10 text-primary">
			<div className="container mx-auto px-6 flex flex-col md:grid md:grid-rows-2 md:grid-cols-4  gap-10">
				<div className="col-span-2 hidden md:block md:order-1">
					<Image
						alt="logo"
						src="/img/logo-footer.png"
						width={150}
						height={150}
					/>
				</div>
				<div className="col-span-2 order-1 md:order-2 flex items-center">
					<h1 className="text-3xl md:text-5xl">
						GET<br></br>IN TOUCH
					</h1>
				</div>
				<div className="flex-col gap-4 hidden md:flex md:order-3">
					<h1 className="text-xl mb-3">NAVIGATION</h1>
					<a href="#main" className="text-xs underline">
						MAIN
					</a>
					<a href="#about" className="text-xs underline">
						ABOUT LOKATA
					</a>
					<a href="#catalogue" className="text-xs underline">
						CATALOGUE
					</a>
				</div>
				<div className="flex flex-col gap-4 order-4">
					<h1 className="text-xl mb-3">NEWSLETTER</h1>
					<p className="text-xs">
						Lorem ipsum dolor sit amet lorem ipsum dolor sit ame
					</p>
					<form className="flex items-center border-b" action={createContact}>
						<input
							type="email"
							name="email"
							className="outline-none flex-1 bg-transparent text-xs p-1"
							placeholder="enter email address"
						/>
						<button type="submit">
							<Image alt="submit" src="/img/arrow.png" width={20} height={20} />
						</button>
					</form>
				</div>
				<div className="flex flex-col gap-4 order-2 md:order-5">
					<h1 className="text-xl">CONTACTS</h1>
					<p className="text-xs underline">+ 62 85 2167 7687</p>
					<p className="text-xs underline">lokatabrand@gmail.com</p>
					<p className="text-xs underline">
						Jalan Bukit Mas blok H no.325,<br></br>Surabaya, Indonesia
					</p>
				</div>
				<div className="flex flex-col gap-4 order-3 md:order-6">
					<h1 className="text-xl mb-3">SOCIAL MEDIA</h1>
					<div className="flex gap-4">
						<div className="relative w-6 h-6">
							<Image alt="instagram" src="/img/instagram.png" fill />
						</div>
						<div className="relative w-6 h-6">
							<Image alt="whatsapp" src="/img/whatsapp.png" fill />
						</div>
						<div className="relative w-6 h-6">
							<Image alt="tiktok" src="/img/tiktok.png" fill />
						</div>
					</div>
				</div>
			</div>
			<div className="text-center pt-10 text-xs">COPYRIGHT© 2023 LOKATA</div>
		</section>
	);
}
