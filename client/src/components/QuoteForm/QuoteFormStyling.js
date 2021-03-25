import styled from 'styled-components'

export const FormHeader = styled.div`
  box-shadow: 0 0.3px 0 #fff;
  height: 100px;
  display: flex;
  h1 {
    color: #fff;
  }
  img {
    width: 140px;
    height: 140px;
    margin-top: -30px;
    margin-left: -48px;
  }
`
export const FormWrapper = styled.div`
  background: #002441;
  width: 30%;
`
export const Form = styled.form`
  width: 290px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding: 20px 0;
`
export const GridHalfWidth = styled.div`
  grid-column: span 2;
`
export const StyledButton = styled.button`
  background: #f4a654;
  border: 0;
  color: #fff;
  padding: 0.5em;
  text-transform: uppercase;
  width: 100%;
  &:hover,
  &:focus {
    background: #b8161f;
    color: #fff;
    outline: 0;
    transition: background-color 2s ease-out;
  }
`
export const Input = styled.input`
  border: 0;
  border-radius: 0.4em;
  padding: 0.5em;
  width: 100%;
  height: 40px;
  font-size: 16px;
  &:focus {
    outline: none !important;
    border: 2px solid #2b84ff;
    transition: border 0.1s linear;
  }
`
export const Textarea = styled.textarea`
  border-radius: 0.4em;
  padding: 1em;
  width: 100%;
  font-size: 16px;
`

export const Response = styled.div`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`
