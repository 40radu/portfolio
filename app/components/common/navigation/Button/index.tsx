"use client"
import React from "react";
import "./style.scss"
import { useFormStatus } from "react-dom";

interface ButtonProps {
	label: string;
	variant?: "primary" | "white" | "transparent";
	className?: string;
	type?: "submit" | "button";
	onClick?: () => void;
}

export default function Button(props: ButtonProps) {
	const { pending } = useFormStatus()
	const { label, variant = "primary", className = "", type = "button", onClick } = props;
	return (
		<button
			type={type}
			className={`btn btn--${variant} ${className}`}
			onClick={onClick}
			disabled={pending}>
			<p className="text">
				{
					pending == true ?
						<>En cours</>
						: <>
							<span>{label}</span>
							<span>{label}</span>
						</>
				}
			</p>
			<span className="circle"></span>
		</button>
	);
}