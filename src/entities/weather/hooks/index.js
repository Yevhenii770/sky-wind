const daysOfWeek = [
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
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  if (mood === 'time') {
    return `${hours}:${minutes}`;
  }
  if (mood === 'dayWeek') {
    return `${daysOfWeek[date.getDay()]}`;
  }
};

export const useConvertDegrees = (fahrenheit) => {
  const resoltDegrees = ((fahrenheit - 32) * 5) / 9;
  return resoltDegrees;
};
