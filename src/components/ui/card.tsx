import Link from "next/link";
import * as React from "react";

export function Card({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href} target="_blank">
      <div className="p-6 w-full relative border rounded-md border-border/25 bg-card hover:border-border hover:cursor-pointer text-muted-foreground">
        <h3 className="text-md mb-1 text-foreground">{title}</h3>
        <p className="text-sm">{description}</p>

        <div className="text-border size-6 absolute -top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-md" />
        <div className="text-border size-6 absolute -top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-md" />
        <div className="text-border size-6 absolute -bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-md" />
        <div className="text-border size-6 absolute -bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-md" />
      </div>
    </Link>
  );
}
