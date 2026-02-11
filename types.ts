
export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  requirements: string[];
  postedAt: string;
  isNew: boolean;
  isSponsored?: boolean;
  logo?: string;
  description?: string;
  type: 'Full-time' | 'Part-time' | 'Remote';
  contactInfo?: string;
  badgeText?: string;
}

export interface FilterState {
  date: string;
  type: string[];
}
