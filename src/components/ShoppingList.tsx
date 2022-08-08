import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ListItem } from '../types';
import List from './List';
import ListForm from './ListForm';

const ShoppingList = () => {
  const [items, setItems] = useState<ListItem[]>([] as ListItem[]);

  useEffect(() => {
    const storedItems: ListItem[] = JSON.parse(
      localStorage.getItem('items') || '""'
    );
    if (storedItems) setItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addListItem = (item: ListItem) => {
    if (!item.text || /^\s*$/.test(item.text)) {
      return;
    }
    const newListListItem = [item, ...items];
    setItems(newListListItem);
  };

  const removeItem = (id: number) => {
    setItems(previousItems =>
      [...previousItems].filter(item => item.id !== id)
    );
  };

  return (
    <div>
      <motion.h1
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        Shopping List
      </motion.h1>
      <ListForm onSubmit={addListItem} />
      <List items={items} removeItem={removeItem} />
    </div>
  );
};

export default ShoppingList;
