import React, { useState } from 'react'
import { Flex, Heading, Spacer, Box, Image, Text } from '@chakra-ui/react'
import innerImg from "../src/assets/InnerCircleImg.svg"
import innerImg2 from "../src/assets/cb-dev-logo 4.png"
import settingIcon from "../src/assets/settingIcon.png"
import smallCircleIcon from "../src/assets/Group 20.svg"
import generate from "../src/assets/generate.png"
import analyze from "../src/assets/analyze.png"
import menuIcon from "../src/assets/menuIcon.png"
import modify from "../src/assets/modify.png"
import { AnimatePresence, Transition, motion } from 'framer-motion'
import line from "../src/assets/line.svg"
import arc1 from "../src/assets/Group 13.svg"
import arc2 from "../src/assets/Group 14.svg"
import looper from "../src/assets/looper.svg"
import looper2 from "../src/assets/looper2.svg"
import brandlogo from "../src/assets/brandlogo.png"
import bottomarc from '../src/assets/bottom arc.svg'
import leftarc from '../src/assets/left arc.svg'
import rightarc from '../src/assets/right arc.svg'
import plusIcon from '../src/assets/plusIcon.svg'
import searchIcon from '../src/assets/search.svg'
import toparc from '../src/assets/top arc.svg'

const App = () => {
  const [isHoveredArcId, setIsHoveredArcId] = useState("1");
  const transition: Transition = { duration: 0.5, delay: 0.2 };


  return (
    <Flex height="100vh" flexDirection={["column","column","row"]} >
    <Box display={"flex"}  alignItems="center"  width={["100%","100%","230px"]} flexDirection={["row","row","column"]} p="3"  justifyContent="space-between" bg="#171C26" >
      <Image height={["60px","60px","auto"]} width={["120px","120px","100%"]} src={brandlogo} />
      <Image position="absolute" bottom="-10px" left="-90px" display={["none","none","block"]} src={looper2} />

       <Flex alignItems="center"  mb={{md:"12px"}}  color="white">
        
        <Text fontSize={["10px","10","16px"]} mr="10px">User settings</Text>
         <Image height={["14px","20px"]}  gap="10px" src={settingIcon} />
       </Flex>   
       
        </Box >
    <Box alignSelf="center"  position="relative" mx={["0","auto"]} top={["-100px","-100px","30px"]}>
    {/* */}
      <Image position="absolute" left="-100px" top="-120px"   src={looper} />
        <Box transform={['scale(0.3)',"scale(0.4)","scale(0.6)","scale(0.6)","scale(0.7)" ]}   zIndex='999'  height="680px" width="690px" position='relative'>
        <Image src={smallCircleIcon} />
       
  
{ <>
{/* <Image src={rightarc} position="absolute" top="-44px" right="-75px" transform='rotate(3deg)' width='275px' /> */}
      
<Box initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           as={motion.div} position='absolute' right='-29px' top='42px' transition="0.5 ease-in-out">
        <Image h="16" position="relative" left="-26px" top="12px" src={generate} alt="" />
        <Text    textAlign="center" className='link' transform="rotate(-30deg)" fontWeight="500" style={{ fontSize: "24px" }}  >Generate</Text>
      </Box> 



<Box initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           as={motion.div} position='absolute' right='-46px' top='229px' transition="0.5 ease-in-out">
                            <Image h="12" src={analyze} alt="" />

        <Text    textAlign="center" className='link' fontWeight="500" style={{ fontSize: "24px" }}  >Analyze</Text>
      </Box> 


<Box initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           as={motion.div} position='absolute' right='-2px' top='382px' transition="0.5 ease-in-out">
            <Image h="14" src={modify} alt="" />
        <Text transform="rotate(30deg)" position="relative" top="0px" left="-30px"  textAlign="center" className='link' fontWeight="500" style={{ fontSize: "24px" }}  >Modify</Text>
      </Box> 
</>}
     






      { <AnimatePresence>
        
        
            {/* <Image transition="0.5 ease-in-out"  src={leftarc} className='circle'    width={"290px"} /> */}


          <Box initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  as={motion.div} position='absolute' left='-47px' top='60px' transition="0.5 ease-in-out">
               <Text      textAlign="center" className='link' fontWeight="500" style={{ fontSize: "24px" }}  >Main <br /> Agent</Text>
             </Box> 
             <Box as={motion.div} initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
     
               position='absolute' left='-75px' top='177px' transition="0.5 ease-in-out">
               <Text  textAlign="center" className='link' fontWeight="500" style={{ fontSize: "24px" }}  >Legal</Text>
             </Box>
             <Box as={motion.div} initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }} position='absolute' left='-117px' top='246px' transition="0.5 ease-in-out">
               <Text  textAlign="center" className='link' fontWeight="500" style={{ fontSize: "24px" }}  >Financial</Text>
             </Box>
             <Box as={motion.div} initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }} position='absolute' left='-130px'  top='312px' >
               <Text  textAlign="center" className='link technical-link' fontWeight="500" style={{ fontSize: "24px" }} transition="0.5 ease-in-out">Technical</Text>
             </Box>
             <Box as={motion.div} initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }} position='absolute' left='-80px'  top='370px'>
               <Text  textAlign="center" className='link admin-link' fontWeight="500" style={{ fontSize: "24px" }} transition="0.5 ease-in-out" >Admin</Text>
             </Box>
             <Box as={motion.div} initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }} position='absolute' left='-55px'  top='436px'>
               <Text   textAlign="center" className='link custom-link' fontWeight="500" style={{ fontSize: "24px" }} transition="0.5 ease-in-out"   >Custom </Text>
             </Box>
          
        </AnimatePresence>
        
        }     

