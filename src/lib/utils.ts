import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const downloadFile = (blob: Blob | string, filename: string) => {
  const link = document.createElement("a");
  let data = "";
  if (blob instanceof Blob) {
    data = window.URL.createObjectURL(blob);
    link.href = data;
  } else {
    link.href = blob;
  }
  link.download = filename;
  console.log(link);

  // this is necessary as link.click() does not work on the latest firefox
  link.dispatchEvent(
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    })
  );

  setTimeout(() => {
    // For Firefox it is necessary to delay revoking the ObjectURL
    window.URL.revokeObjectURL(data);
    link.remove();
  }, 100);
};
