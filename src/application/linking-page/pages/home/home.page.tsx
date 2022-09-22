import Image from 'next/image'
import { useMemo } from 'react'

import { Button } from 'application/linking-page/components/button'
import * as S from 'application/linking-page/pages/home/styles'
import { IconButton } from 'application/common/components'
import { HomeModel } from 'domain/linking-page'

export function HomePage(linkingPage: HomeModel) {
  const { buttons, buttonIcons, photo, title } = linkingPage.data.attributes

  console.log(buttons)
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
          size={60}
          icon={{
            iconUrl: iconButton.icon.data.attributes.url,
          }}
          link={iconButton.link}
        />
      )),
    [buttonIcons],
  )

  const handleImage = useMemo(
    () => (
      <Image
        src={photo.data.attributes.url}
        alt={photo.data.attributes.caption}
        width={972}
        height={1240}
        layout="responsive"
        priority={true}
      />
    ),
    [photo],
  )

  return (
    <S.Container>
      <S.ImageContainer>{handleImage}</S.ImageContainer>
      <S.Content>
        <h1>{title}</h1>
        {handleButtons}
        <S.IconButtonsContainer>{handleButtonIcons}</S.IconButtonsContainer>
      </S.Content>
    </S.Container>
  )
}
