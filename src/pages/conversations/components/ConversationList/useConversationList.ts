import {
  useCreateConversationMutation,
  useDeleteConversationMutation,
  useGetListConversationQuery,
  useUpdateConversationMutation,
} from '@services';
import { userIdSelector, useSelector } from '@reducers';
import { Conversation } from '@models';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { get, isEqual } from 'lodash';
import { formatDate } from '@utils';
import { dateFormat } from '@constants';
import { useTranslation } from 'react-i18next';

interface Props {
  editting: number;
  setEditting(value: number): void;
}

export default function useConversationList({ editting, setEditting }: Props) {
  const userId = useSelector(userIdSelector);
  const getListConversationState = useGetListConversationQuery({
    userId,
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const [selected, setSelected] = useState(
    Number(searchParams.get('id')) || -1,
  );
  const [createConversation, createConversationState] =
    useCreateConversationMutation();
  const [updateConversation, updateConversationState] =
    useUpdateConversationMutation();
  const [deleteConversation, deleteConversationState] =
    useDeleteConversationMutation();
  const [data, setData] = useState<Conversation[]>([]);
  const loadingState = [
    get(getListConversationState, ['isFetching']),
    get(getListConversationState, ['isLoading']),
    get(createConversationState, ['isLoading']),
    get(updateConversationState, ['isLoading']),
    get(deleteConversationState, ['isLoading']),
  ].includes(true);
  const conversationNameStrategy = formatDate(
    new Date(),
    dateFormat.DDMMyyyyHHmm,
  );
  const { t } = useTranslation();

  /** CREATE NEW CONVERSATION */
  async function createConversationHandle() {
    const { data: conversation } = await createConversation({
      userId,
      name: conversationNameStrategy,
    });
    setData((conversation?.data ? [conversation?.data] : []).concat(data));
  }

  function onSelectConversation(selected: number) {
    setSearchParams({ id: String(selected) });
  }

  /** UPDATE CONVERSATION */
  async function updateConversationHandle(id: number, name: string) {
    if (editting >= 0) {
      const response = await updateConversation({ id, name });
      if (response?.data) {
        setData(
          data.map((item) =>
            isEqual(item.id, id) ? response?.data?.data : item,
          ),
        );
        setEditting(-1);
        return response?.data;
      }
    }
    return { error: t('GLOBAL.ERROR') };
  }

  /** DELETE CONVERSATION */
  async function deleteConversationHandle(id: number) {
    if (editting >= 0) {
      const response = await deleteConversation({ id });
      if (response?.data) {
        const newData = data.filter((item) => !isEqual(item.id, id));
        setData(newData);
        setEditting(-1);
        setSelected(newData[0]?.id ?? -1);
        return { data: [] };
      }
    }
    return { error: t('GLOBAL.ERROR') };
  }

  useEffect(() => {
    const newData = getListConversationState.data?.data;

    if (data.length === 0 && newData?.length) {
      if (selected < 0) {
        setSearchParams({
          id: newData[0]?.id?.toString() ?? selected.toString(),
        });
      }
      setData(newData);
    }
  }, [data, getListConversationState.data?.data, selected]);

  useEffect(() => {
    if (Number(searchParams.get('id')) > 0) {
      setSelected(Number(searchParams.get('id')));
    }
  }, [searchParams]);

  return {
    isLoading: loadingState,
    isError: getListConversationState.isError,
    data,
    selected,
    setSelected: onSelectConversation,
    createConversationHandle,
    openMenu: setEditting,
    closeMenu: () => setEditting(-1),
    showMenu: editting,
    onUpdate: updateConversationHandle,
    onDelete: deleteConversationHandle,
  };
}
