import ReasonBox from "@/components/ReasonBox";

export default function Home() {
  return (
    <main className="w-full flex flex-col flex-grow justify-center">
      <header className="text-center w-full bg-neutral-900 py-2">
        <h1 className="text-2xl text-amber-200 font-extrabold">
          JUSTIFICATION FABRICATIONATOR
        </h1>
      </header>
      <ReasonBox />
      <footer
        className="font-medium bg-neutral-900 px-12 py-4 text-center
      fixed bottom-0 text-sm w-full">
        Made with <span className="text-amber-200">&#60;3</span> by Abhishek
        Yelley and Sai Nivas Mangu
      </footer>
    </main>
  );
}
4;
