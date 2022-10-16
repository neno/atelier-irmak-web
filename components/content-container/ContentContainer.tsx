import { FC } from 'react';
import { IContentContainerProps } from './ContentContainer.types';

export const ContentContainer: FC<IContentContainerProps> = ({ children }) => {
  return <div className='container mx-auto py-16'>{children}</div>;
};
