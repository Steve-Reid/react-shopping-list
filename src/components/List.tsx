import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiCloseCircleLine } from 'react-icons/ri';
import { ListItem } from '../types';

interface ListProps {
  items: ListItem[];
  removeItem: (id: number) => void;
}

const itemVariants = {
  hidden: { opacity: 0 },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom }
  })
};

// eslint-disable-next-line arrow-body-style
const List = ({ items, removeItem }: ListProps) => {
  return (
    <div>
      <ul
        // className="ul-portal"
        style={{ display: 'flex', flexDirection: 'column', flex: 2 }}
      >
        <AnimatePresence>
          {items.map((item: ListItem, index) => (
            <motion.li
              className="list-row"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              custom={(index + 1) * 0.2}
              layoutId={`${item.id}`}
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
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default List;
