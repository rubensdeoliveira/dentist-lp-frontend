import styled from 'styled-components'

export const Anchor = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.family.body};
  font-weight: 400;
  font-size: 3.6rem;
  line-height: 4.1rem;
  color: ${({ theme }) => theme.colors.font};

  &:hover {
    color: ${({ theme }) => theme.colors.fontAlt};
  }
`
