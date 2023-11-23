import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { getSocials } from "@/queries";

export const metadata: Metadata = {
	title: "Lokata",
	description:
		"In a world that celebrates individuality and diversity, we believe in the power of modesty. Our fashion campaign is a celebration of the elegance and strength that comes from dressing with dignity.",
};

export const revalidate = 60;

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const socials = await getSocials();
	return (
		<html lang="en">
			<body className={`bg-primary text-secondary`}>
				{children}
				<Footer socials={socials} />
			</body>
		</html>
	);
}
