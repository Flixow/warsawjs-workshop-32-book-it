import { useCallback, useState } from 'react';
import { withRouter } from 'next/router';
import cx from 'classnames';
import { debounce } from 'lodash';
import { Input } from 'antd';

import { addQuery } from 'utils/url';

const SearchForm = React.memo(({ className, router }) => {
  const [value, setValue] = useState(router.query.searched_phrase);

  const handleChange = useCallback(e => {
    const { value } = e.target;

    changeQuery(value);
    setValue(value);
  });

  const changeQuery = debounce(value => {
    const newLocation = addQuery(router, {
      searched_phrase: value,
    });

    router.push(newLocation, newLocation, { shallow: true });
  }, 500);

  return (
    <Input
      className={cx(className)}
      onChange={handleChange}
      placeholder="Search..."
      value={value}
    />
  );
});

export default withRouter(SearchForm);
