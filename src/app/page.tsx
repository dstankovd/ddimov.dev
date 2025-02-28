import Image from "next/image";

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
            , where we create online games and innovative products.
          </p>
        </div>
      </section>
    </div>
  );
}
