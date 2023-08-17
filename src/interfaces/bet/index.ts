import { GameInterface } from 'interfaces/game';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BetInterface {
  id?: string;
  amount: number;
  status: string;
  game_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  game?: GameInterface;
  user?: UserInterface;
  _count?: {};
}

export interface BetGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  game_id?: string;
  user_id?: string;
}
