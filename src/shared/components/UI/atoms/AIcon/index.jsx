import { createElement } from 'react';
import * as icons from '../../../icons';

export const AIcon = ({ name, size, fill }) => {
  return createElement(icons[name], { size, fill });
};
