import { A } from "@solidjs/router";
import Header from "../components/Header";
import TodoItem from "../components/TodoItem";
import {
  profile,
  isLoggedIn,
  todos,
  db,
  collection,
  addDoc,
} from "../firebase.config";

function Todos() {
  let todoInput;
  return (
    <>
      <Header />
      <div
        className="
        flex flex-col items-center justify-center
        h-screen pb-7"
      >
        <div
          className="
            rounded
            flex flex-col items-center
            p-5 w-10/12 max-w-5xl h-[450px]
            bg-black/90"
        >
          {isLoggedIn() ? (
            <>
              <h1
                className="
                font-bold text-center
                text-white text-5xl"
              >
                Todos
              </h1>
              <h2
                className="
                mt-2
                font-medium
                text-center text-white text-xl"
              >
                {todos().length === 0
                  ? "There are no tasks, awesome!"
                  : "These are your tasks for today."}
              </h2>
              <ul
                className="
                my-5 h-48 overflow-auto w-10/12
                flex flex-col gap-2"
              >
                {todos().map((todo) => (
                  <TodoItem todo={todo} />
                ))}
              </ul>
              <div className="flex gap-2 mt-2">
                <input
                  className="
                  bg-white rounded
                  outline-none text-xl
                  p-1 text-black"
                  ref={todoInput}
                  placeholder="Todo.."
                />
                <button
                  className="
                  bg-white rounded text-xl
                  p-1 text-black font-medium"
                  onClick={() => {
                    if (todoInput.value === "") return;
                    addDoc(collection(db, "todos"), {
                      todo: todoInput.value,
                      author: profile().username,
                    });
                    todoInput.value = "";
                    todoInput.focus();
                  }}
                >
                  Add Todo
                </button>
              </div>
            </>
          ) : (
            <>
              <h1
                className="
                font-bold text-center
                text-white text-5xl"
              >
                Todos
              </h1>
              <h2
                className="
                mt-2
                font-medium
                text-center text-white text-xl"
              >
                You must be logged in,{" "}
                <A
                  href="/Login"
                  className="font-bold"
                >
                  click here to login.
                </A>
              </h2>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Todos;
