import styled from 'styled-components'
import bgImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`
export const Form = styled.form`
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > h2 {
    margin: 48px 0;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > a {
    margin-top: 124px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`
export const Background = styled.div`
  flex: 1;
  background: url(${bgImg}) no-repeat center center;
  background-size: cover;
`
