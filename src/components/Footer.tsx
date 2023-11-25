"use client";
import { createContact } from "@/actions";
import { ThumbnailType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

type Props = {
	socials: Partial<ThumbnailType>;
};

export default function Footer({ socials }: Props) {
	const [email, setEmail] = useState("");
	async function handleSubmit(e: FormEvent) {
		e.preventDefault();
		await createContact(email);
		setEmail("");
		toast.success(
			"Welcome to the club! Get ready to be the first who receive our special deals."
		);
	}

	return (
		<section className="bg-gray py-5 text-primary">
			<div className="container mx-auto px-6 flex flex-col md:grid md:grid-rows-2 md:grid-cols-4  gap-5">
				<div className="col-span-2 hidden md:block md:order-1">
					<Image
						alt="logo"
						src="/img/logo-footer.png"
						width={150}
						height={150}
					/>
				</div>
				<div className="col-span-2 order-1 md:order-2 flex items-center">
					<h1 className="text-3xl">
						GET<br></br>IN TOUCH
					</h1>
				</div>
				<div className="flex-col gap-4 hidden md:flex md:order-3">
					<h1 className="text-xl mb-3">NAVIGATION</h1>
					<Link href="/#main" className="text-xs underline">
						MAIN
					</Link>
					<Link href="/#about" className="text-xs underline">
						ABOUT LOKATA
					</Link>
					<Link href="/#catalogue" className="text-xs underline">
						CATALOGUE
					</Link>
				</div>
				<div className="flex flex-col gap-4 order-4">
					<h1 className="text-xl mb-3">NEWSLETTER</h1>
					<p className="text-xs">
						Be the first to know our special deals and limited release.
					</p>
					<form className="flex items-center border-b" onSubmit={handleSubmit}>
						<input
							type="email"
							name="email"
							className="outline-none flex-1 bg-transparent text-xs p-1"
							placeholder="enter email address"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<button type="submit">
							<Image alt="submit" src="/img/arrow.png" width={20} height={20} />
						</button>
					</form>
				</div>
				<div className="flex flex-col gap-4 order-2 md:order-5">
					<h1 className="text-xl">CONTACTS</h1>
					<a href={socials.whatsapp} target="_blank">
						<p className="text-xs underline">+62 859 5409 4998</p>
					</a>
					<a href="mailto:wear.lokata@gmail.com" target="_blank">
						<p className="text-xs underline">wear.lokata@gmail.com</p>
					</a>
					<p className="text-xs underline">
						Ruko Northwest Boulevard NV 10 No.31,<br></br>Surabaya, Indonesia
					</p>
				</div>
				<div className="flex flex-col gap-4 order-3 md:order-6">
					<h1 className="text-xl mb-3">SOCIAL MEDIA</h1>
					<div className="flex gap-4">
						<div className="relative w-6 h-6">
							<a href={socials.instagram} target="_blank">
								<Image alt="instagram" src="/img/instagram.png" fill />
							</a>
						</div>
						<div className="relative w-6 h-6">
							<a href={socials.whatsapp} target="_blank">
								<Image alt="whatsapp" src="/img/whatsapp.png" fill />
							</a>
						</div>
						<div className="relative w-6 h-6">
							<a href={socials.tiktok} target="_blank">
								<Image alt="tiktok" src="/img/tiktok.png" fill />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="text-center pt-10 text-xs">COPYRIGHT© 2023 LOKATA</div>
		</section>
	);
}
