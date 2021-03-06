import styled from 'styled-components'
import { s, c } from 'theme'

export const Header = styled.header`
  border-bottom: 0.15rem solid ${s.light400};
  width: 100%;
  margin-bottom: 0.5rem;
  padding-bottom: 1rem;
  font-weight: 600;
  font-size: ${s.textTitle3};
  color: ${s.blue600};
  text-align: center;
  animation: ${s.zoom} 0.3s ease-in-out;
`

export const Main = styled.main`
  margin-bottom: 2rem;
  text-align: center;
  animation: ${s.zoom} 0.3s ease-in-out;

  svg {
    margin: 1rem 0 4rem 0;
  }

  h1 {
    margin-bottom: 0.5rem;
  }

  p {
    text-align: center;
  }
`

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  animation: ${s.zoom} 0.4s ease-in-out, ${s.fadeIn} 0.4s ease-in-out;
`

export const InactiveBox = styled(c.Box)`
  justify-content: center;
  align-content: center;
  height: 100%;
  text-align: center;
  animation: ${s.fadeIn} 0.9s ease-in-out,
    ${s.moveIn('0', '-10rem', '0')} 0.5s ease-in-out;

  strong {
    font-size: ${s.textTitle2};
    font-weight: 400;
    margin-bottom: 1rem;
  }

  svg {
    margin: 1rem auto 3rem auto;
  }

  p {
    margin: 0 3rem;
    font-size: ${s.textSubtitle1};
  }
  img {
    margin: 1rem auto 1rem auto;
  }
`
