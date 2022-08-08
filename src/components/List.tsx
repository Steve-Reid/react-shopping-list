import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { ListItem } from '../types';

interface ListProps {
  items: ListItem[];
  removeItem: (id: number) => void;
}

// eslint-disable-next-line arrow-body-style
const List = ({ items, removeItem }: ListProps) => {
  return (
    <div>
      <ul
        className="ul-portal"
        style={{ display: 'flex', flexDirection: 'column', flex: 2 }}
      >
        {items.map((item: ListItem) => (
          <li className="list-row" key={item.id}>
            <div>{item.text}</div>
            <div className="icons">
              <RiCloseCircleLine
                onClick={() => removeItem(item.id)}
                className="delete-icon"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
