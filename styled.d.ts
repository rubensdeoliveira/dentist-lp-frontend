import 'styled-components'

import { ThemeModel } from 'application/common/styles/models'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeModel {}
}
