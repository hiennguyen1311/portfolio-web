import useConversationList from './components/ConversationList/useConversationList';
import { useMessageList } from './components/MessageList/useMessageList';
import useSettings from './components/settings/useSettings';
import useMainConversation from './useMainConversations';

export function useCombinedMainPage() {
  const {
    sidebar,
    methods,
    isValid,
    register,
    onClearMessage,
    values,
    setEditting,
    editting,
  } = useMainConversation();
  const conversationList = useConversationList({ editting, setEditting });
  const settings = useSettings();
  const { createMessage, messageList, listViewRef } = useMessageList(
    conversationList.selected,
    settings.model.value,
  );

  return {
    createMessage,
    messageList,
    listViewRef,
    sidebar,
    onClearMessage,
    conversationList,
    form: {
      values,
      methods,
      isValid,
      register,
    },
    settings,
  };
}
