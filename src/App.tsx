import React, { useState } from 'react'
import { Flex, Heading, Spacer, Box, Image, Text } from '@chakra-ui/react'
import innerImg from "../src/assets/InnerCircleImg.svg"
import innerImg2 from "../src/assets/cb-dev-logo 4.png"
import settingIcon from "../src/assets/settingIcon.png"
import smallCircleIcon from "../src/assets/smallCircle.svg"

import menuIcon from "../src/assets/menuIcon.png"
import { AnimatePresence, Transition, motion } from 'framer-motion'
import line from "../src/assets/line.svg"
import arc1 from "../src/assets/Group 13.svg"
import arc2 from "../src/assets/Group 14.svg"
import looper from "../src/assets/looper.svg"
import looper2 from "../src/assets/looper2.svg"
import brandlogo from "../src/assets/brandlogo.png"
const App = () => {
  const [isHovered, setIsHovered] = useState(false);
  const transition: Transition = { duration: 0.5, delay: 0.2 };

  return (
    <Flex>
    <Box width="200px" position="relative" height="100vh" bg="#171C26" >
      <Image src={brandlogo} />
       <Image position="absolute" bottom="-10px" left="-90px" src={looper2} />
       <Flex alignItems="center" position="absolute" bottom="40px" left="13px"  color="white">
        
        <Text mr="10px">User settings</Text>
         <Image height="20px"  gap="10px" src={settingIcon} />
       </Flex>   
       
        </Box >
    <Box mx="auto">
      <Image position="absolute" left="-100px" top="-120px" src={looper} />
        <Box transform={['scale(0.4)',"scale(0.6)","scale(0.7)" ]}   zIndex='999'  height="680px" width="680px" position='relative'>
        <Image src={smallCircleIcon} />
      

      {/* right arc */}

       <Image src={arc2} position="absolute" top="30px" right="-150px" className='arc2' width="270px" />

      { isHovered && <AnimatePresence>
        
        
            <Image transition="0.5 ease-in-out"  src={arc1} className='circle'    width={"260px"} />


          <Box initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  as={motion.div} position='absolute' left='-47px' top='60px' transition="0.5 ease-in-out">
               <Text      textAlign="center" className='link' fontWeight="500" style={{ fontSize: "24px" }}  >Main <br /> Agent</Text>
             </Box> 
             <Box as={motion.div} initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
               position='absolute' left='-69px' top='190px' transition="0.5 ease-in-out">
               <Text  textAlign="center" className='link' fontWeight="500" style={{ fontSize: "24px" }}  >Legal</Text>
             </Box>
             <Box as={motion.div} initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }} position='absolute' left='-120px' top='270px' transition="0.5 ease-in-out">
               <Text  textAlign="center" className='link' fontWeight="500" style={{ fontSize: "24px" }}  >Financial</Text>
             </Box>
             <Box as={motion.div} initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }} position='absolute' left='-130px'  top='340px' >
               <Text  textAlign="center" className='link technical-link' fontWeight="500" style={{ fontSize: "24px" }} transition="0.5 ease-in-out">Technical</Text>
             </Box>
             <Box as={motion.div} initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }} position='absolute' left='-80px'  top='400px'>
               <Text  textAlign="center" className='link admin-link' fontWeight="500" style={{ fontSize: "24px" }} transition="0.5 ease-in-out" >Admin</Text>
             </Box>
             <Box as={motion.div} initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }} position='absolute' left='-55px'  top='500px'>
               <Text   textAlign="center" className='link custom-link' fontWeight="500" style={{ fontSize: "24px" }} transition="0.5 ease-in-out"   >Custom </Text>
             </Box>
          
        </AnimatePresence>
        
        }
      {/* </AnimatePresence> */}
      
      
       <Text position='absolute' right='54px' top='280px' textAlign="center" className='link' fontWeight="500" style={{ fontSize: "30px" }}  >Workflows</Text>
       {  <Text position='absolute' left='88px' top='280px' textAlign="center" className='link' fontWeight="500" style={{ fontSize: "30px" }}    onMouseEnter={() => setIsHovered(true)} // Set isHovered to true on mouse enter
          onMouseLeave={() => setIsHovered(false)} >Models</Text>}
         <Text position='absolute' left='250px' top='80px' textAlign="center" className='link' fontWeight="500" style={{ fontSize: "30px" }}  >Workspaces</Text>
         <Text position='absolute' left='300px' bottom='140px' textAlign="center" className='link' fontWeight="500" style={{ fontSize: "30px" }}  >Data</Text>
      
      </Box>
    </Box>
    </Flex>
 

  )
}

export default App