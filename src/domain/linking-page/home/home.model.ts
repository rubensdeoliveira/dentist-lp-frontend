export type HomeModelContent = {
  title: string
  buttons: Array<{
    label: string
    link: string
  }>
  buttonIcons: Array<{
    link: string
    alt: string
    icon: {
      data: {
        attributes: {
          url: string
        }
      }
    }
  }>
  photo: {
    data: {
      attributes: {
        url: string
        caption: string
      }
    }
  }
}

export type HomeModel = {
  data: {
    attributes: HomeModelContent
  }
}
