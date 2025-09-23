import { Menu } from "lucide-react";

type TopBarProps = {
  onToggleSidebar: () => void;
};

export default function TopBar({ onToggleSidebar }: TopBarProps) {
  return (
    <header className="h-16 border-b border-accent bg-black flex items-center justify-between px-6 shadow-sm">
      <div className="flex items-center">
        <button
          onClick={onToggleSidebar}
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
  );
}
