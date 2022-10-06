import { ReactNode } from 'react';

export type TLinkCategoryType = 'referenzen';

export interface LinkWrapperProps {
  children: ReactNode;
  slug: string;
  category?: TLinkCategoryType;
}