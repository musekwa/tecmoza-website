

export interface Option {
    label: string;
    icon: React.ReactElement;
    href: string;
}


export interface MenuItem {
  title: string;
  menu: string;
  options: Option[];
  href: string;
}

export interface ContentMenuProps {
    options: Option[];
}

export interface MenuOptionsProps {
    menu: string;
    title: string;
    active: boolean;
    options: Option[];
}