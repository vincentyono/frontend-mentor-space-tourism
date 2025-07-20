"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Header } from "@/components/layout/header";
import { cn } from "@/utils/classname";

const crews = {
	"douglas-hurley": {
		name: "DOUGLAS HURLEY",
		title: "COMMANDER",
		description:
			"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
		img: {
			src: "/assets/crew/image-douglas-hurley.webp",
			alt: "Douglas Hurley",
		},
	},
	"mark-shuttleworth": {
		name: "MARK SHUTTLEWORTH",
		title: "MISSION SPECIALIST",
		description:
			"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
		img: {
			src: "/assets/crew/image-mark-shuttleworth.webp",
			alt: "Mark Shuttleworth",
		},
	},
	"victor-glover": {
		name: "VICTOR GLOVER",
		title: "PILOT",
		description:
			"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
		img: {
			src: "/assets/crew/image-victor-glover.webp",
			alt: "Victor Glover",
		},
	},
	"anousheh-ansari": {
		name: "ANOUSHEH ANSARI",
		title: "FLIGHT ENGINEER",
		description:
			"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
		img: {
			src: "/assets/crew/image-anousheh-ansari.webp",
			alt: "Anousheh Ansari",
		},
	},
};

export default function Crew() {
	const pathname = usePathname();
	const router = useRouter();

	const crew = pathname.includes("douglas-hurley")
		? "douglas-hurley"
		: pathname.includes("mark-shuttleworth")
			? "mark-shuttleworth"
			: pathname.includes("victor-glover")
				? "victor-glover"
				: pathname.includes("anousheh-ansari")
					? "anousheh-ansari"
					: undefined;

	if (crew === undefined) {
		router.replace("/crew/douglas-hurley");
	}

	return (
		<div className="background-crew min-h-full h-fit">
			<Header />
			<section
				className={cn(
					"flex",
					"flex-col",
					"items-center",
					"px-6",
					"lg:px-[12rem]",
					"lg:justify-between",
				)}
			>
				<h2
					className={cn(
						"flex",
						"gap-6",
						"font-barlow-condensed",
						"tracking-[2px]",
						"sm:text-[1.25rem]",
						"lg:text-[1.75rem]",
						"mb-[4rem]",
						"sm:self-start",
						"sm:mt-[2.5rem]",
					)}
				>
					<strong className="text-gray-600">02</strong>
					<span className="text-white">MEET YOUR CREW</span>
				</h2>
				<div
					className={cn(
						"flex",
						"flex-col",
						"lg:flex-row",
						"lg:items-center",
						"lg:gap-[2rem]",
						"lg:justify-between",
						"lg:w-full",
					)}
				>
					<div className={cn("flex", "flex-col")}>
						<div className={cn("flex", "flex-col", "gap-2")}>
							<span
								className={cn(
									"text-gray-600",
									"font-bellefair",
									"text-[1.125rem]",
									"text-center",
									"sm:text-[1.5rem]",
									"lg:text-[2rem]",
									"lg:text-left",
								)}
							>
								{crew && crews[crew].title}
							</span>
							<h3
								className={cn(
									"text-white",
									"font-bellefair",
									"text-[1.5rem]",
									"text-center",
									"sm:text-[2.5rem]",
									"lg:text-[3.5rem]",
									"lg:text-left",
								)}
							>
								{crew && crews[crew].name}
							</h3>
							<p
								className={cn(
									"text-white",
									"font-barflow",
									"text-center",
									"w-[20rem]",
									"sm:w-[512px]",
									"py-6",
									"lg:text-[1.125rem]",
									"lg:text-left",
								)}
							>
								{crew && crews[crew].description}
							</p>
						</div>
						<div
							className={cn(
								"flex",
								"gap-4",
								"[&>li]:w-[10px]",
								"[&>li]:h-[10px]",
								"justify-center",
								"my-8",
								"lg:justify-start",
								"lg:gap-[2.5rem]",
							)}
						>
							<Link
								href="/crew/douglas-hurley"
								className={cn(
									"bg-[#979797a0]",
									pathname.includes("douglas-hurley") && "bg-white",
									!pathname.includes("douglas-hurley") && "hover:bg-[#979797]",
									"h-[10px]",
									"w-[10px]",
									"rounded-full",
								)}
							></Link>
							<Link
								href="/crew/mark-shuttleworth"
								className={cn(
									"bg-[#979797a0]",
									pathname.includes("mark-shuttleworth") && "bg-white",
									!pathname.includes("mark-shuttleworth") &&
										"hover:bg-[#979797]",
									"h-[10px]",
									"w-[10px]",
									"rounded-full",
								)}
							></Link>
							<Link
								href="/crew/victor-glover"
								className={cn(
									"bg-[#979797a0]",
									pathname.includes("victor-glover") && "bg-white",
									!pathname.includes("victor-glover") && "hover:bg-[#979797]",
									"h-[10px]",
									"w-[10px]",
									"rounded-full",
								)}
							></Link>
							<Link
								href="/crew/anousheh-ansari"
								className={cn(
									"bg-[#979797a0]",
									pathname.includes("anousheh-ansari") && "bg-white",
									!pathname.includes("anousheh-ansari") && "hover:bg-[#979797]",
									"h-[10px]",
									"w-[10px]",
									"rounded-full",
								)}
							></Link>
						</div>
					</div>
					<div
						className={cn(
							"relative",
							"order-last",
							"w-[20rem]",
							"h-[20rem]",
							"sm:w-[480px]",
							"sm:h-[540px]",
						)}
					>
						<Image
							src={crew ? crews[crew].img.src : ""}
							alt={crew ? crews[crew].img.alt : ""}
							fill
							style={{ objectFit: "contain" }}
							className="lg:min-w-[480px]"
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
