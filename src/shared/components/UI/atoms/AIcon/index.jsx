import { createElement } from 'react';
import * as icons from '../../../icons';

export const AIcon = ({ name, size, fill }) => {
  if (/ /.test(name)) {
    const wordArray = name.split(' ');
    const splittedSecondWord = wordArray[1].split('');
    const toLowerCaseFirstdWord = wordArray[0].toLowerCase();
    const firstUpperCaseletter = splittedSecondWord[0].toUpperCase();
    const rest = [...splittedSecondWord];
    rest.splice(0, 1);

    const correctedName = [
      toLowerCaseFirstdWord,
      firstUpperCaseletter,
      ...rest,
    ].join('');

    return createElement(icons[correctedName], { size, fill })
      ? createElement(icons[correctedName], { size, fill })
      : createElement(icons['unknown'], { size, fill });
  } else {
    const correctedName = name.toLowerCase();

    return createElement(icons[correctedName], { size, fill })
      ? createElement(icons[correctedName], { size, fill })
      : createElement(icons['unknown'], { size, fill });
  }
};
