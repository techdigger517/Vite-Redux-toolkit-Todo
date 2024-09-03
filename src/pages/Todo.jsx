import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import { deleteTodo, toggleDone } from "../slices/slice";
import Modal from "../components/Modal";
const Todo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState(null);
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const todoData = useSelector((state) => state.todo);
  const addModalOpen = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const idMakeNull = () => {
    setId(null);
  };
  const deleteFunc = (id) => {
    dispatch(deleteTodo(id));
  };
  const toggleCheck = (id) => {
    dispatch(toggleDone(id));
  };
  return (
    <div>
      <h1 className="mt-10 text-center mx-auto text-4xl font-extrabold leading-none tracking-tight text-gray-900 text-4xl dark:text-white mb-20">
        ToDo List
      </h1>
      <button
        className=" mx-auto block text-white mb-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => addModalOpen()}
      >
        Toggle modal
      </button>
      <div>
        <ul className="max-w-md mx-auto divide-y divide-gray-200 text-xl dark:divide-gray-700">
          {todoData.tasks.map((value, index) => (
            <li key={value.id} className="pb-3 sm:pb-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  {value.done ? (
                    <AiFillCheckCircle className=" text-sky-500/100 " />
                  ) : (
                    <AiFillCloseCircle />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-sm font-medium text-gray-900 truncate dark:text-white cursor-pointer ${
                      value.done
                        ? "line-through decoration-black-500 decoration-2"
                        : ""
                    }`}
                    onClick={() => toggleCheck(value.id)}
                  >
                    {value.text}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <a
                    className="mr-2 hover:underline cursor-pointer text-sky-200"
                    onClick={() => {
                      addModalOpen();
                      setId(value.id);
                      setTask(value.text);
                    }}
                  >
                    Update
                  </a>
                  <a
                    className=" hover:underline  cursor-pointer text-red-300"
                    onClick={() => deleteFunc(value.id)}
                  >
                    Delete
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Modal
        visible={modalVisible}
        closeModal={closeModal}
        id={id}
        changeId={idMakeNull}
        task={task}
      ></Modal>
    </div>
  );
};

export default Todo;
