const CartItem = ({
  item,
  onIncrease,
  onDecrease,
  onRemove
}) => {
  return (
    <tr>
      <td>{item.name}</td>

      <td>{item.price.toLocaleString()} FCFA</td>

      <td>
        <button
          className="btn btn-sm btn-outline-secondary me-2"
          onClick={() => onDecrease(item.id, item.size)}
        >
          -
        </button>

        {item.quantity}

        <button
          className="btn btn-sm btn-outline-secondary ms-2"
          onClick={() => onIncrease(item)}
        >
          +
        </button>
      </td>

      <td>
        {(item.price * item.quantity).toLocaleString()} FCFA
      </td>

      <td>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => onRemove(item.id, item.size)}
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
