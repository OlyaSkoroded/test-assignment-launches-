// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isValidDate = (date: any) => {
  return date instanceof Date && !isNaN(date.getTime());
};
