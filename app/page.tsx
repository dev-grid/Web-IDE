"use client";
import Editor from "@/components/Editor";
import MobileEditor from "@/components/MobileEditor";
import useMediaQuery from '../hooks/useMediaQuery';
import { Loader2 } from "lucide-react";
import { useState, useEffect, Fragment } from "react";

export default function Page() {
  const screenSize = useMediaQuery("768");
  const [preload, setPreload] = useState(true);

  useEffect(() => {
    setPreload(false);
  }, []);

  return (
    <Fragment>
      {!screenSize ? <Editor /> : <MobileEditor />}
      {preload && (
        <div className="absolute h-full w-full z-50 bg-background flex items-center justify-center">
          <Loader2 className="h-6 w-6 animate-spin" />
        </div>
      )}
    </Fragment>
  )
};