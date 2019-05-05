import { Fragment } from 'react';
import filterReactProps from 'filter-react-props';

import cssVariables from 'utils/cssVariables';

class PasswordField extends React.PureComponent {
  state = {
    type: this.props.type,
  }

  toggle = () => {
    const { type } = this.state;

    this.setState({
      type: type === 'password' ? 'text' : 'password',
    });
  }

  render() {
    const { type } = this.state;
    const { input = {}, ...other } = this.props;
    const filteredProps = filterReactProps(other);

    return (
      <Fragment>
        <input
          {...input}
          {...filteredProps}
          type={type}
        />

        {!!(input.value || '').length && <span
          className="PasswordField__Trigger"
          onClick={this.toggle}
        >
          {type === 'password' ? 'SHOW' : 'HIDE'}
        </span>}

        <style jsx>{`
          .PasswordField__Trigger {
            color: ${cssVariables.colors.secondary.blue};
            cursor: pointer;
            display: flex;
            align-items: center;
            padding: 0 8px;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default PasswordField;
