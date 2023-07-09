import { createElement } from 'react';
import * as icons from '../../../icons';

export const AIcon = ({ name, size }) => {
  return createElement(icons[name], { size });
};
