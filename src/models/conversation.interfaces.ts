import { MessageRoleEnums } from '@constants';

export interface Conversation {
  id: number;
  isDeleted: boolean;
  updatedAt: string;
  createdAt: string;
  name: string;
  type: MessageRoleEnums;
}

export interface GetListConversationPayload {
  userId: number;
}

export interface CreateConversationPayload {
  userId: number;
  name: string;
}

export interface UpdateConversationPayload {
  id: number;
  name: string;
}

export interface DeleteConversationPayload {
  id: number;
}
