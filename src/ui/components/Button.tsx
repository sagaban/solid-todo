import { Button as BaseButton } from "@kobalte/core";
import { Component, JSX } from "solid-js";
import * as stylex from '@stylexjs/stylex';
import { styles } from "./styles";

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: Component<ButtonProps> = (props) => {
	return <BaseButton.Root {...stylex.props(styles.root)} {...props} />;
};
