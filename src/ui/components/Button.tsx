import { Button as BaseButton } from "@kobalte/core";
import { Component, JSX } from "solid-js";

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: Component<ButtonProps> = (props) => {
	return <BaseButton.Root class="button" {...props} />;
};
