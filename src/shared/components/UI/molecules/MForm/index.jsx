import React from 'react';
import { Formik } from 'formik';
import { addUserCity } from '../../../../../redux/weather/weather-slice';
import { useDispatch } from 'react-redux';

import './styles.scss';

export const SearchForm = () => {
  const dispatch = useDispatch();

  return (
    <div>
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
          <form onSubmit={props.handleSubmit}>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
              name="name"
            />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};
