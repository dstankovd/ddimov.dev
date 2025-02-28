import Link from "next/link";

export default function Footer() {
  const links = [
    { href: "https://x.com/Lumosito", label: "@Lumosito" },
    { href: "https://github.com/dstankovd", label: "github" },
    {
      href: "https://www.linkedin.com/in/dimitar-dimov-0b9117225/",
      label: "linked",
    },
    { href: "mailto:dstankovd@gmail.com", label: "Email" },
  ];

  return (
    <footer className="max-w-3xl mx-auto w-full border-none bottom-0 h-12 py-2">
      <div className="max-w-4xl mx-auto h-full flex items-center justify-center gap-2">
        {links.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline rounded-md px-3 text-xs"
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </footer>
  );
}
