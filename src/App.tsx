import React from 'react'
import { Flex, Heading, Spacer ,Box,Image,Text} from '@chakra-ui/react'
import innerImg from "../src/assets/InnerCircleImg.svg"
import innerImg2 from "../src/assets/cb-dev-logo 4.png"
const App = () => {
  return (
    <Box display="flex"  >
     

      <Flex align="center" justifySelf="end" gap="4">
        
     <Box  height="540px" width="540px" position='relative'>
     <Image src={innerImg} />
     <Text position='absolute' right='100px'  bottom='280px' textAlign="center"  className='link' fontWeight="500"  style={{ fontSize: "24px" }}  >Workflows</Text>

     </Box>       
      </Flex>



    </Box>
  )
}

export default App