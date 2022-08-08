import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ListItem } from '../types';

interface ListFormProps {
  onSubmit: (item: ListItem) => void;
}

const ListForm = ({ onSubmit }: ListFormProps) => {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };
  return (
    <motion.form
      className="list-form"
      onSubmit={handleSubmit}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <input
        type="text"
        placeholder="Add an item"
        value={input}
        name="text"
        className="list-input"
        onChange={handleChange}
        ref={inputRef}
      />
      <button type="submit" className="list-button">
        Add
      </button>
    </motion.form>
  );
};

export default ListForm;
