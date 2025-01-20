import { Header } from "@/components/Header";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <main className="flex flex-col items-center w-full flex-grow">
        <div className="mt-8 w-11/12 max-w-4xl rounded-md p-6">
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-lg font-semibold">
              Tasks <span className="text-gray-400">(0)</span>
            </h2>
            <p className="text-gray-400">
              Completed <span className="font-semibold">(0)</span>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-8 text-center text-gray-400">
            <div className="text-4xl opacity-15">
              <Image src="/file.png" width={56} height={56} alt="file icon" />
            </div>
            <p className="mt-4 font-medium">
              You don&apos;t have any tasks registered yet.
            </p>
            <p className="mt-2">Create tasks and organize your to-do items.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
