export const AYear = () => {
  const myDate = new Date();

  const year = myDate.getFullYear();
  return <>{year}</>;
};
