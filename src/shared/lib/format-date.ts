export const formatDate = (date: Date) => {
  const timeString = date.toLocaleTimeString();
  const dateString = date.toLocaleDateString();

  return `${timeString} ${dateString}`;
};
