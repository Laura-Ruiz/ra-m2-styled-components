import React from 'react'
import { Button, Icon, InputText } from '../atoms'

export default function SearchBar() {
  return (
    <>
      <InputText placeholder="Piso, chalet o garaje..." />
      <InputText placeholder="Madrid, Barcelona o Zaragoza..." />
      <Button>
        <Icon size={27} name="search" />
      </Button>
    </>
  )
}
