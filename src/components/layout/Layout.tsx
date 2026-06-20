"use client";
import type React from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

interface CustomLayoutProps {
  children: React.ReactNode;
  currentBookId?: string;
  showSidebar?: boolean;
}

const Layout = ({
  children,
  currentBookId,
  showSidebar = true,
}: CustomLayoutProps) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const sidebarVisible = !isHomePage && showSidebar;

  return (
    <div className="relative flex min-h-screen flex-col md:flex-row">
      {/* Sidebar Component */}
      <Sidebar currentBookId={currentBookId} isVisible={sidebarVisible} />

      {/* Main Content Area - Conditional Margin */}
      <main
        className={`flex-1 transition-all duration-300 ease-in-out ${
          sidebarVisible ? "md:mr-72" : ""
        } px-4 pt-4 pb-8 md:px-8 md:pt-8`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
