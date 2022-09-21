import { gql } from 'graphql-request'

export const getHomePageQuery = gql`
  query {
    linkingPage {
      data {
        attributes {
          title
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
                }
              }
            }
          }
          photo {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`
