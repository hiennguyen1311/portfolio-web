import { List, ListItem } from '@mui/material';
import { Conversation } from '@models';
import ConversationItem from './ConversationItem';

interface Props {
  isLoading: boolean;
  selected: number;
  data: Conversation[];
  setSelected(id: number): void;
  openMenu(id: number): void;
  closeMenu(): void;
  showMenu: number;
  onUpdate(id: number, name: string): void;
  onDelete(id: number): void;
}

export default function ConversationList({
  selected,
  data,
  setSelected,
  openMenu,
  closeMenu,
  showMenu,
  onUpdate,
  onDelete,
}: Props) {
  return (
    <List>
      {data.map((item, index) => (
        <ListItem key={index}>
          <ConversationItem
            item={item}
            selected={selected}
            onClick={setSelected}
            onDelete={onDelete}
            onUpdate={onUpdate}
            openMenu={openMenu}
            closeMenu={closeMenu}
            showMenu={showMenu}
          ></ConversationItem>
        </ListItem>
      ))}
    </List>
  );
}
