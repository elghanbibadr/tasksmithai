import React, { useState } from 'react'
import { Flex, Heading, Spacer, Box, Image, Text } from '@chakra-ui/react'
import innerImg from "../src/assets/InnerCircleImg.svg"
import innerImg2 from "../src/assets/cb-dev-logo 4.png"
import settingIcon from "../src/assets/settingIcon.png"
import smallCircleIcon from "../src/assets/smallCircle.svg"

import menuIcon from "../src/assets/menuIcon.png"
import { motion } from 'framer-motion'
import line from "../src/assets/line.svg"
import arc1 from "../src/assets/Group 13.svg"

const App = () => {
  const [isHovered, setIsHovered] = useState(true);

  return (
    <>
  <Box transform='scale(0.7)' zIndex='999'  height="680px" width="680px" position='relative'>
  <Image src={smallCircleIcon} />

{ isHovered &&  <motion.img  src={arc1}  className='circle'/>
}  <Text position='absolute' right='34px' bottom='260px' textAlign="center" className='link' fontWeight="500" style={{ fontSize: "22px" }}  >Workflows</Text>
     {  <Text position='absolute' left='60px' bottom='260px' textAlign="center" className='link' fontWeight="500" style={{ fontSize: "22px" }}    onMouseEnter={() => setIsHovered(true)} // Set isHovered to true on mouse enter
        onMouseLeave={() => setIsHovered(false)} >Models</Text>}
       <Text position='absolute' left='184px' top='80px' textAlign="center" className='link' fontWeight="500" style={{ fontSize: "22px" }}  >Workspaces</Text>
       <Text position='absolute' left='220px' bottom='140px' textAlign="center" className='link' fontWeight="500" style={{ fontSize: "22px" }}  >Data</Text>

</Box>
    </>
 

  )
}

export default App