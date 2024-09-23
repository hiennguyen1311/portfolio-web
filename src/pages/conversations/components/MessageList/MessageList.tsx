import { List, ListItem } from '@mui/material';
import { Box } from '@mui/system';
import { ErrorView, LazyLoading } from '@components';
import MessageItem from './Message';
import { Message } from '@models';
import { RefObject, UIEvent } from 'react';
import { reverse } from 'lodash';

const LIST_DETECT = 10;

interface Props {
  isLoading: boolean;
  data: Message[];
  listViewRef: RefObject<HTMLUListElement>;
  isError?: boolean;
  onLoadMore?(): void;
}

export default function MessageList({
  isLoading,
  data,
  listViewRef,
  isError,
  onLoadMore = () => {},
}: Props) {
  const list = reverse([...data]);

  function onScroll(e: UIEvent) {
    if (e.currentTarget.scrollTop < LIST_DETECT) {
      onLoadMore();
    }
  }

  return (
    <Box
      sx={{
        flex: 1,
        overflowY: 'hidden',
        paddingTop: 8,
        display: 'flex',
        overflow: 'hidden',
        height: '100%',
        width: '100%',
      }}
    >
      <List
        ref={listViewRef}
        sx={{ overflow: 'auto', height: '100%' }}
        onScroll={onScroll}
      >
        {list.map((item, index) => (
          <ListItem key={item.id}>
            <MessageItem
              item={item}
              previous={list[index - 1]?.createdAt}
            ></MessageItem>
          </ListItem>
        ))}
        {isLoading && (
          <Box sx={{ padding: 2, width: '70%' }}>
            <LazyLoading></LazyLoading>
          </Box>
        )}
        {isError && <ErrorView></ErrorView>}
      </List>
    </Box>
  );
}
