import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface InvitationInterface {
  id?: string;
  status: string;
  invited_user_id?: string;
  inviting_user_id?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  user_invitation_invited_user_idTouser?: UserInterface;
  user_invitation_inviting_user_idTouser?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface InvitationGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  invited_user_id?: string;
  inviting_user_id?: string;
  organization_id?: string;
}
