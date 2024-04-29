import React from "react";
import { GitFork, Star } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer({ onClear = () => { }, children }) {
    return (
        <footer className="py-2 px-3 sm:px-6 flex items-center gap-2 justify-between">
            <div className="flex items-center">
                <Button size="icon" asChild variant="secondary" style={{ marginRight: '10px' }}><a target="_blank" href="https://github.com/afri-spaces/Web-IDE"><Star className="h-4 w-4" /></a></Button>
                <Button size="icon" asChild variant="secondary" style={{ marginRight: '10px' }}><a target="_blank" href="https://github.com/afri-spaces/Web-IDE/fork"><GitFork className="h-4 w-4" /></a></Button>
            </div>
            <div className="flex items-center">
                <Button size="sm" onClick={onClear} style={{ marginRight: '10px' }}>Clear</Button>
                {children}
            </div>
        </footer>
    )
}