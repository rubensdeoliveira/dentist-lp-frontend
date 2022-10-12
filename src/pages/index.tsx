import { GetStaticProps, InferGetStaticPropsType } from 'next'

import { HomePage } from 'application/linking-page/pages'
import { HomeModel } from 'domain/linking-page'
import { getHomePageQuery } from 'infra/linking-page/graphql/queries'
import { client } from 'infra/linking-page/graphql/client'

export default function Home({
  attributes,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <HomePage {...attributes} />
}

export const getStaticProps: GetStaticProps = async () => {
  const response: HomeModel = await client.request(getHomePageQuery)
  if (!response) {
    return {
      notFound: true,
    }
  }
  return {
    props: response.linkingPage.data,
    revalidate: 60 * 10,
  }
}
