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

  img {
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
  }
`
