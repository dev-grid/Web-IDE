import { GitFork, Star } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer({ onClear = () => { }, children }) {
    return (
        <footer className="py-2 px-3 sm:px-6 flex items-center gap-2 justify-between">
            <div className="flex items-center gap-[6px]">
                <Button size="icon" asChild variant="secondary"><a target="_blank" href="https://github.com/r2hu1/ide"><Star className="h-4 w-4" /></a></Button>
                <Button size="icon" asChild variant="secondary"><a target="_blank" href="https://github.com/r2hu1/ide/fork"><GitFork className="h-4 w-4" /></a></Button>
            </div>
            <div className="flex items-center gap-[6px]">
                <Button size="sm" onClick={onClear}>Clear</Button>
                {children}
            </div>
        </footer>
    )
}