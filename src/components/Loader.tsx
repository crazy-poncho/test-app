import { FC } from 'react';

export const Loader: FC = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='border-4 border-blue-700 border-l-transparent rounded-full w-18 h-18 animate-spin' />
    </div>
  );
};
