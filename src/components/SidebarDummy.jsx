import React from "react";

export function Sidebar({ children, className }) {
  return <aside className={className}>{children}</aside>;
}
export function SidebarContent({ children, className }) {
  return <div className={className}>{children}</div>;
}
export function SidebarGroup({ children }) {
  return <section>{children}</section>;
}
export function SidebarGroupContent({ children }) {
  return <div>{children}</div>;
}
export function SidebarMenu({ children, className }) {
  return <ul className={className}>{children}</ul>;
}
export function SidebarMenuItem({ children }) {
  return <li>{children}</li>;
}
export function SidebarMenuButton({ children }) {
  return <div>{children}</div>;
}
export function useSidebar() {
  return { state: {} };
}
