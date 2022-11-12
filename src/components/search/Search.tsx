import { FC } from 'react';
import { Form, Formik, Field, FieldProps } from 'formik';
import * as Yup from 'yup';
import './search.css';
import { FaSearch } from 'react-icons/fa';


const initialValues = {
  title: ''
};

const validationSchemma = Yup.object({
  title: Yup.string().min(1, 'can not be empty').required('required')
});

export const Search: FC = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemma}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        console.log(values);

        resetForm();
        setSubmitting(false);
      }}>
      <Form className="form" action="" role="form">
        <div className="form__label">
          <Field name="title">
            {({ field }: FieldProps) => (
              <input
                type="text"
                className="form__input"
                placeholder="Search Medicine..."
                {...field}
              />
            )}
          </Field>
        </div>
        <button className="form__btn" type="submit">
          <FaSearch className="icon-search" />
        </button>
      </Form>
    </Formik>
  );
};
