import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, editTodo } from "../slices/slice";
const Modal = ({ visible, closeModal, id, changeId, task }) => {
  const [text, setText] = useState("");
  useEffect(() => {
    setText(id === null ? "" : task);
  }, [visible]);
  const dispatch = useDispatch();
  const addTask = () => {
    dispatch(addTodo(text));
    closeModal();
  };
  const updateTask = () => {
    dispatch(editTodo({ id, text }));
    closeModal();
    changeId(null);
  };
  return (
    <div
      className={`${
        visible ? "" : "hidden"
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full`}
    >
      <div className="relative p-4 w-full max-w-md max-h-full mx-auto mt-10">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Todo Modal
            </h3>
            <button
              type="button"
              className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => closeModal()}
            >
              <AiOutlineClose className="w-3 h-3"></AiOutlineClose>
            </button>
          </div>
          <div className="p-4 md:p-5">
            <div className="space-y-4" action="#">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  task
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
              </div>
              <button
                onClick={() => {
                  id === null ? addTask() : updateTask();
                }}
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
