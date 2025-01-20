import Image from "next/image";
export const Withdout = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8 text-center text-gray-400 p-[64px_24px] gap-4 rounded-t-lg border-t border-gray-400">
      <div className="text-4xl opacity-15">
        <Image src="/file.png" width={56} height={56} alt="file icon" />
      </div>
      <p className="mt-4 text-base font-bold leading-[22.4px] text-center">
        You don&apos;t have any tasks registered yet.
      </p>
      <p className="mt-2">Create tasks and organize your to-do items.</p>
    </div>
  );
};
