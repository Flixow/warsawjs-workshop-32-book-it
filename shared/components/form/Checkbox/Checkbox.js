import PropTypes from 'prop-types';
import classnames from 'classnames';
import cssVariables from 'utils/cssVariables';

const Checkbox = ({
  children,
  className,
  input = {},
}) => (
  <label
    className={classnames(
      'Checkbox',
      className
    )}
  >
    <input className="Checkbox__input" type="checkbox" {...input} />
    <span className="Checkbox__indicator">
      <i className="icon icon-checkbox">
        <span className="path1" />
        <span className="path2" />
        <span className="path3" />
      </i>
    </span>
    <div className="Checkbox__label">
      {children}
    </div>

    <style jsx>{`
      .Checkbox {
        display: flex;
        cursor: pointer;
      }

      .Checkbox__label {
        font-size: 16px;
        line-height: 18px;
      }

      .Checkbox__input {
        display: none;
      }

      .Checkbox__indicator {
        display: flex;
        flex-shrink: 0;
        width: 18px;
        height: 18px;
        border: 2px solid #fff;
        border-radius: 4px;
        margin-right: 10px;
        align-items: center;
        justify-content: center;
      }

      .Checkbox__indicator .icon {
        display: block;
        font-size: 18px;
        line-height: 14px;
        height: 14px;
        color: ${cssVariables.colors.secondary.green};
        background-color: #fff;
        border-radius: 4px;
        transform: scale(0);
        will-change: transform;
        transition: transform 0.2s ease-out;
      }

      .Checkbox:hover .Checkbox__indicator .icon  {
        transform: scale(0.3);
      }

      .Checkbox__input[value='true'] + .Checkbox__indicator .icon {
        transform: scale(1.1);
      }

      .Checkbox .Checkbox__indicator {
        background-color: #fff;
        border-color: #0066FF;
      }

      .Checkbox .Checkbox__indicator .icon {
        color: #0066FF;
      }
    `}</style>
  </label>
);

Checkbox.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

export default Checkbox;
