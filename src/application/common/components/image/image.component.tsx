import NextImage from 'next/image'

import { ImagePropsModel } from 'application/common/components/image/models'
import * as S from 'application/common/components/image/styles'

export function Image({ width, height, ...rest }: ImagePropsModel) {
  return (
    <S.Container width={width} height={height}>
      <NextImage {...rest} width={width} height={height} layout="responsive" />
    </S.Container>
  )
}
