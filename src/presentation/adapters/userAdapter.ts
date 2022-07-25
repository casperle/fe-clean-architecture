import { useEffect, useMemo } from 'react';

import {
  useStoreUserActions,
  useStoreData,
  StoreDataSelectors,
} from './storeAdapter';

import { UserRepository } from '../../infrastructure/api/UserRepository';

export const useInitUserData = () => {
  const { setUser } = useStoreUserActions();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await UserRepository.getActiveUser();

      const { firstName, lastName, id, email } = user;

      setUser({ name: `${firstName} ${lastName}`, id, email });
    };

    fetchUser();
  }, []);
};

export const useUserData = () => {
  const user = useStoreData(StoreDataSelectors.USER);

  return useMemo(() => ({ user }), [user]);
};
