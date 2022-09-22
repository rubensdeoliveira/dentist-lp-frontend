import { LinkProps } from 'next/link'
import React from 'react'

export type LinkPropsModel = LinkProps & {
  label?: string
  children?: React.ReactNode
}
