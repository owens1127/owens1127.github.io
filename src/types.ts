export type ProjectData = {
  name: string;
  description: string;
  url?: string;
  repository?: string;
  images?: string[];
  tech?: Tech;
};

export type Tech = Record<
  string,
  string | string[] | Record<string, string | string[]>
>;
