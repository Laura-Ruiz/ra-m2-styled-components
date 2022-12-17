import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import { Text } from '../atoms'
import imageHouse from "../../assets/images/casaPiscinaAd2.jpg"


const ContainerImg = styled.div`
height: 100%;
img {
  width: 100%;
  height: 100%;
  object-fit:cover
}
${Text}{
padding: 5px 10px;
position:absolute;
color: white;
font-size: 20px;
width: 10em;
}
`

export default function CardCover() {
  return (
    <Card>
        <ContainerImg>
        <Text as="span">Piso en Barcelona, Gracia... 939.000€</Text>
        <img src={imageHouse} alt="imageCover" />
        </ContainerImg>
    </Card>
  )
}
