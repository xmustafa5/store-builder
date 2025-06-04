export type JsonLayerType = {
  name_store: string;
  sidebarSettings: {
    style: {
      color: string;
    };
    navigation: {
      name: string;
      icon: string;
      href: string;
    }[];
  };
  icons: {
    [key: string]: string[];
  };
};
