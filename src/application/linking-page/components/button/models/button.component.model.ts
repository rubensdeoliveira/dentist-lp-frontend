import { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonPropsModel = ButtonHTMLAttributes<any> & {
  children: ReactNode
}
