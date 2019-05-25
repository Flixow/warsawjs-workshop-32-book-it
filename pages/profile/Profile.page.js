import { useCallback } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import { updateProfile } from 'data/actions/me.actions';

let Profile = ({ updateProfile }) => {
  const updateName = useCallback(() => {
    updateProfile({
      name: 'Marry Jane',
    });
  });
  const updateAge = useCallback(() => {
    updateProfile({
      age: 84,
    });
  });

  return (
    <div>
      <Button onClick={updateName}>Update name</Button>
      <Button onClick={updateAge}>Update age</Button>
    </div>
  );
};

Profile = connect(state => ({

}), {
  updateProfile,
})(Profile);

export default Profile;
