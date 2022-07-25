import { HttpClient } from '../service/HttpClient';

export const UserRepository = {
  getActiveUser: () => HttpClient.get('users/1'),
};
