import { MessageRoleEnums } from '@constants';
import { Message } from '@models';
import { useCreateMessageMutation, useGetListMessageQuery } from '@services';
import { pick, reverse, unionBy } from 'lodash';
import { useEffect, useRef, useState } from 'react';

const LIMIT = 50;

export function useMessageList(conversationId: number, model: string) {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const { isLoading, isFetching, isError, isUninitialized, refetch, data } =
    useGetListMessageQuery(
      { page, limit: LIMIT, conversationId },
      { skip: conversationId <= 0 },
    );
  const [createMessage, createMessageState] = useCreateMessageMutation();
  const [messages, setMessages] = useState<Message[]>([]);
  const listViewRef = useRef<HTMLUListElement>(null);

  function scrollToBotton() {
    if (listViewRef.current) {
      listViewRef.current?.lastElementChild?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }

  /** SEND MESSAGES */
  async function createMessageHandle(content: string) {
    const userMessage = {
      id: new Date().getMilliseconds(),
      content,
      role: MessageRoleEnums.USER,
      image: '',
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      conversationId,
      isDeleted: false,
    };
    setMessages([userMessage].concat(messages));
    scrollToBotton();
    const { data } = await createMessage({
      content,
      conversationId,
      image: '',
      messages: reverse([...messages]),
      model,
    });
    if (data) {
      setMessages([data?.data.assistant, data?.data.user].concat(messages));
      scrollToBotton();
    }
  }

  useEffect(() => {
    if (createMessageState.isLoading || createMessageState.isError) {
      scrollToBotton();
    }
  }, [createMessageState.isLoading, createMessageState.isError]);

  useEffect(() => {
    if (conversationId > 0 && !isUninitialized) {
      setPage(1);
      refetch();
      setMessages([]);
    }
  }, [conversationId, isUninitialized]);

  useEffect(() => {
    if (data?.data?.data?.length) {
      const total = data.data.total;
      setHasMore(page * LIMIT < total);
      setMessages(unionBy(messages.concat(data?.data?.data ?? []), 'id'));
    }
  }, [data?.data]);

  useEffect(() => {
    if (page === 1 && messages.length > 0) {
      const tOut = setTimeout(scrollToBotton, 500);

      return () => clearTimeout(tOut);
    }
  }, [messages]);

  async function onLoadMore() {
    if (hasMore) {
      await refetch();
      setPage(page + 1);
    }
  }

  return {
    listViewRef,
    messageList: {
      isLoading: isLoading || isFetching,
      isError,
      data: [...messages],
      hasMore,
      onLoadMore,
    },
    createMessage: {
      ...pick(createMessageState, ['isLoading', 'isError']),
      createMessageHandle,
    },
  };
}
