import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        HELLO WORLD
      </h1>
      <p className="mb-4">I am a designer! Oh my days!</p>

      <div className="my-8">
        <Link className="flex flex-col space-y-1 mb-4" href={`/easyPark`}>
          Easy Park Case Study
        </Link>

        <Link className="flex flex-col space-y-1 mb-4" href={`/nordPass`}>
          NordPass case study
        </Link>

        <Link className="flex flex-col space-y-1 mb-4" href={`/minesweeper`}>
          MineSweeper case study
        </Link>
      </div>
    </section>
  );
}
