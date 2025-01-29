import React from "react";
import "./style.scss";

interface ContainerProps {
    children: React.ReactNode;
    tag?: "section" | "div" | "header" | "footer";
    className?: string;
}

export default function Container(props: ContainerProps) {
    const { children, tag = "section", className = "" } = props;
    const Tag = tag;
    return <Tag className={`container-common ${className}`}>
        {children}
    </Tag>;
}