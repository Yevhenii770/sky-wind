import React from 'react';
import { Formik } from 'formik';
import { addUserCity } from '../../../../../redux/weather/weather-slice';
import { useDispatch } from 'react-redux';
import { AButton } from '../../atoms';

import './styles.scss';

export const SearchForm = () => {
  const dispatch = useDispatch();

  return (
    <div className='form-city'>
      <Formik
        initialValues={{ name: '' }}
        onSubmit={(values, actions) => {
          dispatch(addUserCity(values.name));
          actions.resetForm({
            values: {
              name: '',
            },
          });
        }}
      >
        {(props) => (
          <form className='form-city__container' onSubmit={props.handleSubmit}>
            <input
              className='form-city__input'
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
              name="name"
            />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <AButton className='form-city__button' type="submit">Search</AButton>
          </form>
        )}
      </Formik>
    </div>
  );
};
