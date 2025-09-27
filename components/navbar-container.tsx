"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";

const HIDDEN_PATH_PREFIXES = ["/dashboard", "/login", "/signup"];

export default function NavbarContainer() {
  const pathname = usePathname();
  const currentPath = pathname ?? "";
  const shouldHide = HIDDEN_PATH_PREFIXES.some((prefix) => currentPath.startsWith(prefix));

  if (shouldHide) {
    return null;
  }

  return <Navbar />;
}
