import React from 'react';
import { useFormik } from 'formik';
import { addUserCity } from '../../../../../redux/weather/weather-slice';
import { useDispatch } from 'react-redux';
import { AButton } from '../../atoms';
import { citySchema } from '../../../../../entities/weather/schemas';

import './styles.scss';

export const SearchForm = () => {
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
    validationSchema: citySchema,
    onSubmit: (values, actions) => {
      dispatch(addUserCity(values.city));
      actions.resetForm();
    },
  });

  return (
    <div className="form-city">
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
  );
};
