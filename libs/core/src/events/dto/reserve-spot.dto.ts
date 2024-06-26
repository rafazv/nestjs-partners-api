import { TicketKind } from '@prisma/client';

export class ReserveSpotDto {
  spots: string[];
  ticketKind: TicketKind;
  email: string;
}
