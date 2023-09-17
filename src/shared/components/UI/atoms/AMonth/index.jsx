export const AMonth = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const myDate = new Date();
  const month = myDate.getMonth() + 1;

  return <>{months[month]}</>;
};
