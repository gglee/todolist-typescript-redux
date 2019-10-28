import React, { ChangeEvent, FormEvent, useState } from 'react';
import useAddTodo from '../hooks/useAddTodo';

function TodoInsert() {
  const [value, setValue] = useState('');
  const addTodo = useAddTodo();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };
  return (
    <form onSubmit={onSubmit}>
      <input placeholder="Add a todo" value={value} onChange={onChange} />
      <button type="submit">register</button>
    </form>
  );
}

export default TodoInsert;
