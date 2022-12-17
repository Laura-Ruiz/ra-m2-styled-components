import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledInput = styled.input`
  height: ${props => props.height};
  width: ${props => props.width};
  border-radius: 5px;
  border: 1px solid gray;
  box-shadow: 0px 3px 6px #00000029;
  padding-left: 0.8rem;
}
`

function InputText({placeholder, width ="21rem", height="2.5rem"}) {
  return (
    <StyledInput type="text" width = {width} height={height} placeholder={placeholder}/>
  )
}

InputText.propTypes = {
placeholder: PropTypes.string,
width: PropTypes.number,
height: PropTypes.number
}
export default styled(InputText)``