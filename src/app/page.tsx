import { Card } from "@/components/ui/card";
import Image from "next/image";

const projects = [
  {
    title: "Write or fade",
    description: "A writing app that fades your text if you stop typing.",
    href: "http://write-or-fade.ddimov.dev/",
  },
  {
    title: "Guess that country",
    description:
      "World capitals and flags quiz. Fun and fast, built with Next.js.",
    href: "http://guess-the-country.ddimov.dev/",
  },
];

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      <section className="flex flex-col gap-8 items-start text-left py-4 md:py-8">
        <div className="relative h-16 w-16 overflow-hidden rounded-full">
          <Image
            src="/image.png"
            alt="Dimitar Dimov's profile picture"
            width={64}
            height={64}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 items-start">
          <h1 className="font-medium">Hey, I&apos;m Dimitar Dimov</h1>
          <p className="text-muted-foreground">
            Backend architect at{" "}
            <a
              href="https://dreamshot.bg"
              target="blank"
              className="text-primary underline-offset-4 hover:underline"
            >
              Dreamshot
            </a>
            , where we create online games and innovative products. In my free
            time I&apos;m working on:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {projects.map((project, i) => (
              <Card key={i} {...project}></Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
