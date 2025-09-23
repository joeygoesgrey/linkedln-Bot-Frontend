"use client";

import { useState, useEffect, type ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import DashboardShell from "@/components/dashboard/dashboard-shell";

const TAB_ROUTES: Record<string, string> = {
  "new-post": "/dashboard",
  hooks: "/dashboard/hooks",
  editor: "/dashboard/editor",
  inspiration: "/dashboard/inspiration",
  "my-posts": "/dashboard/my-posts",
  "scheduled-posts": "/dashboard/scheduled-posts",
};

const pathToTab = (pathname: string | null) => {
  if (!pathname) {
    return "new-post";
  }

  if (pathname.startsWith("/dashboard/hooks")) {
    return "hooks";
  }

  if (pathname.startsWith("/dashboard/editor")) {
    return "editor";
  }

  if (pathname.startsWith("/dashboard/inspiration")) {
    return "inspiration";
  }

  if (pathname.startsWith("/dashboard/my-posts")) {
    return "my-posts";
  }

  if (pathname.startsWith("/dashboard/scheduled-posts")) {
    return "scheduled-posts";
  }

  return "new-post";
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(() => pathToTab(pathname));

  useEffect(() => {
    setActiveTab(pathToTab(pathname));
  }, [pathname]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);

    const targetRoute = TAB_ROUTES[tabId];
    if (targetRoute && targetRoute !== pathname) {
      router.push(targetRoute);
    }
  };

  return (
    <DashboardShell activeTab={activeTab} onTabChange={handleTabChange}>
      {children}
    </DashboardShell>
  );
}
