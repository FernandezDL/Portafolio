"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
    const router = useRouter();

    useEffect(() => {
        router.replace("/en/web/");
    }, [router]);

    return (
        <main className="flex min-h-screen items-center justify-center bg-background text-foreground">
            <p>Loading portfolio...</p>
        </main>
    );
}