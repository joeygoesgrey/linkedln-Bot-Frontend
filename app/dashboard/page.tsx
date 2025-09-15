"use client";

import { useState } from "react";
import {
  Plus,
  Plug,
  PenTool,
  Lightbulb,
  FileText,
  Calendar,
  Menu,
} from "lucide-react";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("new-post");
  const [isLongForm, setIsLongForm] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex h-screen bg-navy text-white">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-navy border-r border-accent flex flex-col transition-all duration-300`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center px-4 border-b border-accent">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white font-bold">
            L
          </div>
          {sidebarOpen && (
            <span className="ml-2 text-lg font-semibold text-white">
              LinkLift
            </span>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-6 text-sm">
          {/* CREATE section */}
          <div>
            {sidebarOpen && (
              <p className="uppercase text-accent text-xs font-medium mb-2">
                Create
              </p>
            )}
            <div className="space-y-1">
              {[
                { icon: <Plus size={18} />, label: "New Post", id: "new-post" },
                { icon: <Plug size={18} />, label: "Hooks", id: "hooks" },
                { icon: <PenTool size={18} />, label: "Editor", id: "editor" },
                {
                  icon: <Lightbulb size={18} />,
                  label: "Inspiration",
                  id: "inspiration",
                },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center w-full p-2 rounded-md transition-colors ${
                    activeTab === item.id
                      ? "bg-primary/20 text-primary"
                      : "text-gray-300 hover:bg-navy-light"
                  }`}
                >
                  {item.icon}
                  {sidebarOpen && <span className="ml-3">{item.label}</span>}
                </button>
              ))}
            </div>
          </div>

          {/* MANAGE section */}
          <div>
            {sidebarOpen && (
              <p className="uppercase text-accent text-xs font-medium mb-2">
                Manage
              </p>
            )}
            <div className="space-y-1">
              {[
                { icon: <FileText size={18} />, label: "My Posts", id: "my-posts" },
                {
                  icon: <Calendar size={18} />,
                  label: "Scheduled Posts",
                  id: "scheduled-posts",
                },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center w-full p-2 rounded-md transition-colors ${
                    activeTab === item.id
                      ? "bg-primary/20 text-primary"
                      : "text-gray-300 hover:bg-navy-light"
                  }`}
                >
                  {item.icon}
                  {sidebarOpen && <span className="ml-3">{item.label}</span>}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-accent">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-xs font-medium text-white">J</span>
            </div>
            {sidebarOpen && (
              <div className="ml-3">
                <p className="text-sm font-medium">Joseph</p>
                <p className="text-xs text-accent">josephedomobi777@gmail.com</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden bg-navy-light">
        {/* Top Bar */}
        <header className="h-16 border-b border-accent bg-navy flex items-center justify-between px-6 shadow-sm">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="mr-4 text-accent hover:text-primary"
            >
              <Menu size={20} />
            </button>
            <h1 className="text-xl font-semibold text-white">Dashboard</h1>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-xs font-medium text-white">J</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <section className="py-16 px-6 flex justify-center">
            <div className="w-full max-w-2xl space-y-6">
              <h2 className="text-center text-2xl font-medium text-white">
                What topic do you want to create viral content about?
              </h2>

              {/* Input box */}
              <div className="relative bg-navy rounded-xl border border-accent p-5 shadow-sm">
                <textarea
                  placeholder="Enter your post draft here..."
                  className="w-full bg-transparent text-white placeholder-accent resize-none outline-none text-lg"
                  rows={5}
                />
                {/* Credits */}
                <div className="absolute top-4 right-4">
                  <span className="text-sm bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">
                    Credits: 2
                  </span>
                </div>

                {/* Action buttons */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-3">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-navy-light hover:bg-primary/20 transition-colors">
                      📷
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-navy-light hover:bg-primary/20 transition-colors">
                      🎤
                    </button>
                  </div>

                  <button className="bg-primary hover:bg-primary/90 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    ↑
                  </button>
                </div>
              </div>

              {/* Output section */}
              <div className="space-y-3">
                <p className="text-sm text-accent">Output:</p>

                <div className="flex items-center justify-center gap-4 bg-navy p-3 rounded-lg border border-accent">
                  <span
                    className={`text-sm ${
                      !isLongForm ? "text-white font-medium" : "text-accent"
                    }`}
                  >
                    Short
                  </span>
                  <button
                    onClick={() => setIsLongForm(!isLongForm)}
                    className={`w-14 h-7 flex items-center rounded-full p-1 transition-colors ${
                      isLongForm ? "bg-primary" : "bg-accent"
                    }`}
                  >
                    <div
                      className={`bg-white w-5 h-5 rounded-full transform duration-300 shadow-sm ${
                        isLongForm ? "translate-x-7" : ""
                      }`}
                    />
                  </button>
                  <span
                    className={`text-sm ${
                      isLongForm ? "text-white font-medium" : "text-accent"
                    }`}
                  >
                    Long Form
                  </span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
