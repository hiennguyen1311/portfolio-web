import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SideBar from './components/SideBar';
import { drawerWidth } from './configs';
import AppBar from './components/AppBar';
import ConversationList from './components/ConversationList/ConversationList';
import MessageList from './components/MessageList/MessageList';
import { FormProvider } from 'react-hook-form';
import { useCombinedMainPage } from './useCombinedMainPage';
import MessageSender from './components/MessageSender';
import { LoadingContainer } from '@components';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  height: '100vh',
  width: '100%',
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));

export default function MainConversationsPage() {
  const {
    sidebar,
    messageList,
    createMessage,
    onClearMessage,
    conversationList,
    listViewRef,
    form,
    settings,
  } = useCombinedMainPage();

  return (
    <FormProvider {...form.methods}>
      <LoadingContainer open={conversationList.isLoading}>
        <Box sx={{ display: 'flex' }}>
          <AppBar
            position="fixed"
            open={sidebar.open}
            onOpen={sidebar.onOpen}
            isLoading={messageList.isLoading}
            settings={settings}
          ></AppBar>

          <SideBar
            {...sidebar}
            onAddNew={conversationList.createConversationHandle}
          >
            <ConversationList {...conversationList}></ConversationList>
          </SideBar>

          <Main open={sidebar.open}>
            {conversationList.selected > 0 && (
              <>
                <MessageList
                  isLoading={createMessage.isLoading}
                  data={messageList.data}
                  listViewRef={listViewRef}
                  isError={createMessage.isError}
                  onLoadMore={messageList.onLoadMore}
                ></MessageList>

                <MessageSender
                  message={form.values.userMessage}
                  onClearMessage={onClearMessage}
                  onSubmit={() => {
                    createMessage.createMessageHandle(form.values.userMessage);
                    onClearMessage();
                  }}
                  disabled={
                    messageList.isLoading ||
                    createMessage.isLoading ||
                    !form.isValid
                  }
                  register={form.register('userMessage')}
                ></MessageSender>
              </>
            )}
          </Main>
        </Box>
      </LoadingContainer>
    </FormProvider>
  );
}
