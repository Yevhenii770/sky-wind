import { createElement } from 'react';
import * as icons from '../../../icons';

export const AIcon = ({ name, size, fill }) => {
  const allIcons = Object.keys(icons);

  if (/ /.test(name)) {
    const resoltName = name
      .split(' ')
      .map(function (word, index) {
        return index === 0
          ? word
          : word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join('');

    return allIcons.includes(resoltName)
      ? createElement(icons[resoltName], { size, fill })
      : createElement(icons['unknown'], { size, fill });
  } else if (!/ /.test(name)) {
    name = name?.toLowerCase();
    return allIcons.includes(name)
      ? createElement(icons[name], { size, fill })
      : createElement(icons['unknown'], { size, fill });
  }
};
