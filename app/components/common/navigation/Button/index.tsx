import React from "react";
import "./style.scss"

interface ButtonProps {
	label: string;
	variant?: "primary" | "white" | "transparent";
	className?: string;
	type?: "submit" | "button";
	onClick?: () => void
}

export default function Button(props: ButtonProps) {
	const { label, variant = "primary", className = "", type = "button", onClick } = props;
	return (
		<button type={type} className={`btn btn--${variant} ${className}`} onClick={onClick}>
			<p className="text">
				<span>{label}</span>
				<span>{label}</span>
			</p>
			<span className="circle"></span>	
		</button>
	);
}