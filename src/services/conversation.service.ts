import {
  Conversation,
  CreateConversationPayload,
  DataApiResponse,
  DeleteConversationPayload,
  GetListConversationPayload,
  UpdateConversationPayload,
} from '@models';
import { api } from './api.service';
import { API_PATHS } from './service.config';

const conversationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getListConversation: builder.query<
      DataApiResponse<Conversation[]>,
      GetListConversationPayload
    >({
      query: (body) => ({
        url: API_PATHS.conversactionGetList(body.userId),
        method: 'GET',
      }),
    }),
    createConversation: builder.mutation<
      DataApiResponse<Conversation>,
      CreateConversationPayload
    >({
      query: (body) => ({
        url: API_PATHS.conversationCreate,
        method: 'POST',
        body,
      }),
    }),
    updateConversation: builder.mutation<
      DataApiResponse<Conversation>,
      UpdateConversationPayload
    >({
      query: (body) => ({
        url: API_PATHS.conversationUpdate,
        method: 'PUT',
        body,
      }),
    }),
    deleteConversation: builder.mutation<
      DataApiResponse<boolean>,
      DeleteConversationPayload
    >({
      query: (body) => ({
        url: API_PATHS.conversationDelete,
        method: 'DELETE',
        body,
      }),
    }),
  }),
});

export const {
  useGetListConversationQuery,
  useCreateConversationMutation,
  useUpdateConversationMutation,
  useDeleteConversationMutation,
} = conversationApi;
