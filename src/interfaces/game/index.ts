import { BetInterface } from 'interfaces/bet';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface GameInterface {
  id?: string;
  name: string;
  rules: string;
  betting_limit: number;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  bet?: BetInterface[];
  organization?: OrganizationInterface;
  _count?: {
    bet?: number;
  };
}

export interface GameGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  rules?: string;
  organization_id?: string;
}
