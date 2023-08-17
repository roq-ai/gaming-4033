const mapping: Record<string, string> = {
  bets: 'bet',
  games: 'game',
  invitations: 'invitation',
  organizations: 'organization',
  'team-members': 'team_member',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
