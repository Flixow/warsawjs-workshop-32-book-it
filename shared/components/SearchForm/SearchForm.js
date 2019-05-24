import { useCallback, useState } from 'react';
import { withRouter } from 'next/router';
import cx from 'classnames';
import { debounce } from 'lodash';
import { Input } from 'antd';

import { Router } from 'routes';

import { addQuery } from 'utils/url';

const changeQuery = debounce(value => {
  const newLocation = addQuery(Router, {
    searched_phrase: value,
  });

  Router.push(newLocation, newLocation);
}, 500);

const SearchForm = React.memo(({ className, router }) => {
  const [search, setSearch] = useState(router.query.searched_phrase);

  const handleChange = useCallback(e => {
    const { value } = e.target;

    setSearch(value);
    changeQuery(value);
  });

  return (
    <Input
      className={cx(className)}
      onChange={handleChange}
      placeholder="Search..."
      value={search}
    />
  );
});

export default withRouter(SearchForm);
