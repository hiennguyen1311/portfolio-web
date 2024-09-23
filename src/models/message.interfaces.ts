import { MessageRoleEnums } from '@constants';

export interface Message {
  id: number;
  conversationId: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
  image: string;
  role: MessageRoleEnums;
}

export interface GetListMessagePayload {
  conversationId: number;
  page: number;
  limit: number;
}

export interface CreateMessagePayload {
  content: string;
  image: string;
  messages: Message[];
  conversationId: number;
  model?: string;
}

export interface CreateMessageDataPayload {
  user: Message;
  assistant: Message;
}
