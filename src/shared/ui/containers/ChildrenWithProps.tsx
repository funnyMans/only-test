import React, { PropsWithChildren } from 'react';

interface InjectedProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
const ChildrenWithProps = ({
  children,
  ...props
}: PropsWithChildren<InjectedProps>) => {
  return (
    <>
      {React.Children?.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { ...props })
          : child
      )}
    </>
  );
};

export default ChildrenWithProps;
