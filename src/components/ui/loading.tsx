import { cn } from "@/utils/const/cnTailwind";

export function LoadingComponent({ className }: { className?: string }) {
  return (
    <div className={cn("flex justify-center items-center", className)}>
      <div className="w-6 h-6 border-4 border-t-transparent border-gray-500 rounded-full animate-spin"></div>
    </div>
  );
}
