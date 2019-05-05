import cssVariables from 'utils/cssVariables';

const Radio = ({ children, className, input = {}, ...props }) => (
  <label
    className={`
      Radio
      ${className ? className : ''}
    `}
  >
    <input className="Radio__input" type="radio" {...input} {...props} />
    <span className="Radio__indicator" /> {children || input.value}


    <style jsx>{`
      .Radio {
        display: flex;
        align-items: center;
        cursor: pointer;
        font-size: 12px;
        margin-bottom: 10px;
      }

      .Radio__input {
        display: none;
      }

      .Radio__indicator {
        display: flex;
        flex-shrink: 0;
        width: 16px;
        height: 16px;
        border: 1px solid ${cssVariables.colors.secondary.blue};
        border-radius: 50%;
        margin-right: 10px;
        align-items: center;
        justify-content: center;
      }

      .Radio__indicator:before {
        display: block;
        width: 8px;
        height: 8px;
        background: ${cssVariables.colors.secondary.blue};
        border-radius: 50%;
        content: '';
        transform: scale(0);
        will-change: transform;
        transition: transform 0.2s ease-out;
      }

      .Radio:hover .Radio__indicator:before {
        transform: scale(0.3);
      }

      .Radio__input:checked + .Radio__indicator:before {
        transform: scale(1);
      }
    `}</style>
  </label>
);

export default Radio;
