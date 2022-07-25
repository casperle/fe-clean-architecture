import { useInitUserData, useUserData } from './adapters/userAdapter';
import { wrap } from './utils/wrap';
import { TodoList } from './view/todos/TodoList';

import { UserState } from '../domain/struct/user';

interface IAppProps {
  user: UserState;
}

const AppComponent = ({ user }: IAppProps) => {
  const { isLoggedIn, name } = user;
  return (
    <div className="app">
      <h1 className="app-title">My Tasks</h1>
      <h2 className="app-subtitle">
        User: {isLoggedIn ? name : 'Loading...'}{' '}
      </h2>
      {isLoggedIn && <TodoList />}
    </div>
  );
};

export const App = wrap<{}, IAppProps>(AppComponent, [
  useInitUserData,
  useUserData,
]);
