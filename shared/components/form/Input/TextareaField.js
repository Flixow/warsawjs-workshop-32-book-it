import { Fragment } from 'react';
import filterReactProps from 'filter-react-props';

const TextareaField = ({ input, ...other }) => {
  const filteredProps = filterReactProps(other);

  return (
    <Fragment>
      <textarea
        rows="6"
        {...input}
        {...filteredProps}
      />

      <style jsx>{`
        textarea {
          resize: vertical;
        }

        textarea:disabled {
          resize: none;
        }
      `}</style>
    </Fragment>
  );
};

export default TextareaField;
