import { ImageProps } from 'next/image'

export type ImagePropsModel = ImageProps & {
  width: number
  height: number
}
