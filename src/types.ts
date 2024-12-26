export interface ProjectData {
  title: string;
  description: string;
  url?: string;
  repository?: string;
  image: string;
  tech: string[];
}

export interface Job {
  title: string;
  company: string;
  dateRange: string;
}
