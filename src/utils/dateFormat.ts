export const dateFormat = (date: string):string => {
  const event = new Date(date);
  const newDate = event.toDateString();
  return newDate;
}