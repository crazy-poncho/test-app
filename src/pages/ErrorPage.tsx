import { FC } from 'react';

type ErrorPageProps = {
  error: Error;
};

export const ErrorPage: FC<ErrorPageProps> = props => (
  <div className='grid h-screen place-content-center'>
    <h1 className='tracking-widest text-gray-700 uppercase'>Error: {props.error.message}</h1>
  </div>
);
