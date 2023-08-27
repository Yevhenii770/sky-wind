import * as Yup from 'yup';

const myFailureMessage = 'Please enter only letters';
const pattern = /[0-9!@#$%^&*?]/;

export const CitySchema = Yup.object().shape({
  city: Yup.string()
    .min(2)
    .max(15)
    .test('validate city-input', myFailureMessage, function (value) {
      const { path, createError } = this;
      if (!Number(value) && !pattern.test(value)) {
        return true;
      }
      return createError({ path, message: myFailureMessage });
    })
    .required('Please fill out this field'),
});
