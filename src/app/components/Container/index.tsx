import {ReactNode} from 'react';
import {JSX} from 'react';

type ContainerProps = {
    children: ReactNode
}

/**
 * Container component.
 *
 * @param {ContainerProps} props - The component props.
 * @return {JSX.Element} The rendered component.
 */
export default function Container({children}: ContainerProps): JSX.Element {
  return (
    <div
      className="flex flex-col items-start justify-center min-h-screen">
      {children}
    </div>
  );
}
