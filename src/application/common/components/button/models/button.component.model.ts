import { ButtonHTMLAttributes } from 'react'

export type ButtonPropsModel = ButtonHTMLAttributes<any> & {
  link: string
  label: string
}
