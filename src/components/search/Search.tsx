import { FC } from 'react';
import { Form, Formik, Field, FieldProps } from 'formik';
import * as Yup from 'yup';
import './search.css';
import { FaSearch } from 'react-icons/fa';
import { useMedicines } from '../../context/MedicineProvider';


const validationSchemma = Yup.object({
  title: Yup.string().min(1, 'can not be empty').required('required')
});

export const Search: FC = () => {
  const { fetchMedicines } = useMedicines();

  return (
    <Formik
      initialValues={{ title: '' }}
      validationSchema={validationSchemma}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        fetchMedicines(values.title.trim());
        resetForm();
        setSubmitting(false);
      }}>
      <Form className="form" role="form">
        <label className="form__label">
          <Field name="title">
            {({ field }: FieldProps) => (
              <input
                role="search"
                type="text"
                className="form__input"
                placeholder="Search Medicine..."
                {...field}
              />
            )}
          </Field>
        </label>
        <button className="form__btn" type="submit" title="search">
          <FaSearch className="icon-search" />
        </button>
      </Form>
    </Formik>
  );
};
