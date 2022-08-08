import React from 'react';
import { motion, AnimatePresence, Reorder } from 'framer-motion';
import { RiCloseCircleLine } from 'react-icons/ri';
import { ListItem } from '../types';

interface ListProps {
  items: ListItem[];
  removeItem: (id: number) => void;
  reOrderList: React.Dispatch<React.SetStateAction<ListItem[]>>;
}

const itemVariants = {
  hidden: { opacity: 0 },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom }
  })
};

// eslint-disable-next-line arrow-body-style
const List = ({ items, removeItem, reOrderList }: ListProps) => {
  return (
    <div>
      <Reorder.Group
        axis="y"
        values={items}
        onReorder={reOrderList}
        style={{ display: 'flex', flexDirection: 'column', flex: 2 }}
      >
        <AnimatePresence>
          {items.map((item: ListItem, index) => (
            <Reorder.Item
              value={item}
              className="list-row"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              custom={(index + 1) * 0.2}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.1 }}
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
            </Reorder.Item>
          ))}
        </AnimatePresence>
      </Reorder.Group>
    </div>
  );
};

export default List;
