import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Bellefair } from "next/font/google";
import Image from "next/image";
import type { ComponentProps } from "react";
import { Button } from "@/components/ui/button";

const bellefair = Bellefair({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-bellefair",
});

type StoryProps = ComponentProps<typeof Button> & {
	text: string;
};

const meta: Meta<StoryProps> = {
	component: Button,
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
	args: {
		text: "EXPLORE",
	},
	render: ({ text }) => (
		<div
			className={`flex justify-center items-center ${bellefair.className} w-screen h-screen`}
		>
			<Image
				className="z-[-10]"
				src="/assets/home/background-home-desktop.jpg"
				alt=""
				fill
			/>
			<Button>{text}</Button>
		</div>
	),
};
