import { Link } from 'application/common/components'
import { ButtonPropsModel } from 'application/linking-page/components/button/models'
import * as S from 'application/linking-page/components/button/styles'

export function Button({ link, label, ...rest }: ButtonPropsModel) {
  return (
    <S.Container {...rest}>
      <Link href={link} passHref={true}>
        {label}
      </Link>
    </S.Container>
  )
}