{/* BUTTOM ARC */}
   {  <AnimatePresence>          
        <Image transition="0.5 ease-in-out"   src={bottomarc}    className='btmarc' />     
        <Box initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  as={motion.div} position='absolute' right='177px' bottom='89px' transition="0.5 ease-in-out">
               <Image src={settingIcon} />
             </Box> 
             <Box initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  as={motion.div} position='absolute' right='376px' bottom='60px' transition="0.5 ease-in-out">
               <Image src={plusIcon} />
             </Box> 
             <Box initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  as={motion.div} position='absolute' left='45px' bottom='81px' transition="0.5 ease-in-out">
               <Image src={searchIcon} />
             </Box> 
    </AnimatePresence>
    
    }

    {/* TOP ARC */}
   {  <AnimatePresence>          
        <Image transition="0.5 ease-in-out"   src={toparc}    className='toparc' />     
        <Box initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  as={motion.div} position='absolute' right='184px' top='-55px' transition="0.5 ease-in-out">
               <Image src={settingIcon} />
             </Box> 
             <Box initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  as={motion.div} position='absolute' right='376px' top='-79px' transition="0.5 ease-in-out">
               <Image src={plusIcon} />
             </Box> 
             <Box initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  as={motion.div} position='absolute' left='45px' top='-63px' transition="0.5 ease-in-out">
               <Image src={searchIcon} />
             </Box> 
    </AnimatePresence>
    
    }
 


 {/* INNER LINKS OF THE CIRLE */}
      
       <Text position='absolute' right='119px' top='254px' textAlign="center" className='link' fontWeight="500" style={{ fontSize: "30px" }} onMouseEnter={() => setIsHoveredArcId("2")} onMouseLeave={() => setIsHoveredArcId("")}  >Workflows</Text>
       {  <Text position='absolute' left='84px' top='248px' textAlign="center" className='link' fontWeight="500" style={{ fontSize: "30px" }}    onMouseEnter={() => setIsHoveredArcId("1")} // Set isHoveredArcId to true on mouse enter
          onMouseLeave={() => setIsHoveredArcId("")} >Models</Text>}
         <Text position='absolute' left='250px' top='80px' textAlign="center" className='link' fontWeight="500" style={{ fontSize: "30px" }}  >Workspaces</Text>
         <Text position='absolute' left='280px' bottom='230px' textAlign="center" className='link' fontWeight="500" style={{ fontSize: "30px" }}  >Data</Text>
      
        
      </Box>
    </Box>
    </Flex>
 

  )
}

export default App