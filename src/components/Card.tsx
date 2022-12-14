import React, { FC, useState } from 'react';

export enum CardVariant {
  outline = 'outline',
  primary = 'primary',
}

interface CardProps {
  width?: string;
  height?: string;
  variant: CardVariant;
  onClick: (num: number) => void;
  children?: React.ReactNode;
}

const Card: FC<CardProps> = ({ width, height, variant, onClick, children }) => {
  const [state] = useState(0);
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outline ? '1px solid gray' : 'none',
        background: variant === CardVariant.primary ? 'yellow' : 'blue',
      }}
      onClick={() => onClick(state)}
    >
      {children}
    </div>
  );
};

export default Card;
