import styled from 'styled-components'
import {
  FaAngleDoubleRight,
  FaLongArrowAltRight,
  FaPersonBooth,
  FaTruck
} from 'react-icons/fa'
import { SiGooglecalendar } from 'react-icons/si'
import { GoPackage } from 'react-icons/go'

export const SectionContainer = styled.div`
  height: 500px;
  width: 100%;
  background-color: #f2f2f2;
`
export const SectionWrapper = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  h1 {
    text-align: center;
    margin: 50px;
    text-transform: uppercase;
  }
`

export const ProcessContainer = styled.div`
  display: flex;
  padding-top: 40px;
`

export const CircleContainer = styled.div`
  width: 270px;
  height: 150px;
  margin-left: 10px;
  position: relative;
`

export const StyledGooglecalendar = styled(SiGooglecalendar)`
  font-size: 40px;
  margin-top: 35px;
  margin-left: 35px;
  position: absolute;
`
export const StyledFaPersonBooth = styled(FaPersonBooth)`
  font-size: 40px;
  margin-top: 35px;
  margin-left: 35px;
  position: absolute;
`

export const StyledFaTruck = styled(FaTruck)`
  font-size: 40px;
  margin-top: 35px;
  margin-left: 35px;
  position: absolute;
`

export const StyledGoPackage = styled(GoPackage)`
  font-size: 40px;
  margin-top: 35px;
  margin-left: 35px;
  position: absolute;
`

export const StyledIcon = styled(FaAngleDoubleRight)`
  background: #f4a654;
  margin-top: 16px;
  margin-left: 15px;
  color: #fff;
  font-weight: bold;
`

export const StyledArrow = styled(FaLongArrowAltRight)`
  font-size: 30px;
  font-weight: bold;
  position: relative;
  top: 40px;
  left: 170px;
`

export const Main = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  position: absolute;
  border: 2px solid #f4a654;
`

export const SmallCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #f4a654;
  overflow: hidden;
  position: relative;
  top: 25%;
  right: -75%;
`

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  div {
    font-size: 20px;
  }
`
