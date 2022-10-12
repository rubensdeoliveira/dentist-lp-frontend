import { gql } from 'graphql-request'

export const getHomePageQuery = gql`
  query {
    linkingPage {
      data {
        attributes {
          cro
          specialty
          buttons {
            label
            link
          }
          buttonIcons {
            link
            icon {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            alt
          }
          titleImage {
            data {
              attributes {
                url
                alternativeText
                width
                height
              }
            }
          }
          photo {
            data {
              attributes {
                url
                alternativeText
                width
                height
              }
            }
          }
          headerImage {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`
