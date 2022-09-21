import { IconButtonPropsModel } from 'application/common/components/icon-button/models'
import * as S from 'application/common/components/icon-button/styles'

export function IconButton({
  size,
  icon: { iconUrl, reactIcon: ReactIcon },
  alt,
  ...rest
}: IconButtonPropsModel) {
  if (!ReactIcon && !iconUrl) {
    return null
  }
  if (ReactIcon) {
    return (
      <S.Container {...rest} size={size}>
        <ReactIcon size={size} />
      </S.Container>
    )
  }
  return (
    <S.Container {...rest} size={size} aria-label={alt}>
      <img src={iconUrl} alt={alt} />
    </S.Container>
  )
}
