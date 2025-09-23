"use client";

import { useState, type ReactNode } from "react";
import Sidebar from "@/components/dashboard/sidebar";
import TopBar from "@/components/dashboard/top-bar";

type DashboardShellProps = {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  children: ReactNode;
};

export default function DashboardShell({ activeTab, onTabChange, children }: DashboardShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className="flex h-screen bg-navy text-white">
      <Sidebar isOpen={sidebarOpen} activeTab={activeTab} onTabChange={onTabChange} />

      <div className="flex flex-1 flex-col overflow-hidden bg-navy-light">
        <TopBar onToggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
