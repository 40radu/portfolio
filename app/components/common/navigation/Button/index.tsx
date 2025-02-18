import React from "react";
import "./style.scss"

interface ButtonProps {
	label: string;
	variant?: "primary" | "white" | "transparent";
	className?: string;
	type?: "submit" | "button";
	onClick?: () => void;
	isDisable? : boolean
}

export default function Button(props: ButtonProps) {
	const { label, variant = "primary", className = "", type = "button", onClick , isDisable = false} = props;
	return (
		<button type={type} className={`btn btn--${variant} ${className}`} onClick={onClick} disabled={isDisable}>
			<p className="text">
				<span>{label}</span>
				<span>{label}</span>
			</p>
			<span className="circle"></span>	
		</button>
	);
}