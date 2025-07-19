"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Header } from "@/components/layout/header";
import { cn } from "@/utils/classname";

const destinations = {
  moon: {
    name: "MOON",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    averageDistance: "384,000 KM",
    estimateTravelTime: "3 DAYS",
    img: {
      src: "/assets/destination/image-moon.webp",
      alt: "Moon",
    },
  },
  mars: {
    name: "MARS",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    averageDistance: "225 MIL. KM",
    estimateTravelTime: "9 MONTHS",
    img: {
      src: "/assets/destination/image-mars.webp",
      alt: "Mars",
    },
  },
  europa: {
    name: "EUROPA",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    averageDistance: "628 MIL. KM",
    estimateTravelTime: "3 YEARS",
    img: {
      src: "/assets/destination/image-europa.webp",
      alt: "Europa",
    },
  },
  titan: {
    name: "TITAN",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    averageDistance: "1.6 BIL. KM",
    estimateTravelTime: "7 YEARS",
    img: {
      src: "/assets/destination/image-titan.webp",
      alt: "Titan",
    },
  },
};

export default function Destination() {
  const pathname = usePathname();
  const router = useRouter();

  const destination = pathname.includes("moon")
    ? "moon"
    : pathname.includes("mars")
      ? "mars"
      : pathname.includes("europa")
        ? "europa"
        : pathname.includes("titan")
          ? "titan"
          : undefined;

  if (destination === undefined) {
    router.replace("/destination/moon");
  }

  return (
    <div className="background-destination min-h-full h-fit">
      <Header />
      <section
        className={cn(
          "flex",
          "flex-col",
          "items-center",
          "text-center",
          "p-6",
          "lg:px-[10rem]",
        )}
      >
        <h2
          className={cn(
            "text-white",
            "font-barlow-condensed",
            "sm:text-[1.5rem]",
            "sm:text-left",
            "sm:self-start",
            "tracking-[2px]",
            "lg:mb-[8rem]",
          )}
        >
          <strong className="text-gray-700 pr-6">01</strong>
          PICK YOUR DESTINATION
        </h2>
        <div
          className={cn(
            "flex",
            "flex-col",
            "lg:flex-row",
            "items-center",
            "lg:justify-between",
            "gap-6",
            "lg:gap-[8rem]",
          )}
        >
          <div
            className={cn(
              "relative",
              "aspect-square",
              "h-[184px]",
              "sm:h-[300px]",
              "lg:h-[480px]",
              "my-8",
              "mt-12",
            )}
          >
            <Image
              src={destination ? destinations[destination].img.src : ""}
              alt={destination ? destinations[destination].img.alt : ""}
              fill
            />
          </div>
          <div>
            <nav className="flex justify-center my-6 lg:justify-start">
              <ul
                className={cn(
                  "flex",
                  "text-white",
                  "font-barlow-condensed",
                  "tracking-[2px]",
                  "h-[2rem]",
                  "gap-8",
                  "[&>li]:w-fit",
                  "[&>li]:h-fit",
                  "[&>li]:pb-2",
                  "[&>li>a]:w-full",
                  "[&>li>a]:h-full",
                )}
              >
                <li
                  className={cn(
                    "border-b-[3px]",
                    "border-transparent",
                    destination === "moon" && "border-white",
                    destination !== "moon" && "hover:border-gray-400",
                  )}
                >
                  <Link href="/destination/moon">MOON</Link>
                </li>
                <li
                  className={cn(
                    "border-b-[3px]",
                    "border-transparent",
                    destination === "mars" && "border-white",
                    destination !== "mars" && "hover:border-gray-400",
                  )}
                >
                  <Link href="/destination/mars">MARS</Link>
                </li>
                <li
                  className={cn(
                    "border-b-[3px]",
                    "border-transparent",
                    destination === "europa" && "border-white",
                    destination !== "europa" && "hover:border-gray-400",
                  )}
                >
                  <Link href="/destination/europa">EUROPA</Link>
                </li>
                <li
                  className={cn(
                    "border-b-[3px]",
                    "border-transparent",
                    destination === "titan" && "border-white",
                    destination !== "titan" && "hover:border-gray-400",
                  )}
                >
                  <Link href="/destination/titan">TITAN</Link>
                </li>
              </ul>
            </nav>
            <div>
              <h3
                className={cn(
                  "text-white",
                  "font-bellefair",
                  "text-[3.5rem]",
                  "lg:text-left",
                  "lg:text-[6rem]",
                )}
              >
                {destination && destinations[destination].name}
              </h3>
              <p
                className={cn(
                  "text-white",
                  "font-barlow",
                  "text-[0.9rem]",
                  "sm:text-[1rem]",
                  "w-[20rem]",
                  "sm:w-[32rem]",
                  "leading-[180%]",
                  "lg:text-left",
                  "lg:text-[1.125rem]",
                )}
              >
                {destination && destinations[destination].description}
              </p>
            </div>
            <div className="h-[2px] w-full bg-[#979797a0] my-6 lg:my-[2.5rem]" />
            <div
              className={cn(
                "flex",
                "flex-col",
                "sm:flex-row",
                "sm:justify-around",
                "gap-6",
                "sm:gap-24",
                "lg:justify-start",
              )}
            >
              <div
                className={cn(
                  "flex",
                  "flex-col",
                  "gap-[0.75rem]",
                  "lg:items-start",
                )}
              >
                <label
                  htmlFor="avg-distance"
                  className={cn(
                    "text-white",
                    "font-barlow-condensed",
                    "tracking-[2px]",
                  )}
                >
                  AVG. DISTANCE
                </label>
                <span
                  id="avg-distance"
                  className={cn(
                    "font-bellefair",
                    "text-white",
                    "text-[1.75rem]",
                  )}
                >
                  {destination && destinations[destination].averageDistance}
                </span>
              </div>
              <div
                className={cn(
                  "flex",
                  "flex-col",
                  "gap-[0.75rem]",
                  "lg:items-start",
                )}
              >
                <label
                  htmlFor="travel-time"
                  className={cn(
                    "text-white",
                    "font-barlow-condensed",
                    "tracking-[2px]",
                  )}
                >
                  EST. TRAVEL TIME
                </label>
                <span
                  id="travel-time"
                  className={cn(
                    "font-bellefair",
                    "text-white",
                    "text-[1.75rem]",
                  )}
                >
                  {destination && destinations[destination].estimateTravelTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
