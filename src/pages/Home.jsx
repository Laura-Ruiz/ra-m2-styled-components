import React from 'react'
import styled from 'styled-components'
import { Body } from '../components/layout'
import { FlexBox } from '../styles'
import Houses from '../components/organisms/Houses'

const StyledHomeContainer = styled(FlexBox)`
margin: 2rem;
column-gap: 3rem;
justify-content: center;

`
const StyledMap = styled(FlexBox)`
width: 50%;
height: 85vh;
background-color: grey;
align-items: center;
justify-content: center;
border-radius: 6px;
`
export default function Home() {
  return (
    <Body>
      <StyledHomeContainer direction ="row">
      <Houses/>
      <StyledMap> MAP </StyledMap>
      </StyledHomeContainer>
    </Body>
  )
}
