import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../../styles'

const IconStyled = styled.span`
  font-variation-settings: 'FILL' ${(props) => props.fill}, 'wght' ${(props) => props.wght},
    'GRAD' ${(props) => props.grad}, 'opsz' ${(props) => props.opsz};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}px;
  background: ${(props) => props.background};
  border-radius: ${(props) => props.borderRadius}px;
  width: 40px;
  height: 40px;
  text-align: center;
  padding: 5px;
  box-shadow: 0px 2px 4px #00000029;
`

function Icon({
  name,
  size = 24,
  fill = 0,
  wght = 400,
  grad = 0,
  opsz = 48,
  color = colors.icons.base,
  borderRadius = 5,
  background = "linear-gradient(135deg, #46C1F7 0%, #0073E6 100%) ",
  className = '',
}) {
  return (
    <IconStyled
      className={`material-symbols-outlined ${className}`}
      fill={fill}
      wght={wght}
      grad={grad}
      opsz={opsz}
      size={size}
      color={color}
      borderRadius = {borderRadius}
      background = {background}
    >
      {name}
    </IconStyled>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  background: PropTypes.string,
  borderRadius: PropTypes.number,
  fill: PropTypes.number,
  wght: PropTypes.number,
  grad: PropTypes.number,
  opsz: PropTypes.number,
  className: PropTypes.string,
}

export default styled(Icon)``
