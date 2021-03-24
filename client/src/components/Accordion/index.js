import React, { useState } from 'react'
import { data } from './data'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { FiPlus, FiMinus } from 'react-icons/fi'

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 550px;
  background: #fff;
`

const Container = styled.div`
  width: 100%;
`

const FAQ = styled.div`
  border: 1px solid #f5f5f5;
  margin-bottom: 3px;
`

const Wrap = styled.div`
  background: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 1rem;
    font-size: 1rem;
  }
  span {
    margin-right: 1.5rem;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    display: inline-block;
  }
`

const Dropdown = styled.div`
  background: #fff;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;

  p {
    font-size: .9rem;
    padding: 15px;
  }
`

const Accordion = () => {
  const [clicked, setClicked] = useState(false)

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null)
    }

    setClicked(index)
  }

  return (
    <IconContext.Provider
      value={{
        style: { fontSize: '11px', color: '#fff' }
      }}
    >
      <AccordionSection>
        <Container>
          {data.map((item, index) => {
            return (
              <FAQ>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>Q: {item.question}</h1>

                  {clicked === index ? (
                    <span style={{ background: '#000' }}>
                      <FiMinus />
                    </span>
                  ) : (
                    <span style={{ background: '#f8a555' }}>
                      <FiPlus />
                    </span>
                  )}
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </FAQ>
            )
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  )
}

export default Accordion
