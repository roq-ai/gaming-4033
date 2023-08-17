import { GameInterface } from 'interfaces/game';
import { InvitationInterface } from 'interfaces/invitation';
import { TeamMemberInterface } from 'interfaces/team-member';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  status?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  game?: GameInterface[];
  invitation?: InvitationInterface[];
  team_member?: TeamMemberInterface[];
  user?: UserInterface;
  _count?: {
    game?: number;
    invitation?: number;
    team_member?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  status?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
