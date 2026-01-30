"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function TimeBasedTheme() {
    const { theme } = useTheme();

    useEffect(() => {
        // Only auto-switch if the user has explicitly selected 'system' (Auto)
        // If they selected 'light' or 'dark', this logic tells us to back off.
        if (theme !== "system") return;

        const checkTimeAndSetTheme = () => {
            const hour = new Date().getHours();
            const isDayTime = hour >= 6 && hour < 18; // 6 AM to 6 PM
            const root = window.document.documentElement;

            // We manually manipulate the class to ensure time-based preference wins over OS preference
            // when 'system' is selected.
            if (isDayTime) {
                root.classList.remove("dark");
                root.classList.add("light");
            } else {
                root.classList.remove("light");
                root.classList.add("dark");
            }
        };

        checkTimeAndSetTheme();

        // specific interval check (every minute)
        const interval = setInterval(checkTimeAndSetTheme, 60000);
        return () => clearInterval(interval);
    }, [theme]); // Dependency on 'theme' to react when user switches back to Auto

    return null;
}
