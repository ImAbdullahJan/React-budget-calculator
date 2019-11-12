import React from "react";
import Item from "./ExpenseItem";
import { MdDelete } from "react-icons/md";

const ExpenseList = ({ expenses, handleDelete, handleEdit, clearItems }) => {
  return (
    <>
      <ul className='list'>
        {expenses.map(exp => {
          return (
            <Item
              key={exp.id}
              expense={exp}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button className='btn' onClick={() => clearItems()}>
          clear expenses
          <MdDelete className='btn-icon' />
        </button>
      )}
    </>
  );
};

export default ExpenseList;
