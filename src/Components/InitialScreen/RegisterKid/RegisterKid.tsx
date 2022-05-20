import { Box, Center, Flex, HStack, Input, Text } from "@chakra-ui/react";
import NavigationButtons from "../NavigationButtons/NavigationButtons";
import Avatar from "../Avatar/Avatar";
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
    <Center h={"80%"} zIndex={1} mt={"60px"}>
      <Flex h={"100%"} flexDir={"column"} justify="space-between">
        <Flex
          height={"fit-content"}
          flexDir={"column"}
          align="center"
          justify={"space-between"}
        >
          <Text fontWeight={"light"} fontSize={"5xl"} color={"#ffff"}>
            Create Profile
          </Text>
        </Flex>
        <Flex width={"640px"} justify={"space-between"} align="center">
          <Flex flexDir={"column"} w="200px" align={"center"}>
            <Avatar icon={<MdChildCare />} />
            <Box
              color={"#ffff"}
              align="center"
              mt={"10px"}
              fontSize="lg"
              p={"15px"}
              className="backdropFilter"
            >
              <Box fontSize={"3xl"}>
                <AiOutlineCamera />
              </Box>
              <Text mt={"5px"}>
                Use our mobile app to upload a photo or choose a character
              </Text>
            </Box>
          </Flex>
          <Flex h="100%" flexDir={"column"} justify="space-around" w={"60%"}>
            <Input
              width={"100%"}
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
                <Input
                  color={"#ffff"}
                  variant={"flushed"}
                  placeholder={"Month"}
                  maxLength={2}
                ></Input>
                <Input
                  color={"#ffff"}
                  variant={"flushed"}
                  placeholder={"Year"}
                  maxLength={4}
                ></Input>
              </Flex>
            </Box>
            <HStack w={"100%"} justify="space-between" zIndex={1}>
              <ColorButtons />
            </HStack>
          </Flex>
        </Flex>
        <Flex flexDir={"column"} align="center">
          <HStack spacing="40px">
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
                          document.getElementById(
                            "inputName"
                          ) as HTMLInputElement
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
      </Flex>
    </Center>
  );
};

export default RegisterKid;
