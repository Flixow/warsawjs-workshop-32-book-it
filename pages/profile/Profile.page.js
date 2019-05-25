import { useCallback } from 'react';
import { connect } from 'react-redux';
import { withNamespaces } from 'i18n';
import { Button } from 'antd';

import { updateProfile } from 'data/actions/me.actions';

let Profile = ({ updateProfile, t }) => {
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
      <Button onClick={updateName}>{t('Update name')}</Button>
      <Button onClick={updateAge}>{t('Update age')}</Button>
    </div>
  );
};

Profile = connect(state => ({

}), {
  updateProfile,
})(Profile);

Profile = withNamespaces()(Profile);

export default Profile;
