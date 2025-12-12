import React from 'react';
import { RoadmapItem, VisionItem, HowItWorksBlock } from './types';
import { Layout, Globe, Cpu, Users, Zap, Search, Shield, BarChart3, TrendingUp, Layers } from 'lucide-react';

export const NAV_ITEMS = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Our Vision', href: '#vision' },
  { label: 'Roadmap', href: '#roadmap' },
];

export const ROADMAP_DATA: RoadmapItem[] = [
  {
    version: 'V0',
    title: 'CS2 Analyzer',
    status: 'completed',
    items: ['Extraction of key data from demo files', 'Movement, accuracy, economy, timings', 'Roles and decision-making metrics']
  },
  {
    version: 'V1',
    title: 'CS2 Analyzer Pro',
    status: 'in-progress',
    items: ['New analytical metrics extracted from demos', 'Release of open API for developers', 'Player dashboard on the web', 'Progress tracking & recommendations']
  },
  {
    version: 'V2',
    title: 'Machine Learning Multi-Game Engine',
    status: 'upcoming',
    isMajor: true,
    items: ['New integrations: Valorant & Dota 2', 'Parallel work on additional titles', 'Match analytics tailored for each player', 'Major multi-game support launch']
  },
  {
    version: 'V3',
    title: 'Global Competitive Ecosystem',
    status: 'upcoming',
    items: ['Fully integrated competition system', 'Regional and international rankings', 'Complete player profiles', 'Club & agency integration']
  },
  {
    version: 'V4',
    title: 'Creator Economy & Marketplace',
    status: 'upcoming',
    items: ['Premium analyses from pro coaches', 'Streamer gameplay integration', 'Marketplace for developer tools']
  },
  {
    version: 'V5',
    title: 'Game Expansion (2)',
    status: 'upcoming',
    items: ['Fortnite, Apex Legends, League of Legends', 'Support for massive communities', 'Complex match analysis']
  },
  {
    version: 'V6',
    title: 'Full Interoperability',
    status: 'upcoming',
    items: ['Real-time analysis', 'Generative AI play explanations', 'Fully gamified academy', 'Universal gaming passport', 'Worldwide Tournament']
  }
];

export const VISION_DATA: VisionItem[] = [
  {
    title: 'From CS2 to Global Gaming',
    content: "After validating our system with Counter-Strike 2, we'll progressively integrate the world's most competitive titles: Valorant, Dota 2, League of Legends, Fortnite, and Apex Legends. Each integration strengthens the ecosystem and expands our player community."
  },
  {
    title: 'The Universal Gaming Platform',
    content: "A comprehensive ecosystem powering the future of competitive play.",
    points: [
      'Real-time analysis during matches',
      'Personalized AI coaching',
      'Creator economy for coaches',
      'Marketplace for developer tools',
      'Fully gamified academy',
      'Universal player profile'
    ]
  },
  {
    title: 'Decentralized Growth',
    content: "As the subnet scales, the Bittensor network benefits from gaming's massive user base while gamers access increasingly sophisticated AI analysis. This creates a positive feedback loop: more players generate more data, improving models and attracting more participants."
  }
];

export const HOW_IT_WORKS_DATA: HowItWorksBlock[] = [
  {
    title: "Bringing AI Gaming Intelligence to Bittensor",
    content: "Arcadium is the first Bittensor subnet dedicated to gaming intelligence. By leveraging decentralized AI, we analyze gameplay with unprecedented depth — studying thousands of variables per match to provide actionable insights that were previously available only to professional teams.",
    imageType: 'analytics'
  },
  {
    title: "A Global Gaming Academy",
    content: "Players upload their gameplay footage and receive AI-powered analysis covering movement patterns, decision-making, accuracy, economy management, and strategic positioning. Our system detects trends, identifies weaknesses, and delivers personalized recommendations to accelerate improvement.",
    imageType: 'platform'
  },
  {
    title: "Beyond Individual Players",
    content: "Arcadium serves the entire gaming ecosystem: Professional clubs and agencies discover talent through objective insights, teams analyze candidates with accuracy, tournament organizers manage competitions, and developers build new tools on our API.",
    imageType: 'ecosystem'
  },
  {
    title: "Powered by Decentralization",
    content: "Built on Bittensor's decentralized AI infrastructure, our subnet harnesses distributed computational power to deliver scalable, transparent gaming intelligence. The community benefits from network participation while players access world-class analytics.",
    imageType: 'decentralized'
  }
];