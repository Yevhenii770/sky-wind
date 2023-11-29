import React, { useState } from 'react';
import { useFormik } from 'formik';
import { addUserCity } from '@/redux/weather/weather-slice';
import { useDispatch } from 'react-redux';
import { CitySchema } from '@/entities/weather/schemas';
import { AIcon, AButton } from '../../atoms';
import './styles.scss';

export const SearchCityForm = () => {
  const dispatch = useDispatch();
  const [isInputVisible, SetIsInputVisible] = useState(false);

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
      SetIsInputVisible(false);
    },
    validationSchema: CitySchema,
  });

  return (
    <div className="search-bar">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          className={`search-bar__input ${
            isInputVisible ? `search-bar--active` : ''
          }`}
          id="text"
          name="city"
          type="text"
          onClick={() => SetIsInputVisible(true)}
          onChange={handleChange}
          value={values.city}
        />
        <div className="search-bar__btn">
          <AButton svg="true" type="submit">
            <AIcon name="search" size="24" />
          </AButton>
        </div>
      </form>
    </div>
  );
};
