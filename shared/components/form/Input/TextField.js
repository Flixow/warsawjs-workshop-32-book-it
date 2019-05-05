import filterReactProps from 'filter-react-props';

const TextField = ({ input, ...other }) => {
  const filteredProps = filterReactProps(other);
  return (
    <input
      {...input}
      {...filteredProps}
    />
  );
};

export default TextField;
