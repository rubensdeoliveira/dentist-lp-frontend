import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  min-height: 100vh;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-top: 15.6rem;
  padding-bottom: 3rem;
  padding-right: 3rem;
  flex-grow: 1;
  flex-shrink: 0;
  flex-direction: column;
  gap: 2.8rem;

  @media (max-width: 1399px) {
    padding-top: 13.6rem;
    margin-left: -30rem;
  }

  @media (max-width: 1199px) {
    padding-top: 11.6rem;
    margin-left: -15rem;
  }

  @media (max-width: 991px) {
    padding-top: 9.6rem;
    margin-left: -15rem;
  }

  @media (max-width: 767px) {
    padding-top: 7.6rem;
    margin-left: -15rem;
    gap: 1rem;
  }

  @media (max-width: 575px) {
    padding-top: 6.8rem;
    margin-left: -19rem;
  }

  h1 {
    font-family: ${({ theme }) => theme.fonts.family.title};
    font-weight: 400;
    font-size: 13rem;
    line-height: 9.4rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.2rem;
    text-align: center;

    @media (max-width: 1199px) {
      font-size: 8.4rem;
    }

    @media (max-width: 991px) {
      font-size: 7.4rem;
    }

    @media (max-width: 767px) {
      font-size: 6.4rem;
    }

    @media (max-width: 575px) {
      font-size: 4.5rem;
    }
  }
`

export const IconButtonsContainer = styled.div`
  display: flex;
  align-content: center;
  gap: 1.5rem;

  @media (max-width: 575px) {
    margin-left: 6rem;
  }

  > button {
    > img {
      @media (max-width: 767px) {
        width: 28px;
        height: 28px;
      }
    }
  }
`

export const ImageContainer = styled.div`
  align-self: flex-end;
  width: 800px;
  margin-left: -2rem;
  z-index: -1;
`
