import styled from 'styled-components'

type ContainerProps = {
  width: number
  height: number
}

export const Container = styled.div<ContainerProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;

  @media (max-width: 991px) {
    width: ${props => props.width / 1.5}px;
    height: ${props => props.height / 1.5}px;
  }

  @media (max-width: 767px) {
    width: ${props => props.width / 2}px;
    height: ${props => props.height / 2}px;
  }

  @media (max-width: 575px) {
    width: ${props => props.width / 2.5}px;
    height: ${props => props.height / 2.5}px;
  }
`
