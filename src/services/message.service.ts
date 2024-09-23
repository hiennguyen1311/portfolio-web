import {
  Message,
  DataApiResponse,
  GetListMessagePayload,
  CreateMessageDataPayload,
  CreateMessagePayload,
} from '@models';
import { api } from './api.service';
import { API_PATHS } from './service.config';
import qs from 'qs';

const messageApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getListMessage: builder.query<
      DataApiResponse<{
        data: Message[];
        page: number;
        limit: number;
        total: number;
      }>,
      GetListMessagePayload
    >({
      query: (body) => ({
        url: API_PATHS.messageGetList(body.conversationId)
          .concat('?')
          .concat(qs.stringify({ page: body.page, limit: body.limit })),
        method: 'GET',
      }),
    }),
    createMessage: builder.mutation<
      DataApiResponse<CreateMessageDataPayload>,
      CreateMessagePayload
    >({
      query: (body) => ({
        url: API_PATHS.messageCreate,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetListMessageQuery, useCreateMessageMutation } = messageApi;
