export const ADate = () => {
  const daysArray = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const data = new Date();

  return <>{daysArray[data.getDay()]}</>;
};
