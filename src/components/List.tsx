import React from 'react';
import { motion } from 'framer-motion';
import { RiCloseCircleLine } from 'react-icons/ri';
import { ListItem } from '../types';

interface ListProps {
  items: ListItem[];
  removeItem: (id: number) => void;
}

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1 }
  }
};

// eslint-disable-next-line arrow-body-style
const List = ({ items, removeItem }: ListProps) => {
  return (
    <div>
      <ul
        // className="ul-portal"
        style={{ display: 'flex', flexDirection: 'column', flex: 2 }}
      >
        {items.map((item: ListItem) => (
          <motion.li
            className="list-row"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            key={item.id}
          >
            <div>{item.text}</div>
            <div className="icons">
              <RiCloseCircleLine
                onClick={() => removeItem(item.id)}
                className="delete-icon"
              />
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default List;
