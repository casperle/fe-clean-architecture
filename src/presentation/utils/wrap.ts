import { FC, createElement } from 'react';

export const wrap = <Props extends object, ViewProps extends object>(
  View: FC<Partial<ViewProps>>,
  controllers: Array<(props: Props) => Partial<ViewProps> | null | void>
) => (args: Props) =>
  createElement(
    View,
    ...controllers
      .map((useController) => useController(args) as Partial<ViewProps> | null)
      .filter(Boolean)
  );
