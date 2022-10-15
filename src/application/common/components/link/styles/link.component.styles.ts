import styled from 'styled-components'

export const Anchor = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.family.body};
  font-weight: 400;
  font-size: 4.6rem;
  line-height: 4.9rem;
  color: ${({ theme }) => theme.colors.font};

  &:hover {
    color: ${({ theme }) => theme.colors.fontAlt};
  }

  @media (max-width: 991px) {
    font-size: 3rem;
    line-height: 3.1rem;
  }

  @media (max-width: 767px) {
    font-size: 2.5rem;
    line-height: 3.6rem;
  }

  @media (max-width: 575px) {
    font-size: 1.9rem;
    line-height: 2.1rem;
  }
`
