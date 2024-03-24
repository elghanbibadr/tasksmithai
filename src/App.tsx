import { useState } from 'react'
import { Flex, Box, Image, Text } from '@chakra-ui/react'

import settingIcon from "../src/assets/settingIcon.png"
import generate from "../src/assets/generate.png"
import analyze from "../src/assets/analyze.png"
import modify from "../src/assets/modify.png"
import { AnimatePresence, motion } from 'framer-motion'
import looper from "../src/assets/looper.svg"
import looper2 from "../src/assets/looper2.svg"
import brandlogo from "../src/assets/brandlogo.png"
import bottomarc from '../src/assets/bottom arc.svg'
import leftarc from '../src/assets/left arc.svg'
import rightarc from '../src/assets/right arc.svg'
import plusIcon from '../src/assets/plusIcon.svg'
import searchIcon from '../src/assets/search.svg'
import toparc from '../src/assets/top arc.svg'
import innerCircle from '../src/assets/inner circle (1).svg'

const App = () => {
  const [isHoveredArcId, setIsHoveredArcId] = useState("");



  return (
    <Flex height="100vh" flexDirection={["column", "column", "row"]} >
      <Box display={"flex"} alignItems="center" width={["100%", "100%", "230px"]} flexDirection={["row", "row", "column"]} p="3" justifyContent="space-between" bg="#171C26" >
        <Image height={["60px", "60px", "auto"]} width={["120px", "120px", "100%"]} src={brandlogo} />
        <Image position="absolute" bottom="-10px" left="-90px" display={["none", "none", "block"]} src={looper2} />

        <Flex alignItems="center" mb={{ md: "12px" }} color="white">

          <Text fontSize={["10px", "10", "16px"]} mr="10px">User settings</Text>
          <Image height={["14px", "20px"]} gap="10px" src={settingIcon} />
        </Flex>

      </Box >
      <Box alignSelf="center" position="relative" mx={["0", "auto"]} top={["-100px", "-100px", "30px"]}>

        <Image position="absolute" left="-100px" top="-120px" src={looper} />
        <Box transform={['scale(0.3)', "scale(0.4)", "scale(0.6)", "scale(0.6)", "scale(0.7)"]} zIndex='999' height="680px" width="690px" position='relative'>
          <Image src={innerCircle} />


          {isHoveredArcId === '2' && <>
            <Image src={rightarc} position="absolute" top="-44px" right="-75px" transform='rotate(3deg)' width='275px' />
            <Box initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              as={motion.div} position='absolute' right='-29px' top='42px' transition="0.5 ease-in-out">
              <Image h="16" position="relative" left="-26px" top="12px" src={generate} alt="" />
              <Text textAlign="center" className='link' transform="rotate(-30deg)" fontWeight="500" style={{ fontSize: "24px" }}  >Generate</Text>
            </Box>

            <Box initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              as={motion.div} position='absolute' right='-46px' top='229px' transition="0.5 ease-in-out">
              <Image h="12" src={analyze} alt="" />

              <Text textAlign="center" className='link' fontWeight="500" style={{ fontSize: "24px" }}  >Analyze</Text>
            </Box>

            <Box initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              as={motion.div} position='absolute' right='-2px' top='382px' transition="0.5 ease-in-out">
              <Image h="14" src={modify} alt="" />
              <Text transform="rotate(30deg)" position="relative" top="0px" left="-30px" textAlign="center" className='link' fontWeight="500" style={{ fontSize: "24px" }}  >Modify</Text>
            </Box>
          </>}



          {isHoveredArcId === '1' && <AnimatePresence>
            <Image transition="0.5 ease-in-out" src={leftarc} className='circle' width={"290px"} />
            <Box initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              as={motion.div} position='absolute' left='-47px' top='60px' transition="0.5 ease-in-out">
              <Text textAlign="center" className='link' fontWeight="500" style={{ fontSize: "24px" }}  >Main <br /> Agent</Text>
            </Box>
            <Box as={motion.div} initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}

              position='absolute' left='-75px' top='177px' transition="0.5 ease-in-out">
              <Text textAlign="center" className='link' fontWeight="500" style={{ fontSize: "24px" }}  >Legal</Text>
            </Box>
            <Box as={motion.div} initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }} position='absolute' left='-117px' top='246px' transition="0.5 ease-in-out">
              <Text textAlign="center" className='link' fontWeight="500" style={{ fontSize: "24px" }}  >Financial</Text>
            </Box>
            <Box as={motion.div} initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }} position='absolute' left='-130px' top='312px' >
              <Text textAlign="center" className='link technical-link' fontWeight="500" style={{ fontSize: "24px" }} transition="0.5 ease-in-out">Technical</Text>
            </Box>
            <Box as={motion.div} initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }} position='absolute' left='-80px' top='370px'>
              <Text textAlign="center" className='link admin-link' fontWeight="500" style={{ fontSize: "24px" }} transition="0.5 ease-in-out" >Admin</Text>
            </Box>
            <Box as={motion.div} initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }} position='absolute' left='-55px' top='436px'>
              <Text textAlign="center" className='link custom-link' fontWeight="500" style={{ fontSize: "24px" }} transition="0.5 ease-in-out"   >Custom </Text>
            </Box>
          </AnimatePresence>
          }


          {isHoveredArcId === '4' && <AnimatePresence>
            <Image transition="0.5 ease-in-out" src={bottomarc} className='btmarc' />
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


          {isHoveredArcId === '3' && <AnimatePresence>
            <Image transition="0.5 ease-in-out" src={toparc} className='toparc' />
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

          <Text position='absolute' cursor='pointer' right='119px' top='254px' textAlign="center" className='link' fontWeight="500" style={{ fontSize: "30px" }} onMouseEnter={() => setIsHoveredArcId("2")}  >Workflows</Text>
          {<Text cursor='pointer' position='absolute' left='84px' top='248px' textAlign="center" className='link' fontWeight="500" style={{ fontSize: "30px" }} onMouseEnter={() => setIsHoveredArcId("1")} // Set isHoveredArcId to true on mouse enter
          >Models</Text>}
          <Text onMouseEnter={() => setIsHoveredArcId("3")} cursor='pointer' position='absolute' left='230px' top='80px' textAlign="center" className='link' fontWeight="500" style={{ fontSize: "30px" }}  >Workspaces</Text>
          <Text cursor='pointer' onMouseEnter={() => setIsHoveredArcId("4")} position='absolute' left='270px' bottom='230px' textAlign="center" className='link' fontWeight="500" style={{ fontSize: "30px" }}  >Data</Text>
        </Box>
      </Box>


      <Box cursor={'pointer'} m='20px'>
        <svg width="97" height="38" viewBox="0 0 97 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="97" height="38" rx="19" fill="white" fill-opacity="0.06" />
          <circle cx="77.5" cy="18.5" r="14.5" fill="url(#paint0_linear_0_1)" />
          <path d="M16.7748 20.988H19.3598V22H15.5208V14.355H16.7748V20.988ZM23.0375 22.099C22.4655 22.099 21.9485 21.9707 21.4865 21.714C21.0245 21.45 20.6615 21.0833 20.3975 20.614C20.1335 20.1373 20.0015 19.5873 20.0015 18.964C20.0015 18.348 20.1372 17.8017 20.4085 17.325C20.6798 16.8483 21.0502 16.4817 21.5195 16.225C21.9888 15.9683 22.5132 15.84 23.0925 15.84C23.6718 15.84 24.1962 15.9683 24.6655 16.225C25.1348 16.4817 25.5052 16.8483 25.7765 17.325C26.0478 17.8017 26.1835 18.348 26.1835 18.964C26.1835 19.58 26.0442 20.1263 25.7655 20.603C25.4868 21.0797 25.1055 21.45 24.6215 21.714C24.1448 21.9707 23.6168 22.099 23.0375 22.099ZM23.0375 21.01C23.3602 21.01 23.6608 20.933 23.9395 20.779C24.2255 20.625 24.4565 20.394 24.6325 20.086C24.8085 19.778 24.8965 19.404 24.8965 18.964C24.8965 18.524 24.8122 18.1537 24.6435 17.853C24.4748 17.545 24.2512 17.314 23.9725 17.16C23.6938 17.006 23.3932 16.929 23.0705 16.929C22.7478 16.929 22.4472 17.006 22.1685 17.16C21.8972 17.314 21.6808 17.545 21.5195 17.853C21.3582 18.1537 21.2775 18.524 21.2775 18.964C21.2775 19.6167 21.4425 20.1227 21.7725 20.482C22.1098 20.834 22.5315 21.01 23.0375 21.01ZM29.8651 15.84C30.3345 15.84 30.7488 15.9353 31.1081 16.126C31.4748 16.3093 31.7608 16.5403 31.9661 16.819V15.939H33.2311V22.099C33.2311 22.6563 33.1138 23.1513 32.8791 23.584C32.6445 24.024 32.3035 24.3687 31.8561 24.618C31.4161 24.8673 30.8881 24.992 30.2721 24.992C29.4508 24.992 28.7688 24.7977 28.2261 24.409C27.6835 24.0277 27.3755 23.507 27.3021 22.847H28.5451C28.6405 23.1623 28.8421 23.4153 29.1501 23.606C29.4655 23.804 29.8395 23.903 30.2721 23.903C30.7781 23.903 31.1851 23.749 31.4931 23.441C31.8085 23.133 31.9661 22.6857 31.9661 22.099V21.087C31.7535 21.373 31.4638 21.615 31.0971 21.813C30.7378 22.0037 30.3271 22.099 29.8651 22.099C29.3371 22.099 28.8531 21.967 28.4131 21.703C27.9805 21.4317 27.6358 21.0577 27.3791 20.581C27.1298 20.097 27.0051 19.5507 27.0051 18.942C27.0051 18.3333 27.1298 17.7943 27.3791 17.325C27.6358 16.8557 27.9805 16.4927 28.4131 16.236C28.8531 15.972 29.3371 15.84 29.8651 15.84ZM31.9661 18.964C31.9661 18.546 31.8781 18.183 31.7021 17.875C31.5335 17.567 31.3098 17.3323 31.0311 17.171C30.7525 17.0097 30.4518 16.929 30.1291 16.929C29.8065 16.929 29.5058 17.0097 29.2271 17.171C28.9485 17.325 28.7211 17.556 28.5451 17.864C28.3765 18.1647 28.2921 18.524 28.2921 18.942C28.2921 19.36 28.3765 19.7267 28.5451 20.042C28.7211 20.3573 28.9485 20.5993 29.2271 20.768C29.5131 20.9293 29.8138 21.01 30.1291 21.01C30.4518 21.01 30.7525 20.9293 31.0311 20.768C31.3098 20.6067 31.5335 20.372 31.7021 20.064C31.8781 19.7487 31.9661 19.382 31.9661 18.964ZM37.5072 22.099C36.9352 22.099 36.4182 21.9707 35.9562 21.714C35.4942 21.45 35.1312 21.0833 34.8672 20.614C34.6032 20.1373 34.4712 19.5873 34.4712 18.964C34.4712 18.348 34.6069 17.8017 34.8782 17.325C35.1496 16.8483 35.5199 16.4817 35.9892 16.225C36.4586 15.9683 36.9829 15.84 37.5622 15.84C38.1416 15.84 38.6659 15.9683 39.1352 16.225C39.6046 16.4817 39.9749 16.8483 40.2462 17.325C40.5176 17.8017 40.6532 18.348 40.6532 18.964C40.6532 19.58 40.5139 20.1263 40.2352 20.603C39.9566 21.0797 39.5752 21.45 39.0912 21.714C38.6146 21.9707 38.0866 22.099 37.5072 22.099ZM37.5072 21.01C37.8299 21.01 38.1306 20.933 38.4092 20.779C38.6952 20.625 38.9262 20.394 39.1022 20.086C39.2782 19.778 39.3662 19.404 39.3662 18.964C39.3662 18.524 39.2819 18.1537 39.1132 17.853C38.9446 17.545 38.7209 17.314 38.4422 17.16C38.1636 17.006 37.8629 16.929 37.5402 16.929C37.2176 16.929 36.9169 17.006 36.6382 17.16C36.3669 17.314 36.1506 17.545 35.9892 17.853C35.8279 18.1537 35.7472 18.524 35.7472 18.964C35.7472 19.6167 35.9122 20.1227 36.2422 20.482C36.5796 20.834 37.0012 21.01 37.5072 21.01ZM47.3819 15.939V22H46.1279V21.285C45.9299 21.5343 45.6695 21.7323 45.3469 21.879C45.0315 22.0183 44.6942 22.088 44.3349 22.088C43.8582 22.088 43.4292 21.989 43.0479 21.791C42.6739 21.593 42.3769 21.2997 42.1569 20.911C41.9442 20.5223 41.8379 20.053 41.8379 19.503V15.939H43.0809V19.316C43.0809 19.8587 43.2165 20.2767 43.4879 20.57C43.7592 20.856 44.1295 20.999 44.5989 20.999C45.0682 20.999 45.4385 20.856 45.7099 20.57C45.9885 20.2767 46.1279 19.8587 46.1279 19.316V15.939H47.3819ZM50.4994 16.962V20.317C50.4994 20.5443 50.5508 20.7093 50.6534 20.812C50.7634 20.9073 50.9468 20.955 51.2034 20.955H51.9734V22H50.9834C50.4188 22 49.9861 21.868 49.6854 21.604C49.3848 21.34 49.2344 20.911 49.2344 20.317V16.962H48.5194V15.939H49.2344V14.432H50.4994V15.939H51.9734V16.962H50.4994Z" fill="white" />
          <defs>
            <linearGradient id="paint0_linear_0_1" x1="63" y1="18" x2="108.5" y2="18" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>


      </Box>
    </Flex>


  )
}

export default App