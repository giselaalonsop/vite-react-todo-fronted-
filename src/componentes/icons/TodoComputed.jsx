

const TodoComputed = ({ getComputedItemsLeft, clearCompleted }) => {
  const computedItemsLeft = getComputedItemsLeft();

  return (
    <>
      <section className="py-4 px-4 flex justify-between rounded-b-md bg-white  dark:bg-gray-800 transition-all duration-1000">
        <span className="text-gray-400">{computedItemsLeft} items left</span>
        <button onClick={clearCompleted} className="text-gray-400 px-1">
          Clear Completed
        </button>
      </section>
    </>
  );
};

export default TodoComputed;
