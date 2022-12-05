import React, { PropsWithChildren } from 'react'
import { BackGround, BorderRadius } from './types'

interface CardProps extends PropsWithChildren {
  bg?: BackGround
  borderRadius?: BorderRadius
}

const Card: React.FC<CardProps> = ({
  bg = 'primary',
  borderRadius = 'medium',
  children,
}) => {
  // стили для компонента
  return <div>{children}</div>
}

export default Card
