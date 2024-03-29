import { useFormik } from 'formik';
import { addUserCity } from '@/redux/weather/weather-slice';
import { useDispatch } from 'react-redux';
import { AButton } from '../../atoms';
import { CitySchema } from '@/entities/weather/schemas';

import './styles.scss';

export const SearchForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const {
    handleChange,
    handleSubmit,
    isSubmitting,
    values,
    errors,
    touched,
    actions,
  } = useFormik({
    initialValues: {
      city: '',
    },

    onSubmit: (values, actions) => {
      dispatch(addUserCity(values.city));
      actions.resetForm();
      onClose();
    },
    validationSchema: CitySchema,
  });

  return (
    <div className="form-city">
      <div className="form-city__content">
        <div className="form-city__title">Enter your city</div>
        <form
          className="form-city__container"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <input
            className={`form-city__input ${
              errors.city && touched.city ? `form-city__input-error` : ''
            }`}
            id="text"
            name="city"
            type="text"
            onChange={handleChange}
            value={values.city}
          />
          {errors.city && touched.city && (
            <p className="input-error-message">{errors.city}</p>
          )}

          <AButton className="form-city__button" type="submit">
            Search
          </AButton>
        </form>
      </div>
    </div>
  );
};
