import styled from 'styled-components'

export const SectionContainer = styled.div`
  height: 600px;
  width: 100%;
  background-color: #f2f2f2;
`
export const Wrapper = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  height: 500px;
  margin: 0 auto;
  h1 {
    margin: 30px 0;
  }
`
export const ServiceContainer = styled.div`
  width: 100%;
  display: flex;
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 300px;
  min-height: 250px;
  background-color: #f8f8f8;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.17);
  margin: 0.5rem;
  margin-bottom: 1.3em;
`
export const TopContainer = styled.div`
  width: 100%;
`

export const ServiceThumbnail = styled.div`
  position: relative;
  width: 285px;
  height: 175px;
  img {
    width: 100%;
    height: 100%;
  }
`
export const Caption = styled.div`
  position: absolute;
  width: 285px;
  height: 30px;
  bottom: 0px;
  left: 0px;
  color: #ffffff;
  background: #002441;
  font-weight: bold;
  padding-top: 5px;
  padding-left: 5px;
`
export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 15px 14px;
`

export const Text = styled.div`
  color: black;
`

export const Button = styled.button`
  width: 100px;
  height: 40px;
  background: #f4a654;
  border: 0;
  margin-top: 20px;
`
