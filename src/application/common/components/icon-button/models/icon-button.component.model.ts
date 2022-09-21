import { ButtonHTMLAttributes } from 'react'
import { IconType } from 'react-icons'

export type IconButtonPropsModel = ButtonHTMLAttributes<any> & {
  size: number
  icon: { reactIcon?: IconType; iconUrl?: string }
  alt: string
}
