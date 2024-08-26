"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";
import { Button } from "~/components/ui/button";

interface MainButtonProps {
    text: string,
    link?: string,
    size?: string,
    icon?: ReactElement,
    className?: string,
}

export default function MainButton({ text, link, size = "md", icon, className = ""}: MainButtonProps) {
    let baseClass = "flex items-center gap-x-3 h-fit duration-200 font-semibold rounded-xl";

    const currentPath = usePathname();
    const isActive = link && currentPath === link;

    let activeClass = "";

    if (isActive) {
        activeClass = "bg-primary-highlight text-white";
    } else {
        activeClass = "bg-transparent hover:bg-sidebar-item-background-hover text-sidebar-item-default";
    }

    let sizeClass = "py-2 px-6 text-md";

    if (size === "sm") {
        sizeClass = "py-0.5 px-2 text-sm";
    } else if (size === "xl") {
        sizeClass = "py-2 px-6 text-3xl";
    }

    const combinedClassName = `${baseClass} ${sizeClass} ${className} ${activeClass}`;

    if (link) {
        return (
            <Link href={link} className={combinedClassName}>
                {icon ? icon : null}
                <p>{text}</p>
            </Link>
        )
    } else {
        return (
            <Button className={combinedClassName}>
                {icon ? icon : null}
                <p>{text}</p>
            </Button>
        )
    }
}