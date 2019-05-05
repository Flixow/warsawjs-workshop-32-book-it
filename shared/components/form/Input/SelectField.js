import ReactSelect from 'react-select';
import classnames from 'classnames';
import cssVariables from 'utils/cssVariables';

const Select = ({
  standard, className,
  input = {}, inputProps, variation, disabled,
  ...other
}) => {
  const getValue = data => {
    if (Array.isArray(data)) {
      return data.map(item => item.value);
    }

    return data ? data.value : null;
  };

  const handleOnChange = data => {
    const value = getValue(data);

    if (typeof (input || {}).onChange === 'function') {
      input.onChange(value);
    }
    if(typeof other.onChange === 'function') {
      other.onChange(value);
    }
  };

  const renderArrowCaret = ({ isOpen }) => !disabled && (
    <i className={classnames(
      'Tooltip__Icon',
      { 'icon-chevron-down': !isOpen },
      { 'icon-chevron-up': isOpen }
    )}
    />
  );

  const SelectName = {
    async: ReactSelect.Async,
    creatable: ReactSelect.Creatable,
  }[variation] || ReactSelect;

  return (
    <div
      className={classnames(
        'Select',
        { 'Select--standard': standard },
        { 'Select--disabled': disabled },
        className
      )}
      name={input.name || name}
    >
      <SelectName
        multi
        arrowRenderer={renderArrowCaret}
        backspaceToRemoveMessage=""
        scrollMenuIntoView={false}
        disabled={disabled}
        {...input}
        {...other}
        onChange={handleOnChange}
        onBlur={() => {}}
        inputProps={{ ...input, ...inputProps }}
      />
      <style jsx>{`
        .Select :global(.Select-control) {
          border-spacing: 0;
          border-collapse: separate;
          outline: none;
          position: relative;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: text;
        }

        .Select :global(.Select-multi-value-wrapper) {
          display: inline-flex;
          flex-wrap: wrap;
          align-items: center;
          flex: 1;
          position: relative;
          max-width: 90%;
        }

        .Select :global(.Select-placeholder) {
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          color: ${cssVariables.colors.neutrals[1]};
          position: absolute;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
        }

        .Select :global(.Select-input > input) {
          width: 100%;
          background: none transparent;
          color: ${cssVariables.colors.primary.black};
          caret-color: ${cssVariables.colors.primary.black};
          border: 0 none;
          box-shadow: none;
          cursor: default;
          display: inline-block;
          font-family: inherit;
          margin: 0;
          padding: 0;
          outline: none;
          -webkit-appearance: none;
        }

        .Select :global(.Select-value) {
          background-color: ${cssVariables.colors.primary.green};
          color: ${cssVariables.colors.primary.black};
          border-radius: 4px;
          display: inline-flex;
          flex-direction: row-reverse;
          margin: 5px 10px 5px 0;
          padding: 0 5px;
          font-size: 12px;
          line-height: 2;
          max-width: 95%;
        }

        .Select--standard :global(.Select-value) {
          background-color: transparent;
          color: ${cssVariables.colors.primary.black};
          font-size: initial;
          line-height: initial;
          margin: 0;
        }

        .Select :global(.Select-value-label) {
          display: inline-block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .Select :global(.Select-value-label .select-label-text) {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .Select :global(.Select-value-icon) {
          font-weight: 700;
          margin-left: 5px;
          cursor: pointer;
        }

        .Select :global(.Select-clear-zone) {
          display: none;
        }

        .Select :global(.Select-menu-outer) {
          position: absolute;
          top: 44px;
          left: 0;
          width: 100%;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          box-shadow: 0px 1px 0px 1px ${cssVariables.colors.secondary.blue};
          z-index: 100;
          max-height: 200px;
          overflow-y: auto;
        }

        .Select :global(.Select-option) {
          background: ${cssVariables.colors.neutrals[5]} !important;
          padding: 10px 13px;
          cursor: pointer;
        }

        .Select :global(.Select-option):hover {
          background: ${cssVariables.colors.neutrals[4]} !important;
        }

        .Select :global(.Select-option.hide) {
          display: none;
        }

        .Select :global(.Select-input) {
          display: none;
          width: 0 !important;
        }

        .Select :global(.Select .Select-arrow-zone) {
          color: ${cssVariables.colors.neutrals[0]};
        }

        .Select :global(.Select.is-focused .Select-input) {
          width: auto !important;
        }
        .Select :global(.Select.is-focused .Select-arrow-zone) {
          color: ${cssVariables.colors.secondary.blue};
        }

        .Select--disabled :global(.Select) {
          background: ${cssVariables.colors.neutrals[4]};
          border-color: ${cssVariables.colors.neutrals[2]};
          box-shadow: none;
        }
        .Select--disabled :global(.Select-value) {
          color: ${cssVariables.colors.neutrals[1]};
        }
        .Select--disabled :global(.Select-control) {
          cursor: not-allowed !important;
        }
        `}</style>
    </div>
  );
};

export default Select;
