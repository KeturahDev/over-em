import React from 'react';
import styled from 'styled-components';
import List from "./List";

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
        <List titleName="Things I dont like" />
        <List titleName="Reasons I think of them" />
        <List titleName="The new me I want to be" />
      </Box>
  )
}

export default Main;