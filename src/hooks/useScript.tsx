import { useEffect, useState } from "react";

interface ScriptStatus {
  state: "loading" | "success" | "error" | "";
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
}

type CleanupFunction = () => void;

const getScriptElement = (url: string) => {
  return document.querySelector(
    `script[src="${url}"]`
  ) as HTMLScriptElement | null;
};

export const loadExternalScript = (
  url?: string,
  callback?: (status: ScriptStatus) => void
): CleanupFunction | void => {
  if (!url) {
    callback?.({
      state: "",
      isSuccess: false,
      isLoading: false,
      isError: false,
    });
    return;
  }

  let script = getScriptElement(url);

  const handleScript = (event: Event) => {
    const state = event.type === "load" ? "success" : "error";
    callback?.({
      state,
      isSuccess: state === "success",
      isLoading: false,
      isError: state === "error",
    });
  };

  if (script) {
    document.body.removeChild(script);
    script = getScriptElement(url);
  }
  console.log(script);

  if (!script) {
    script = document.createElement("script");
    script.type = "application/javascript";
    script.src = url;
    script.async = true;

    script.addEventListener("load", handleScript);
    script.addEventListener("error", handleScript);

    document.body.appendChild(script);

    callback?.({
      state: "loading",
      isSuccess: false,
      isLoading: true,
      isError: false,
    });

    return () => {
      script?.removeEventListener("load", handleScript);
      script?.removeEventListener("error", handleScript);
    };
  } else {
    callback?.({
      state: "success",
      isSuccess: true,
      isLoading: false,
      isError: false,
    });
  }
};

export const useExternalScript = (url: string): ScriptStatus => {
  const [status, setStatus] = useState<ScriptStatus>({
    state: "",
    isSuccess: false,
    isLoading: false,
    isError: false,
  });

  useEffect(() => {
    const cleanup = loadExternalScript(url, setStatus);

    return () => {
      if (cleanup && typeof cleanup === "function") {
        cleanup();
      }
    };
  }, [url]);

  return status;
};
