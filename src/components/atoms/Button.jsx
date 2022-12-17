import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
background-color: ${props => props.backgroundColor};
border-radius: 6px;
border:none;
padding: 2px 10px;
`
const TextButton = styled(Text).attrs({
  as: 'span',
})`
color: ${props => props.color};
font-size: ${props => props.fontSize}px;
`

export default function Button({
  fontSize = 14,
  color = "white",
  children,
  backgroundColor,
  onClick = () => {},
}) {
  return (
    <StyledButton type="button" onClick={onClick}  backgroundColor = {backgroundColor}>
      <TextButton fontSize = {fontSize} color={color}>{children}</TextButton>
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  onClick: PropTypes.func,
}
