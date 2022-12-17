import React from 'react'
import styled from 'styled-components'
import Grid from '../../styles/Grid'
import { Button } from '../atoms'
import {CardCover, CardHouse} from '../molecules'
import { colors, FlexBox } from '../../styles'
import Data from '../../../data'

const ContainerButton = styled(FlexBox)`
margin-top: 2rem;
`

function Houses() {

  return (
    <FlexBox>
      <Grid>
        <CardCover />
        {Data.map(item => <CardHouse key={item.id} price={item.price} address={item.address}/>)}
      </Grid>
      <ContainerButton direction="row" justify="center">
        <Button backgroundColor={colors.secondary}>Cargar más</Button>
      </ContainerButton>
    </FlexBox>
  )
}

export default styled(Houses)``