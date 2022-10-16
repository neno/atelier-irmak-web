import { IFixedSizedAsset, IReferenceDefintion } from 'types';

export interface IReferencePageHeaderProps {
  assets: IFixedSizedAsset[];
  heading: string;
  definition: IReferenceDefintion;
}