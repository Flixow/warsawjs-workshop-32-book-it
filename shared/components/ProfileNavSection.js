import { connect } from 'react-redux';
import { Button } from 'antd';

import { getProfile } from 'data/actions/me.actions';
import { profileSelector, profileNameSelector } from 'data/selectors/me.selectors';

let Nav = ({ profile, getProfile }) => (
  <div>
    {profile.id ? (
      <h4>
        Hi, {profile.name}
      </h4>
    ) : (
      <Button
        type="link"
        onClick={getProfile}
      >
      Sign In
      </Button>
    )}
  </div>
);

Nav = connect(state => ({
  profile: profileSelector(state),
}), {
  getProfile,
})(Nav);

export default Nav;
