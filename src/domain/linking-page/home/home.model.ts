export type HomeModelContent = {
  cro: string
  specialty: string
  buttons: Array<{
    label: string
    link: string
  }>
  buttonIcons: Array<{
    link: string
    icon: {
      data: {
        attributes: {
          url: string
          alternativeText: string
        }
      }
    }
    alt: string
  }>
  titleImage: {
    data: {
      attributes: {
        url: string
        alternativeText: string
        width: number
        height: number
      }
    }
  }
  photo: {
    data: {
      attributes: {
        url: string
        alternativeText: string
        width: number
        height: number
      }
    }
  }
  headerImage: {
    data: {
      attributes: {
        url: string
        alternativeText: string
      }
    }
  }
}

export type HomeModel = {
  linkingPage: {
    data: {
      attributes: HomeModelContent
    }
  }
}
