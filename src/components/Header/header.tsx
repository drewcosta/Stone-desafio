import styled from 'styled-components'
import { HeaderLogo } from './header-logo'
import { HeaderDataTime } from './header-data-time'

export const Header  = () => {
  return (
    <HeaderContainer>
      <HeaderLogo />
      <HeaderDataTime />
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  display: inline-flex;
  align-items: center;
  gap: 48px;
`

