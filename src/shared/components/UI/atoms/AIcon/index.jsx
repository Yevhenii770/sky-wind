import { createElement } from 'react';
import * as icons from '../../../icons';

export const AIcon = ({ name, size, fill }) => {
  console.log(name);

  if (/ /.test(name)) {
    const resoltName = name
      .split(' ')
      .map(function (word, index) {
        return index === 0
          ? word
          : word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join('');
    console.log('!!! two');
    return createElement(icons[resoltName], { size, fill });
  } else if (!/ /.test(name)) {
    console.log(' !!! one');
    createElement(icons[name.toLowerCase()], { size, fill });
  } else {
    console.log('!!! else');
    return createElement(icons['unknown'], { size, fill });
  }
};
