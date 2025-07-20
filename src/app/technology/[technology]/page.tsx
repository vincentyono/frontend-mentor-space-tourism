"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Header } from "@/components/layout/header";
import { cn } from "@/utils/classname";

const technologies = {
	"launch-vehicle": {
		name: "LAUNCH VEHICLE",
		description:
			"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
		imgPortrait: {
			src: "/assets/technology/image-launch-vehicle-portrait.jpg",
			alt: "launching rocket",
		},
		imgLandscape: {
			src: "/assets/technology/image-launch-vehicle-landscape.jpg",
			alt: "launching rocket",
		},
	},
	spaceport: {
		name: "SPACEPORT",
		description:
			"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
		imgPortrait: {
			src: "/assets/technology/image-spaceport-portrait.jpg",
			alt: "spaceport",
		},
		imgLandscape: {
			src: "/assets/technology/image-spaceport-landscape.jpg",
			alt: "spaceport",
		},
	},
	"space-capsule": {
		name: "SPACE CAPSULE",
		description:
			"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
		imgPortrait: {
			src: "/assets/technology/image-space-capsule-portrait.jpg",
			alt: "space capsule",
		},
		imgLandscape: {
			src: "/assets/technology/image-space-capsule-landscape.jpg",
			alt: "space capsule",
		},
	},
};

export default function Technology() {
	const pathname = usePathname();
	const router = useRouter();

	const technology = pathname.includes("launch-vehicle")
		? "launch-vehicle"
		: pathname.includes("spaceport")
			? "spaceport"
			: pathname.includes("space-capsule")
				? "space-capsule"
				: undefined;

	if (technology === undefined) {
		router.replace("/technology/launch-vehicle");
	}

	return (
		<div className={cn("background-technology", "min-h-full", "h-fit")}>
			<Header />
			<section
				className={cn(
					"flex",
					"flex-col",
					"items-center",
					"py-8",
					"lg:items-end",
					"lg:pl-[10rem]",
				)}
			>
				<h2
					className={cn(
						"font-barlow-condensed",
						"tracking-[2px]",
						"flex",
						"gap-8",
						"sm:text-left",
						"sm:self-start",
						"sm:ml-[2.5rem]",
						"sm:text-[1.125rem]",
						"lg:text-[1.75rem]",
					)}
				>
					<strong className={cn("text-gray-600", "")}>03</strong>
					<span className={cn("text-white")}>SPACE LAUNCH 101</span>
				</h2>
				<div
					className={cn(
						"flex",
						"flex-col",
						"justify-center",
						"lg:flex-row",
						"lg:w-full",
						"lg:justify-between",
						"lg:gap-16",
					)}
				>
					<div
						className={cn(
							"flex",
							"justify-center",
							"gap-4",
							"text-white",
							"font-bellefair",
							"text-[1.125rem]",
							"pt-8",
							"pb-10",
							"order-2",
							"lg:flex-col",
							"lg:order-1",
						)}
					>
						<Link
							className={cn(
								"flex",
								"justify-center",
								"items-center",
								"rounded-full",
								"border-2",
								"border-[#ffffff1f]",
								"w-[2.5rem]",
								"h-[2.5rem]",
								"lg:w-[5rem]",
								"lg:h-[5rem]",
								"text-[1.125rem]",
								"lg:text-[2rem]",
								technology === "launch-vehicle" && "bg-white text-blue-900",
								technology !== "launch-vehicle" && "hover:border-white",
								"transition-colors",
								"duration-300",
							)}
							href="/technology/launch-vehicle"
						>
							1
						</Link>
						<Link
							className={cn(
								"flex",
								"justify-center",
								"items-center",
								"rounded-full",
								"border-2",
								"border-[#ffffff1f]",
								"w-[2.5rem]",
								"h-[2.5rem]",
								"lg:w-[5rem]",
								"lg:h-[5rem]",
								"text-[1.125rem]",
								"lg:text-[2rem]",
								technology === "space-capsule" && "bg-white text-blue-900",
								technology !== "space-capsule" && "hover:border-white",
								"transition-colors",
								"duration-300",
							)}
							href="/technology/space-capsule"
						>
							2
						</Link>
						<Link
							className={cn(
								"flex",
								"justify-center",
								"items-center",
								"rounded-full",
								"border-2",
								"border-[#ffffff1f]",
								"w-[2.5rem]",
								"h-[2.5rem]",
								"lg:w-[5rem]",
								"lg:h-[5rem]",
								"text-[1.125rem]",
								"lg:text-[2rem]",
								technology === "spaceport" && "bg-white text-blue-900",
								technology !== "spaceport" && "hover:border-white",
								"transition-colors",
								"duration-300",
							)}
							href="/technology/spaceport"
						>
							3
						</Link>
					</div>
					<div
						className={cn(
							"relative",
							"w-[768px]",
							"h-[258px]",
							"sm:h-[358px]",
							"lg:h-[734px]",
							"lg:min-w-[608px]",
							"order-1",
							"my-8",
							"lg:order-3",
						)}
					>
						<Image
							src={technology ? technologies[technology].imgPortrait.src : ""}
							alt={technology ? technologies[technology].imgPortrait.alt : ""}
							objectFit="contain"
							fill
						/>
					</div>
					<div
						className={cn(
							"flex",
							"flex-col",
							"justify-center",
							"gap-4",
							"order-3",
							"items-center",
							"lg:order-2",
							"lg:items-start",
						)}
					>
						<span
							className={cn(
								"text-gray-600",
								"font-bellefair",
								"text-[1.125rem]",
								"text-center",
								"sm:text-[1.5rem]",
								"lg:text-left",
								"lg:text-[2rem]",
							)}
						>
							THE TERMINOLOGY...
						</span>
						<h3
							className={cn(
								"text-white",
								"font-bellefair",
								"text-[1.5rem]",
								"text-center",
								"sm:text-[2.5rem]",
								"lg:text-left",
								"lg:text-[3.5rem]",
							)}
						>
							{technology && technologies[technology].name}
						</h3>
						<p
							className={cn(
								"text-white",
								"font-barlow",
								"text-[0.9rem]",
								"leading-[180%]",
								"text-center",
								"w-[327px]",
								"sm:w-[512px]",
								"sm:text-[1rem]",
								"lg:text-left",
								"lg:text-[1.125rem]",
							)}
						>
							{technology && technologies[technology].description}
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
