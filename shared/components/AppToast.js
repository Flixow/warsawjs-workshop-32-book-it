import { notification } from 'antd';

const AppToast = (config = {}) => notification[config.type]({
  message: 'Notification Title',
  description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  onClick: () => {
    console.log('Notification Clicked!');
  },
  ...config,
});

export default AppToast;
