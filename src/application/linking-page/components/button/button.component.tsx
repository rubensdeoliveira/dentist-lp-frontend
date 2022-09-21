import { ButtonPropsModel } from 'application/linking-page/components/button/models'
import * as S from 'application/linking-page/components/button/styles'

export function Button({ children, ...rest }: ButtonPropsModel) {
  return <S.Container {...rest}>{children}</S.Container>
}
