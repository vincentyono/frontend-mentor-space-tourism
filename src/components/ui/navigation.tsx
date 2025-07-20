"use client";

import { animate } from "animejs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/classname";

export function Navigation() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={wrapperRef} className="relative">
      <button
        type="button"
        className={cn("sm:hidden", "cursor-pointer")}
        onClick={() => {
          const openAnimation = animate(".navigation", {
            duration: 500,
            left: [{ to: "100%" }, { to: "30%" }],
            right: 0,
          });
          openAnimation.play();
          setIsDropdownOpen(true);
        }}
      >
        <Image
          src="/assets/shared/icon-hamburger.svg"
          alt="hamburger"
          width={24}
          height={24}
        />
      </button>
      <ul
        className={cn(
          "flex flex-col",
          "pl-8",
          "gap-8",
          "sm:flex-row",
          "fixed",
          "sm:static",
          "top-0",
          "left-full",
          "right-0",
          "bottom-0",
          "bg-[#0b0d170e]",
          "sm:bg-[#ffffff0a]",
          "backdrop-blur-[1000px]",
          "font-barlow-condensed",
          "tracking-[2px]",
          "[&>li]:text-white",
          "[&>li>a]:flex",
          "[&>li>a]:gap-3",
          "[&>li>a]:h-fit",
          "[&>li>a]:sm:py-[2.5rem]",
          "sm:px-[2.5rem]",
          "sm:pl-[4rem]",
          "sm:gap-[2.5rem]",
          "lg:gap-12",
          "lg:px-[4rem]",
          "lg:pl-[12rem]",
          "z-10",
          "navigation",
        )}
      >
        <button
          type="button"
          onClick={() => {
            const closeAnimation = animate(".navigation", {
              duration: 500,
              left: [{ to: "30%" }, { to: "100%" }],
              right: 0,
            });
            closeAnimation.play();
            setIsDropdownOpen(false);
          }}
          className={cn(
            "ml-auto",
            "sm:hidden",
            "py-8",
            "px-6",
            "cursor-pointer",
          )}
        >
          <Image
            src="/assets/shared/icon-close.svg"
            alt="x symbol"
            width={24}
            height={24}
          />
        </button>
        <li
          className={cn(
            "border-r-4",
            "sm:border-r-0",
            "sm:border-b-4",
            "border-transparent",
            pathname === "/" && "border-white",
            pathname !== "/" && "hover:border-gray-400",
          )}
        >
          <Link href="/">
            <strong className="sm:hidden lg:block">00</strong>
            HOME
          </Link>
        </li>
        <li
          className={cn(
            "border-r-4",
            "sm:border-r-0",
            "sm:border-b-4",
            "border-transparent",
            pathname.includes("/destination") && "border-white",
            !pathname.includes("/destination") && "hover:border-gray-400",
          )}
        >
          <Link href="/destination">
            <strong>01</strong>
            DESTINATION
          </Link>
        </li>
        <li
          className={cn(
            "border-r-4",
            "sm:border-r-0",
            "sm:border-b-4",
            "border-transparent",
            pathname.includes("/crew") && "border-white",
            !pathname.includes("/crew") && "hover:border-gray-400",
          )}
        >
          <Link href="/crew">
            <strong>02</strong>
            CREW
          </Link>
        </li>
        <li
          className={cn(
            "border-r-4",
            "sm:border-r-0",
            "sm:border-b-4",
            "border-transparent",
            pathname.includes("/technology") && "border-white",
            !pathname.includes("/technology") && "hover:border-gray-400",
          )}
        >
          <Link href="/technology">
            <strong>03</strong>
            TECHNOLOGY
          </Link>
        </li>
      </ul>
    </nav>
  );
}
