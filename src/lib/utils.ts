import { clsx, type ClassValue } from "clsx";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function promiseDelay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function useHandleOpenPost() {
  const router = useRouter();

  const handleOpenPost = (postId: string) => {
    router.push(`/post/${postId}`);
  };

  return handleOpenPost;
}
