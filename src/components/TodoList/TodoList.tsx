import { useState } from "react";
import { useAppDispatch } from "../../redux/store/store";
import { addTodo, deleteAll } from "../../redux/store/features/todoSlice";
import RenderTodo from "./RenderTodo";
import scss from "./mainTodo.module.scss";
const TodoList = () => {
  const dispatch = useAppDispatch();
  const [title, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [level, setLevel] = useState("");

  const addFunc = () => {
    if (title !== "" || age !== 0 || level !== "") {
      dispatch(addTodo({ title, age, level }));
      setName("");
      setAge(0);
      setLevel("");
    } else {
      alert("fill the feild");
    }
  };

  const DeleteAll = () => {
    dispatch(deleteAll());
  };

  return (
    <div className={scss.TodoList}>
      <div className={scss.todo}>
        <div className={scss.inputs}>
          {" "}
          <input
            type="text"
            value={title}
            onChange={(e) => setName(e.target.value)}
            placeholder="title"
          />
          <input
            type="text"
            value={level}
            placeholder="level"
            onChange={(e) => setLevel(e.target.value)}
          />
          <input
            type="text"
            value={age}
            placeholder="age"
            onChange={(e) => setAge(+e.target.value)}
          />
        </div>
        <div>
          <button className={scss.addButton} onClick={addFunc}>
            add
          </button>
          <button className={scss.deleteButton} onClick={DeleteAll}>
            deleteAll
          </button>
        </div>
      </div>
      <RenderTodo />
    </div>
  );
};

export default TodoList;
