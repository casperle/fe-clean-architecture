import { useMemo } from 'react';

import { useDispatch, useSelector } from '../lib/store';

import { User, UserState } from '../../domain/struct/user';
import { setUser } from '../../services/store/user/userSlice';

export enum StoreDataSelectors {
  USER = 'user',
}

interface StoreState {
  user: UserState;
}

export const useStoreData = (dataSelector: StoreDataSelectors) => {
  return useSelector((state: StoreState) => {
    return state[dataSelector];
  });
};

export const useStoreUserActions = () => {
  const dispatch = useDispatch();

  return useMemo(
    () => ({
      setUser: (user: User) =>
        dispatch(
          setUser({
            user,
          })
        ),
    }),
    [dispatch]
  );
};
