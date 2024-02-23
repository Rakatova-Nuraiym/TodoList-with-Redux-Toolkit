import { useState } from "react";

import {
  Edit,
  competed,
  deleteOne,
} from "../../redux/store/features/todoSlice";
import { Todo } from "../../types";
import scss from "./todo.module.scss";
import { UseAppSelector, useAppDispatch } from "../../redux/store/store";

const RenderTodo = () => {
  const todo = UseAppSelector((state) => state.todo);

  const dispatch = useAppDispatch();

  const [title, setName] = useState("");
  const [age, setAge] = useState<number>(0);
  const [edit, setEdit] = useState(null || 0);

  const [level, setLevel] = useState<string>("");

  const deleteFunc = (id: number) => {
    dispatch(deleteOne({ id }));
  };

  const EditFunc = (item: Todo) => {
    setEdit(item.id);
    setName(item.title);
    setLevel(item.level);
    setAge(item.age);
  };

  const upData = (id: number) => {
    dispatch(Edit({ id, title, level, age }));
    setEdit(0);
  };

  const cilcel = () => {
    setEdit(0);
  };

  const completed = (id: number, item: Todo) => {
    dispatch(competed({ id, item }));
  };
  return (
    <div className={scss.rendered}>
      {todo.map((item) => (
        <div key={item.id} className={scss.todo}>
          {edit === item.id ? (
            <div className={scss.editDiv}>
              <div className={scss.inputs}>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                />
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(+e.target.value)}
                />
              </div>
              <button className={scss.deleteButton} onClick={cilcel}>
                cincel
              </button>
              <button
                className={scss.editButton}
                onClick={() => upData(item.id)}
              >
                save
              </button>
            </div>
          ) : (
            <div className={scss.renderText}>
              <input type="checkbox" onClick={() => completed(item.id, item)} />
              <h2 className={item.isCompleted ? scss.text : ""}>
                {item.title}
              </h2>

              <p>{item.level}</p>
              <p>{item.age}</p>
              <div>
                <button
                  className={scss.editButton}
                  onClick={() => {
                    EditFunc(item);
                    setEdit(item.id);
                  }}
                >
                  updata
                </button>
                <button
                  className={scss.deleteButton}
                  onClick={() => deleteFunc(item.id)}
                >
                  delete
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RenderTodo;
