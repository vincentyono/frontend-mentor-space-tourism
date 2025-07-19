import Image from "next/image";
import Link from "next/link";

export function Logo() {
	return (
		<h1>
			<Link href="/">
				<Image
					src="/assets/shared/logo.svg"
					alt="white circle with dark stylized sparkle or four-pointed star shape"
					width={40}
					height={40}
					className="min-w-[40px] min-h-[40px] sm:min-w-[48px] sm:min-h-[48px]"
				/>
			</Link>
		</h1>
	);
}
