import styled from 'styled-components'

export const SectionContainer = styled.div`
  height: 700px;
  width: 100%;
`

export const SectionWrapper = styled.div`
  display: flex;
  max-width: 1100px;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 40px;
`

export const Profile = styled.div`
  width: 67%;
  h1 {
    margin-bottom: 20px;
  }
  img {
    width: 180px;
    height: 160px;
    float: left;
    margin: 10px 20px 20px 0;
  }
  p {
    margin-bottom: 20px;
  }
`
export const Point = styled.div`
  font-size: 12px;
  margin-left: 5px;
`
export const BulletPoint = styled.div`
  display: flex;
`
export const GridWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding: 20px 0;
  border-top: 1px solid grey;
`
