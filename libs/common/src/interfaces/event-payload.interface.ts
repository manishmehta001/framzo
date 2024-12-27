import { EventMessages } from '../enums';

export interface EventPayload {
  userId: string;
  type: EventMessages;
  data: any;
}
