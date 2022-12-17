import React from 'react'
import styled from 'styled-components'
import { FlexBox, colors } from '../../styles'
import SearchBar from '../molecules/SearchBar'


const SubHeaderStyled = styled(FlexBox)`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1em;
  padding-bottom: 1em;
  background-color: ${colors.subHeader.main};
  border: 1px solid #A4D1D1;
  gap: 1rem

`

function SubHeader({ ...props }) {
  return <SubHeaderStyled {...props} direction="row" >
    <SearchBar/>
  </SubHeaderStyled>
}

export default styled(SubHeader)``
