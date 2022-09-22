import { IconButtonPropsModel } from 'application/common/components/icon-button/models'
import * as S from 'application/common/components/icon-button/styles'
import { Link } from 'application/common/components'

export function IconButton({
  size,
  icon: { iconUrl, reactIcon: ReactIcon },
  alt,
  link,
  ...rest
}: IconButtonPropsModel) {
  if (!ReactIcon && !iconUrl) {
    return null
  }
  if (ReactIcon) {
    return (
      <S.Container {...rest} size={size}>
        <Link href={link} passHref={true}>
          <ReactIcon size={size} />
        </Link>
      </S.Container>
    )
  }
  return (
    <S.Container {...rest} size={size} aria-label={alt}>
      <Link href={link} passHref={true}>
        <img src={iconUrl} alt={alt} />
      </Link>
    </S.Container>
  )
}
