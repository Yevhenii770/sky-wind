import * as Yup from 'yup';

export const citySchema = Yup.object().shape({
  city: Yup.string().min(2).max(15).required('Please enter a valid city'),
});
