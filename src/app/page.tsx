import { Header } from "@/components/ui/Header";
import { Tasks } from "@/components/Tasks";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <main className="flex flex-col items-center w-full flex-grow">
        <Tasks />
      </main>
    </div>
  );
}
