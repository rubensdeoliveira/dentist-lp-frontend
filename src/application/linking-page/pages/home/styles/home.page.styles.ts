import styled from 'styled-components'

type HeaderProps = {
  url: string
}

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 3rem;

  div:nth-of-type(2) {
    margin-top: -25rem;

    @media (max-width: 991px) {
      margin-top: -19rem;
    }

    @media (max-width: 767px) {
      margin-top: -14rem;
    }

    @media (max-width: 575px) {
      margin-top: -9rem;
    }
  }

  h3,
  h4 {
    font-family: ${props => props.theme.fonts.family.body};
    font-size: 3rem;
    font-weight: 400;
    line-height: 3.5rem;

    @media (max-width: 991px) {
      font-size: 2.4rem;
      line-height: 2.6rem;
    }

    @media (max-width: 767px) {
      font-size: 1.7rem;
      line-height: 1.9rem;
    }

    @media (max-width: 575px) {
      font-size: 1.1rem;
      line-height: 1.3rem;
    }
  }

  h3 {
    margin-top: 1.6rem;
  }

  h4 {
    margin-bottom: 6.8rem;

    @media (max-width: 991px) {
      margin-bottom: 5.3rem;
    }

    @media (max-width: 767px) {
      margin-bottom: 3.7rem;
    }

    @media (max-width: 575px) {
      margin-bottom: 2.2rem;
    }
  }
`

export const IconButtonsContainer = styled.div`
  display: flex;
  align-content: center;
  gap: 1.5rem;
  margin-top: 6rem;

  @media (max-width: 991px) {
    margin-top: 4.8rem;
  }

  @media (max-width: 767px) {
    margin-top: 3.2rem;
  }

  @media (max-width: 575px) {
    margin-top: 1.9rem;
  }
`

export const Header = styled.div<HeaderProps>`
  height: 244px;
  width: 100%;
  background-image: url(${props => props.url});

  @media (max-width: 991px) {
    height: 199px;
  }

  @media (max-width: 767px) {
    height: 149px;
  }

  @media (max-width: 575px) {
    height: 99px;
  }
`
