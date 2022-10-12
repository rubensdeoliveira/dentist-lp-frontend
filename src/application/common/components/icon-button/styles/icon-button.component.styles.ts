import styled from 'styled-components'

type ContainerProps = {
  size: number
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: ${({ theme }) => theme.colors.button};

  a {
    width: 100%;
    height: 100%;
  }

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  @media (max-width: 991px) {
    width: ${({ size }) => size / 1.5}px;
    height: ${({ size }) => size / 1.5}px;
  }

  @media (max-width: 767px) {
    width: ${({ size }) => size / 2}px;
    height: ${({ size }) => size / 2}px;
  }

  @media (max-width: 575px) {
    width: ${({ size }) => size / 2.5}px;
    height: ${({ size }) => size / 2.5}px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`
