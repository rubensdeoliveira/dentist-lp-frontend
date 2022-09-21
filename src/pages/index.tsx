import { GetStaticProps } from 'next'

import { HomePage } from 'application/linking-page/pages'
import { HomeModel } from 'domain/linking-page'
import { api } from 'infra/common/axios/client'

export default function Home(linkingPage: HomeModel) {
  return <HomePage {...linkingPage} />
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await api.get(
    'linking-page?populate[buttons][populate][0]=buttons&populate[buttonIcons][populate][0]=icon&populate[photo][populate][0]=photo',
  )
  const linkingPage: HomeModel = res.data
  if (!linkingPage) {
    return {
      notFound: true,
    }
  }
  return {
    props: linkingPage,
    revalidate: 60 * 10,
  }
}
