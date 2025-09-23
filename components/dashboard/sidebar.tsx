import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Plus, Plug, PenTool, Lightbulb, FileText, Calendar } from "lucide-react";

type NavItem = {
  id: string;
  label: string;
  icon: LucideIcon;
};

const CREATE_ITEMS: NavItem[] = [
  { icon: Plus, label: "New Post", id: "new-post" },
  { icon: Plug, label: "Hooks", id: "hooks" },
  { icon: PenTool, label: "Editor", id: "editor" },
  { icon: Lightbulb, label: "Inspiration", id: "inspiration" },
];

const MANAGE_ITEMS: NavItem[] = [
  { icon: FileText, label: "My Posts", id: "my-posts" },
  { icon: Calendar, label: "Scheduled Posts", id: "scheduled-posts" },
];

type SidebarProps = {
  isOpen: boolean;
  activeTab: string;
  onTabChange: (tabId: string) => void;
};

export default function Sidebar({ isOpen, activeTab, onTabChange }: SidebarProps) {
  return (
    <div
      className={`${isOpen ? "w-64" : "w-20"} bg-navy border-r border-accent flex flex-col transition-all duration-300`}
    >
      <Link href="/" className="hover:bg-accent/10 transition-colors duration-200">
        <div className="h-16 flex items-center px-4 border-b border-accent cursor-pointer">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white font-bold">
            L
          </div>
          {isOpen && (
            <span className="ml-2 text-lg font-semibold text-white">
              LinkLift
            </span>
          )}
        </div>
      </Link>

      <nav className="flex-1 px-4 py-6 space-y-6 text-sm">
        <NavSection
          title="Create"
          items={CREATE_ITEMS}
          isOpen={isOpen}
          activeTab={activeTab}
          onTabChange={onTabChange}
        />

        <NavSection
          title="Manage"
          items={MANAGE_ITEMS}
          isOpen={isOpen}
          activeTab={activeTab}
          onTabChange={onTabChange}
        />
      </nav>

      <div className="p-4 border-t border-accent">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-xs font-medium text-white">J</span>
          </div>
          {isOpen && (
            <div className="ml-3">
              <p className="text-sm font-medium">Joseph</p>
              <p className="text-xs text-accent">josephedomobi777@gmail.com</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

type NavSectionProps = {
  title: string;
  items: NavItem[];
  isOpen: boolean;
  activeTab: string;
  onTabChange: (tabId: string) => void;
};

function NavSection({ title, items, isOpen, activeTab, onTabChange }: NavSectionProps) {
  return (
    <div>
      {isOpen && (
        <p className="uppercase text-accent text-xs font-medium mb-2">
          {title}
        </p>
      )}
      <div className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex items-center w-full p-2 rounded-md transition-colors ${
                isActive
                  ? "bg-primary/20 text-primary"
                  : "text-gray-300 hover:bg-navy-light"
              }`}
            >
              <Icon size={18} />
              {isOpen && <span className="ml-3">{item.label}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
