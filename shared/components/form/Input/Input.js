import classnames from 'classnames';

import cssVariables from 'utils/cssVariables';

import TextField from './TextField';
import TextareaField from './TextareaField';
import PasswordField from './PasswordField';
import SelectField from './SelectField';
import RadioListField from './RadioListField';
import RadioField from './RadioField';

const Input = ({
  className,
  labelText,
  errorLabel,
  type = 'text',
  icon,
  placeholder,
  full,
  readOnly,
  disabled,
  meta = {},
  input = {},
  children,
  ...props
}) => {
  const { touched, error } = meta;
  const hasError = touched && error;
  const isInputDisabled = readOnly || disabled;
  const getErrorPrefix = () => {
    if (typeof errorLabel === 'string') return errorLabel;
    if (typeof labelText === 'string') return labelText;
    if (typeof label === 'object' && labelText.props) return labelText.props.value;

    return 'This field';
  };

  const inputNameForError = getErrorPrefix();
  const errorToDisplay = error && `${inputNameForError} ${Array.isArray(error) ? error[0] : error}`;
  const hasAssetsToShow = children || !!hasError || (hasError && errorToDisplay);

  const renderInputField = () => {
    const childrenProps = {
      className: 'Input__field',
      disabled: isInputDisabled,
      placeholder: !isInputDisabled && placeholder
        ? placeholder
        : '',
      type,
      input,
      ...props,
    };

    switch(type) {
      case 'textarea':
        return <TextareaField {...childrenProps} />;
      case 'password':
        return <PasswordField {...childrenProps} />;
      case 'select':
        return <SelectField {...childrenProps} />;
      case 'radio':
        return <RadioField {...childrenProps} />;
      case 'radio-list':
        return <RadioListField {...childrenProps} />;
      default:
        return <TextField {...childrenProps} />;
    }
  };

  return (
    <div
      className={classnames(
        'Input',
        { 'Input--full': full },
        { 'Input--readOnly': readOnly },
        { 'Input--disabled': disabled },
        { 'Input--error': hasError },
        { [`Input--${type}`]: type },
        className,
      )}
    >
      {labelText && (
        <label className="Input__Label">
          {labelText}
        </label>
      )}
      <div
        name={input.name}
        className={classnames(
          'Input__field--wrapper',
          type,
        )}
      >
        {icon && (
          <div className="Input__Icon u-ml- u-micro u-center">
            <i className={`icon-${icon}`} aria-hidden="true" />
          </div>
        )}

        {renderInputField()}

        {hasAssetsToShow && (
          <div className="Input__Assets">
            {children}

            {hasError && errorToDisplay && (
              <div className="Input__Tooltip">
                <div className="Input__Tooltip--content">
                  {errorToDisplay}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        .Input {
          display: flex;
          flex-direction: column;
        }

        .Input__field--wrapper {
          position: relative;
          display: flex;
          box-shadow: 0px 0px 0px 1px ${cssVariables.colors.neutrals[1]};
          border-radius: 4px;
        }

        .Input:focus-within .Input__field--wrapper {
          box-shadow: 0px 0px 0px 1px ${cssVariables.colors.secondary.blue};
        }

        .Input:focus-within .Input__Label {
          color: ${cssVariables.colors.secondary.blue};
        }

        .Input:focus-within :global(.Input__field) {
          outline: none;
        }

        .Input__Label {
          color: ${cssVariables.colors.neutrals[0]};
          font-size: 14px;
          font-weight: 400;
          margin: 0 8px 12px;
        }

        .Input :global(.Input__field) {
          display: block;
          font-size: 16px;
          line-height: 16px;
          color: ${cssVariables.colors.primary.black};
          caret-color: ${cssVariables.colors.primary.black};
          padding: 15px 13px;
          background: rgba(255, 255, 255, 0);
          border: none;
        }

        .Input :global(.Input__field::placeholder) {
          color: ${cssVariables.colors.neutrals[1]};
          font-family: Lato;
        }

        .Input .Input__Assets {
          right: 0;
          top: 1px;
          bottom: 1px;
          display: flex;
          padding-right: 8px;
          padding-left: 8px;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          align-items: center;
          background: #fff;
          z-index: 4;
        }

        .Input .Input__Assets > div + div {
          margin-left: 10px;
        }

        .Input .Input__Tooltip {
          position: relative;
          display: flex;
          align-items: center;
          width: auto;
        }

        .Input .Input__Tooltip .Error-icon {
          color: ${cssVariables.colors.secondary.red};
        }

        .Input .Input__Tooltip--content {
          position: absolute;
          bottom: 25px;
          right: 0;
          width: auto;
          padding: 5px 10px;
          color: #fff;
          background-color: ${cssVariables.colors.secondary.red};
          border-radius: 4px;
          font-size: 14px;
          white-space: nowrap;
        }

        .Input .Input__Tooltip--content:after {
          content: '';
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 5px solid ${cssVariables.colors.secondary.red};
          bottom: -5px;
          position: absolute;
          right: 21px;
        }

        .Input--full,
        .Input--full :global(.Input__field) {
          width: 100%;
        }

        .Input--error .Input__field--wrapper {
          box-shadow: 0px 0px 0px 1px ${cssVariables.colors.secondary.red};
        }

        .Input--readOnly .Input__field--wrapper {
          box-shadow: none;
          padding: 0 8px;
          font-weight: 600;
        }

        .Input--disabled .Input__field--wrapper {
          box-shadow: 0px 0px 0px 1px ${cssVariables.colors.neutrals[2]};
          background: ${cssVariables.colors.neutrals[4]};
          cursor: not-allowed;
        }

        .Input--disabled .Input__field--wrapper :global(.Input__field) {
          color: ${cssVariables.colors.neutrals[1]};
        }
      `}</style>
    </div>
  );
};

export default Input;
