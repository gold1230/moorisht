import type { ReactNode } from "react";

export type BlogTocItem = {
  id: string;
  label: string;
};

export type BlogInfoCard = {
  title: string;
  subtitle?: string;
  value?: string;
  icon?: ReactNode;
};

export type BlogCallout = {
  title?: string;
  text: ReactNode;
  icon?: ReactNode;
};

export type BlogSectionData = {
  id: string;
  title: string;
  eyebrow?: string;
  content: ReactNode;
  callout?: BlogCallout;
};

export type BlogFaqItem = {
  question: string;
  answer: string;
};
