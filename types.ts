export type CardItemT = {
  description?: string;
  hasActions?: boolean;
  hasVariant?: boolean;
  image: any;
  isOnline?: boolean;
  matches?: string;
  name: string;
  age?: string;
  job?: string;
  education?: string;
  topics?: string[];
  // Fertility-aware features
  reproductiveIntent?: Record<string, any>;
  geneticTraits?: Record<string, any>;
  donorPreferences?: Record<string, any>;
  children?: Record<string, any>;
  location?: string;
  height?: string;
  religion?: string;
  smoking?: boolean;
  drinking?: string;
  drugs?: boolean;
  datingIntent?: string;
  // Additional profile fields
  [key: string]: any;
};

export type IconT = {
  name: any;
  size: number;
  color: string;
  style?: any;
};

export type MessageT = {
  image: any;
  lastMessage: string;
  name: string;
};

export type ProfileItemT = {
  age?: string;
  info1?: string;
  info2?: string;
  info3?: string;
  info4?: string;
  location?: string;
  matches: string;
  name: string;
};

export type TabBarIconT = {
  focused: boolean;
  iconName: any;
  text: string;
};

export type DataT = {
  id: number;
  name: string;
  isOnline: boolean;
  match: string;
  description: string;
  message: string;
  image: any;
  age?: string;
  job?: string;
  education?: string;
  topics?: string[];
  info1?: string;
  info2?: string;
  info3?: string;
  info4?: string;
  location?: string;
  // Fertility-aware features
  reproductiveIntent?: Record<string, any>;
  geneticTraits?: Record<string, any>;
  donorPreferences?: Record<string, any>;
  children?: Record<string, any>;
  height?: string;
  religion?: string;
  smoking?: boolean;
  drinking?: string;
  drugs?: boolean;
  datingIntent?: string;
  // Additional profile fields
  [key: string]: any;
};
