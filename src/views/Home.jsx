import styled from 'styled-components'

function Home() {

  const Home = styled.div`
    overflow: hidden;
    width: 100%;
    height: 50vh;
    display: flex;
  `

  const HomeTitle = styled.h2`
    margin: auto;
    font-size: 6rem;
    font-weight: 300;
    color: hsl(220, 14%, 75%);
  `

  return (
    <Home>
      <HomeTitle>Homepage</HomeTitle>
    </Home>
  )
}

export default Home
