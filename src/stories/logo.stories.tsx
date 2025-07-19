import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Bellefair } from "next/font/google";
import Image from "next/image";
import type { ComponentProps } from "react";
import { Logo } from "@/components/ui/logo";

const bellefair = Bellefair({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-bellefair",
});

type StoryProps = ComponentProps<typeof Logo>;

const meta: Meta<StoryProps> = {
	component: Logo,
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
	args: {},
	render: () => (
		<div
			className={`flex justify-center items-center ${bellefair.className} w-screen h-screen`}
		>
			<Image
				className="z-[-10]"
				src="/assets/home/background-home-desktop.jpg"
				alt=""
				fill
			/>
			<Logo />
		</div>
	),
};
