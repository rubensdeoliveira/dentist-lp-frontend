import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.3rem;
  border: 0;
  border-radius: 2.5rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.background};
  flex-shrink: 0;
  width: 100%;
  max-width: 593px;
  height: 127px;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }

  & + & {
    margin-top: 3.2rem;
  }

  @media (max-width: 991px) {
    max-width: 395px;
    height: 90px;
    border-radius: 1rem;
    padding: 1.8rem;

    & + & {
      margin-top: 1.6rem;
    }
  }

  @media (max-width: 767px) {
    max-width: 329px;
    height: 75px;
    border-radius: 1rem;
    padding: 1.5rem;

    & + & {
      margin-top: 1.6rem;
    }
  }

  @media (max-width: 575px) {
    max-width: 255px;
    height: 58px;
    border-radius: 1rem;
    padding: 1.1rem;

    & + & {
      margin-top: 1.6rem;
    }
  }
`
