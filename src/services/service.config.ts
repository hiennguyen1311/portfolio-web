const API_URL: string = 'http://217.15.163.43:4000';
const PORT: number = import.meta.env.PORT;

export const API_PATHS = {
  login: 'api/auth/login',
  conversactionGetList: (id: number) => `api/conversations/${id}`,
  conversationCreate: 'api/conversations/create',
  conversationUpdate: 'api/conversations/update',
  conversationDelete: 'api/conversations/delete',
  messageCreate: 'api/messages/create',
  messageGetList: (id: number) => `api/messages/${id}`,
};

export { API_URL, PORT };
