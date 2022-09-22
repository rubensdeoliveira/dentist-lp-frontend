import NextLink from 'next/link'

import { LinkPropsModel } from 'application/common/components/link/models'
import * as S from 'application/common/components/link/styles'

export function Link({ label, href, children, ...rest }: LinkPropsModel) {
  return (
    <NextLink {...rest} href={href}>
      <S.Anchor>{label ?? children}</S.Anchor>
    </NextLink>
  )
}
