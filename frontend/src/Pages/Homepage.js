import React from 'react'
import { Container,Box,Text,Tabs,TabList,Tab,TabPanel,TabPanels } from '@chakra-ui/react'
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';

const Homepage = ()=>{

    const history = useHistory();
     useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    

    if (user) history.push("/chats");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);
  return (
    <Container maxW='xl' centerContent>
<Box
display="flex"
justifyContent="center"
p={3}
bg={"white"}
w="100%"
m="40px 0 15px 0"
borderRadius="lg"
borderWidth="1px"
>
<Text fontSize="4xl" fontFamily="Work sans" color="black">Talk-A-Tive</Text>
  </Box>
  <Box bg={"white"}
w="100%"
p={4}

borderRadius="lg"
borderWidth="1px">
  <Tabs variant='soft-rounded' >
  <TabList mb='1em'>
    <Tab width='50%'>Login</Tab>
    <Tab width='50%'>Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login>

      </Login>
    </TabPanel>
    <TabPanel>
      <Signup>

      </Signup>
    </TabPanel>
  </TabPanels>
</Tabs>

  </Box>
      </Container>
  )
}

export default Homepage
