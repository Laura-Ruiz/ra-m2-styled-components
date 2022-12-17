import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from './Card'
import { Button, Text } from '../atoms'
import imageHouse from '../../assets/images/casaPiscinaAd2.jpg'
import { FlexBox } from '../../styles'

const StyledCardHouse = styled(Card)`
  img {
    width: 12.5rem;
    height: 61%;
    border-radius: 8px;
  }
`
const Price = styled(Text).attrs({
  as: 'span',
})`
  font-weight: bold;
  font-size: 16px;
`
const Address = styled(Text).attrs({
  as: 'span',
})`
  padding: 0px 13px;
  font-size: 14px;
  color: #666;
`
const Wrapper = styled(FlexBox)`
  align-items: center;
  justify-content: space-around;
  margin-top: 18px;
`

function CardHouse({ address, price }) {
  return (
    <StyledCardHouse>
      <img src={imageHouse} alt="imgCasa" />
      <div style={{ marginTop: '10px' }}>
        <Address>{address}</Address>
        <Wrapper direction="row">
          <Price>{price}</Price>
          <Button backgroundColor="#8077A3">Localizar</Button>
        </Wrapper>
      </div>
    </StyledCardHouse>
  )
}

CardHouse.propTypes = {
  address: PropTypes.string,
  price: PropTypes.string,
}
export default styled(CardHouse)``
