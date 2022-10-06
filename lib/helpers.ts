export function changeImageFormat(imageUrl: string, format = 'webp'): string {
  return `${imageUrl}?fm=${format}`;
}

export function textWithLineBreak(text: string): string {
  return text.replace(/\n/g, '<br>');
}

export const imageWidth = (
  sliderHeight: number,
  imageWidth: number,
  imageHeight: number
): number => {
  return Math.round((imageWidth * sliderHeight) / imageHeight);
};
