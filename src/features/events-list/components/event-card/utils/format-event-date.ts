const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
};

export const formatEventDate = (date: string) => {
  return new Intl.DateTimeFormat("en-US", options).format(new Date(date));
};
