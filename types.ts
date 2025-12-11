import React from 'react';

export enum Page {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services'
}

export interface NavItem {
  label: string;
  page: Page;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}