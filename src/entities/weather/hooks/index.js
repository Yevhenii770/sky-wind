var daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const useConvertTime = (time, mood) => {
  const date = new Date(time * 1000);
  if (mood === 'time') {
    return `${date.getHours()}:${date.getMinutes()}0`;
  }
  if (mood === 'dayWeek') {
    return `${daysOfWeek[date.getDay()]}`;
  }
};
