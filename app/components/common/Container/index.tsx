import React from "react";
import "./style.scss";

interface ContainerProps {
    children: React.ReactNode;
    tag?: "section" | "div" | "header" | "footer";
    className?: string;
    id?: string
}

export default function Container(props: ContainerProps) {
    const { children, tag = "section", className = "", id = "" } = props;
    const Tag = tag;
    return <Tag className={`container-common ${className}`} id={id}>
        {children}
    </Tag>;
}