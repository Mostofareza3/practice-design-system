export interface NavItem {
  label: string;
  href: string;
}

export interface SecondaryNavItem extends NavItem {
  megaMenu?: React.ReactNode;
  includedRoutes: string[];
}

export interface NavigationData {
  main: NavItem[];
  secondary: SecondaryNavItem[];
}
