export function TodoItem(props) {
  return (
    <view className="todo-item">
      <view className="todo-item-name">{props.item.text}</view>

      <button
        className="todo-remove-button"
        onClick={() => props.onRemove(props.item.id)}
      >
        <icon>delete</icon>
      </button>
    </view>
  );
}
