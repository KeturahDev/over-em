import React from 'react';
import styled from 'styled-components'

const Box = styled.div`
  display: flex;
  margin: 12%;
  padding: 5%;
  border: 2px solid orange;
  flex-direction: column;
`
const Main = () => {
  return (
      <Box>
        Main content's components.
      </Box>
  )
}

export default Main;