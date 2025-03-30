import { FC, ReactNode } from 'react';

type BadgeProps = {
  value: ReactNode;
};

export const Badge: FC<BadgeProps> = props => {
  return (
    <div className='w-fit uppercase bg-sky-600 text-sky-100 px-2 py-1 text-[14px] rounded-xl'>
      <span>{props.value}</span>
    </div>
  );
};
