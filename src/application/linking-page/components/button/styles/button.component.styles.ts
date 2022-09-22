import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.6rem;
  border: 0;
  border-radius: 2.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.background};
  flex-shrink: 0;
  width: 100%;
  max-width: 436px;
  height: 119px;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 991px) {
    padding: 1.8rem;
    font-size: 2.6rem;
    line-height: 2.6rem;
    border-radius: 16px;
    max-width: 300px;
    height: 80px;
  }

  @media (max-width: 767px) {
    padding: 1.4rem;
    font-size: 1.7rem;
    line-height: 1.7rem;
    border-radius: 12px;
    max-width: 200px;
    height: 48px;
  }

  @media (max-width: 575px) {
    padding: 0.9rem;
    font-size: 1.3rem;
    line-height: 1.3rem;
    border-radius: 12px;
    max-width: 147px;
    height: 48px;
  }
`
