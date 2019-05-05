import Radio from './RadioField';

const RadioList = ({ items, input }) => (
  <div>
    <div className="RadioList__List">
      {items.map(item => (
        <Radio
          key={item.value}
          checked={input.value === item.value}
          value={item.value}
          onChange={input.onChange}
        >
          {item.text || item.value}
        </Radio>
      ))}
    </div>

    <style jsx>{`
      .RadioList__List {
        display: flex;
      }

      .RadioList :global(.Radio) {
        margin-bottom: 0;
      }

      .RadioList__List :global(.Radio + .Radio) {
        margin-left: 15px;
      }
      :global(.Input--radio-list .Input__field--wrapper) {
        box-shadow: none!important;
      }
    `}</style>
  </div>
);

export default RadioList;
