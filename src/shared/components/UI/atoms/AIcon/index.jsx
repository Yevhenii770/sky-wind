import { createElement } from 'react';
import * as icons from '../../../icons';

export const AIcon = ({ name, size, fill }) => {
  if (/ /.test(name)) {
    const resoltName = name
      .split(' ')
      .map(function (word, index) {
        return index === 0
          ? word
          : word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join('');
    console.log('2', name);
    return createElement(icons[resoltName], { size, fill });
  } else if (!/ /.test(name)) {
    console.log('1', name);
    name = name.toLowerCase();
    return createElement(icons[name], { size, fill });
  } else {
    return createElement(icons['unknown'], { size, fill });
  }
};
