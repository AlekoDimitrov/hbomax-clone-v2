import { Box, Center, Flex, HStack, Input, Text } from "@chakra-ui/react";
import NavigationButtons from "../../../shared/NavigationButtons/NavigationButtons";
import BigAvatar from "../BigAvatar/BigAvatar";
import { AiOutlineCamera } from "react-icons/ai";
import ColorButtons from "../ColorButtons/ColorButtons";
import { Link as RouterLink } from "react-router-dom";
import { MdChildCare } from "react-icons/md";
import { BackgroundContext, UsersContext } from "../../../Helper/Context";
import { useContext, useState } from "react";

const RegisterKid = () => {
  const { users, setUsers }: any = useContext(UsersContext);
  const { background } = useContext(BackgroundContext);
  const [buttonToggle, setButtonToggle] = useState(true);
  return (
    <>
      <Flex
        mt={"60px"}
        flexDir={"column"}
        w={"100%"}
        h={"100%"}
        minH={"600px"}
        alignItems={"center"}
        justify={"space-between"}
      >
        <Text fontSize={"5xl"} color={"#ffff"}>
          Register Kid
        </Text>

        <Flex w={"50%"} justify={"space-between"}>
          <Flex flexDir={"column"} align={"center"}>
            <BigAvatar icon={<MdChildCare />} />
            <Flex
              mt={"10px"}
              w={"210px"}
              flexDir={"column"}
              alignItems={"center"}
              textAlign={"center"}
              className="backdropFilter"
              p={"15px"}
              color={"#ffff"}
            >
              <AiOutlineCamera fontSize={"30px"} />
              <Text fontSize={"1.15em"} mt={"8px"}>
                Use our mobile app to upload a photo or choose a character
              </Text>
            </Flex>
          </Flex>
          <Flex w={"55%"} flexDir={"column"} justify={"space-around"}>
            <Input
              variant={"flushed"}
              placeholder={"Name"}
              color={"#ffff"}
              fontSize={"2xl"}
              maxLength={20}
              id={"inputName"}
              onChange={() =>
                (document.getElementById("inputName") as HTMLInputElement).value
                  .length < 1
                  ? setButtonToggle(true)
                  : setButtonToggle(false)
              }
            />
            <Box>
              <Text fontSize={"2xl"} fontWeight={"bold"} color={"#ffff"}>
                Birth Date (MM/YYYYY)
              </Text>
              <Flex>
                <Box>
                  <Flex>
                    <Input
                      color={"#ffff"}
                      variant={"flushed"}
                      placeholder={"Month"}
                      maxLength={2}
                    />
                    <Input
                      color={"#ffff"}
                      variant={"flushed"}
                      placeholder={"Year"}
                      maxLength={4}
                    />
                  </Flex>
                  <Text fontSize={"sm"} color={"#718096"} mt={"8px"}>
                    We use age to customize content and features for this
                    profile
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Flex w={"100%"} justify={"space-between"}>
              <ColorButtons />
            </Flex>
          </Flex>
        </Flex>
        <HStack spacing={"40px"} mb={"30px"}>
          <RouterLink to={"/who-is-watching"}>
            <NavigationButtons
              content={"SAVE"}
              disabled={buttonToggle}
              onClick={() => {
                if (users.length < 5) {
                  setUsers([
                    ...users,
                    {
                      name: (
                        document.getElementById("inputName") as HTMLInputElement
                      ).value,
                      userTheme: background,
                    },
                  ]);
                }
              }}
            />
          </RouterLink>
          <RouterLink to={"/who-is-watching"}>
            <NavigationButtons content="CANCEL" />
          </RouterLink>
        </HStack>
      </Flex>
    </>
  );
};

export default RegisterKid;
