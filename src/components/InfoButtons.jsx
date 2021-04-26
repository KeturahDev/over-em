import React, {useState} from 'react';
import styled from 'styled-components'

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`

const InfoButtons = () => {
  const [blurb, setBlurb] = useState('')
  
  const why = "This site is made for people who are having a hard time letting go of someone they love- going through the thought exercise below can help disarm the cycle of greif by effectively putting into perspective our internal story we are telling ourselves about this person.";

  const how = "The thought exercise bellow will walk us through remembering the negatives of the relationship, comprehending the reasons why we repetatively remember the relationship, and plan for what life is going to look like from here on."

  const toggle = (chosenBlurb) => {
    blurb !== '' ? setBlurb('') : setBlurb(chosenBlurb)
  }

  return (
    <Box>
      <div>
        <button onClick={() => toggle(why)}>why</button>
        <button onClick={() => toggle(how)}>how</button>
      </div>
      <p>{blurb}</p>
    </Box>
  )
}
export default InfoButtons;