import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FlexBox, colors } from '../../styles'
import { Title } from '../molecules'

const HeaderStyled = styled(FlexBox)`
  padding-left: 2rem;
  padding-right: 2rem;

  ul{list-style: none;
    column-gap: 1rem;}
`
const ListStyled = styled(FlexBox)`
list-style: none;
column-gap: 1rem;
a {
  color: ${colors.font.base};
  text-decoration:none
}
}`

const StyledLink = styled(NavLink)`
  &.active {
    font-weight: 600;
  }
`;


function Header() {
  return (
    <HeaderStyled direction="row" justify="space-between">
      <Title text="MIPISO.com" color="#823434" />
        <ListStyled as="ul" direction="row" >
          <StyledLink to="/">Buscador</StyledLink>
          <StyledLink to="/data">Datos</StyledLink>
          <StyledLink to="/profile">Mi Perfil</StyledLink>
        </ListStyled>
    </HeaderStyled>
  )
}

export default styled(Header)``
