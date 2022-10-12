import { useMemo } from 'react'

import { Button } from 'application/common/components/button'
import * as S from 'application/linking-page/pages/home/styles'
import { IconButton, Image } from 'application/common/components'
import { HomeModelContent } from 'domain/linking-page'

export function HomePage({
  cro,
  buttons,
  buttonIcons,
  headerImage,
  photo,
  specialty,
  titleImage,
}: HomeModelContent) {
  const handleButtons = useMemo(
    () =>
      buttons.length > 0 &&
      buttons.map(button => (
        <Button key={button.label} link={button.link} label={button.label} />
      )),
    [buttons],
  )

  const handleButtonIcons = useMemo(
    () =>
      buttonIcons.length > 0 &&
      buttonIcons.map(iconButton => (
        <IconButton
          alt={iconButton.alt}
          key={iconButton.icon.data.attributes.url}
          size={70}
          icon={{
            iconUrl: iconButton.icon.data.attributes.url,
          }}
          link={iconButton.link}
        />
      )),
    [buttonIcons],
  )

  return (
    <S.Container>
      <S.Header url={headerImage.data.attributes.url} />
      <Image
        width={photo.data.attributes.width}
        height={photo.data.attributes.height}
        src={photo.data.attributes.url}
        alt={photo.data.attributes.alternativeText}
        layout="responsive"
      />
      <Image
        width={titleImage.data.attributes.width}
        height={titleImage.data.attributes.height}
        src={titleImage.data.attributes.url}
        alt={titleImage.data.attributes.alternativeText}
        layout="responsive"
      />
      <h3>{cro}</h3>
      <h4>{specialty}</h4>
      {handleButtons}
      <S.IconButtonsContainer>{handleButtonIcons}</S.IconButtonsContainer>
    </S.Container>
  )
}
