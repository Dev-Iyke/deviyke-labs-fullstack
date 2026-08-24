export interface NavigationItem {
  label: string;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Brief", href: "/brief" },
  { label: "Lab", href: "/lab" },
  { label: "Blogs", href: "/blogs" },
];

export function isActiveRoute(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(href + "/");
}
