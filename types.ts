export interface NavItem {
  label: string;
  href: string;
}

export interface RoadmapItem {
  version: string;
  title: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  items: string[];
  isMajor?: boolean;
}

export interface VisionItem {
  title: string;
  content: string;
  points?: string[];
}

export interface HowItWorksBlock {
  title: string;
  content: string;
  imageType: 'analytics' | 'platform' | 'ecosystem' | 'decentralized';
}