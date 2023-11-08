import Image from "next/image";
import Link from "next/link";

export default function Logo({ absolute }: { absolute?: boolean }) {
	return (
		<div
			className={`${
				absolute && "absolute left-1/2 transform -translate-x-1/2"
			}  z-10 md:w-28 md:h-28 h-14 w-14`}
		>
			<Link href="/">
				<Image alt="Logo" src="/img/logo.png" fill className="object-contain" />
			</Link>
		</div>
	);
}
