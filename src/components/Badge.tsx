import { FC, ReactNode } from 'react';

type BadgeProps = {
  value: ReactNode;
  'data-testid'?: string;
  backgroundColor?: string;
  fontColor?: string;
};

export const Badge: FC<BadgeProps> = props => {
  return (
    <div
      data-component='badge'
      data-testid={props['data-testid']}
      className={`w-fit uppercase px-2 py-1 text-[14px] rounded-xl ${props.backgroundColor ?? 'bg-sky-600'} ${props.fontColor ?? 'text-sky-100'}`}
    >
      <span>{props.value}</span>
    </div>
  );
};
