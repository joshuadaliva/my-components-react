import { useState } from 'react'
import SAccordion from './Accordioncompo/SAccordion'

const Accordion = () => {

  const [openAccordion, setOpenAccordion] = useState(null)

  const handleToggle = (title) => {
    setOpenAccordion(openAccordion === title ? null : title)
  }

  return (
    <div className='flex flex-col gap-1'>
      <SAccordion 
        title='Menu1'
        desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur quasi dolores animi hic temporibus quia repellendus non, optio magni aliquam.'
        isOpen = {openAccordion === 'Menu1'}
        onClick = {() => handleToggle('Menu1')}
      />
      <SAccordion 
        title='Menu2'
        desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur quasi dolores animi hic temporibus quia repellendus non, optio magni aliquam.'
        isOpen = {openAccordion === 'Menu2'}
        onClick = {() => handleToggle('Menu2')}
      />
      <SAccordion 
        title='Menu3'
        desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur quasi dolores animi hic temporibus quia repellendus non, optio magni aliquam.'
        isOpen = {openAccordion === 'Menu3'}
        onClick = {() => handleToggle('Menu3')}
      />
      
    </div>
  )
}

export default Accordion

