import { VENDORS } from '../data'
import styled, {keyframes} from 'styled-components'

const Section = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(170, 166, 166);
  background-size: cover;
  padding: 4rem 2rem;
  color: white;
  overflow-x:hidden;
`
const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`
const revolve = keyframes`
    from {
      transform: translateX(0%);
    }

    to {
      transform: translateX(100%);
    }
`

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, min-content);
  align-items: center;
  justify-content: space-between;
  animation: ${revolve} 3s linear 1s infinite running;
`
const StyledImg = styled.img`
  height: 3rem;
  width: 6rem;
`

const Vendors2 = () => {
  return (
    <>
      <Section>
        <Container>
          <StyledWrapper>
          {
            VENDORS.map((item) => <StyledImg src={item.img} alt={'logos'} />)
          }
        </StyledWrapper>
        </Container>
      </Section>
    </>
  )
}

export default Vendors2
