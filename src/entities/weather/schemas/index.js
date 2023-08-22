import * as yup from 'yup';

export const citySchema = yup.object().shape({
  city: yup.string().required('Please enter a valid city'),
});
