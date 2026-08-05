/** Whether a nav href matches the current route (includes nested routes e.g. /rooms/[slug]) */
export function isNavActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
