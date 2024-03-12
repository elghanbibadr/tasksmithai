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
  <Box transform={['scale(0.4)',"scale(0.6)","scale(0.7)" ]}   zIndex='999'  height="680px" width="680px" position='relative'>
  <Image src={smallCircleIcon} />

{ isHovered && <>

  <motion.img  src={arc1}  className='circle'/>
       <Text position='absolute' left='-47px' top='60px' textAlign="center" className='link' fontWeight="500" style={{ fontSize: "24px" }}  >Main <br /> Agent</Text>
       <Text position='absolute' left='-69px' top='190px' textAlign="center" className='link' fontWeight="500" style={{ fontSize: "24px" }}  >Legal</Text>
       <Text position='absolute' left='-120px' top='270px' textAlign="center" className='link' fontWeight="500" style={{ fontSize: "24px" }}  >Financial</Text>
       <Text position='absolute' left='-130px'  top='340px' textAlign="center" className='link technical-link' fontWeight="500" style={{ fontSize: "24px" }}  >Technical</Text>
       <Text position='absolute' left='-80px'  top='400px' textAlign="center" className='link admin-link' fontWeight="500" style={{ fontSize: "24px" }}  >Admin</Text>
       <Text  position='absolute' left='-55px'  top='500px' textAlign="center" className='link custom-link' fontWeight="500" style={{ fontSize: "24px" }}   >Custom </Text>
</>  

} 

 <Text position='absolute' right='34px' bottom='260px' textAlign="center" className='link' fontWeight="500" style={{ fontSize: "22px" }}  >Workflows</Text>
     {  <Text position='absolute' left='60px' bottom='260px' textAlign="center" className='link' fontWeight="500" style={{ fontSize: "22px" }}    onMouseEnter={() => setIsHovered(true)} // Set isHovered to true on mouse enter
        onMouseLeave={() => setIsHovered(false)} >Models</Text>}
       <Text position='absolute' left='184px' top='80px' textAlign="center" className='link' fontWeight="500" style={{ fontSize: "22px" }}  >Workspaces</Text>
       <Text position='absolute' left='220px' bottom='140px' textAlign="center" className='link' fontWeight="500" style={{ fontSize: "22px" }}  >Data</Text>

</Box>
    </>
 

  )
}

export default App