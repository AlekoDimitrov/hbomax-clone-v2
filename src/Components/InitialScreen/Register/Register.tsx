import "./Register.css";
import { Box, Button, Flex, HStack, Input, Text } from "@chakra-ui/react";
import { Link, Link as RouterLink } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import { AiOutlineCamera } from "react-icons/ai";
import ColorButtons from "../ColorButtons/ColorButtons";
import { BsPerson } from "react-icons/bs";
import NavigationButtons from "../NavigationButtons/NavigationButtons";
import { BackgroundContext, UsersContext } from "../../../Helper/Context";
import { useContext } from "react";

const Register = () => {
  const { users, setUsers }: any = useContext(UsersContext);
  const { background } = useContext(BackgroundContext);

  return (
    <>
      {console.log(users)}
      {console.log(users.length)}
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
          Register User
        </Text>

        <Flex w={"35%"} justify={"space-between"}>
          <Flex flexDir={"column"} align={"center"}>
            <Avatar icon={<BsPerson />} />
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
          <Flex
            w={"55%"}
            flexDir={"column"}
            justify={"space-around"}
            align={"center"}
          >
            <Input
              variant={"flushed"}
              placeholder={"Name"}
              defaultValue={"Guest"}
              color={"#ffff"}
              fontSize={"2xl"}
              id={"inputName"}
            />

            <Flex w={"100%"} justify={"space-between"}>
              <ColorButtons />
            </Flex>
          </Flex>
        </Flex>
        <Flex w={"25%"} justify={"space-around"} mb={"30px"}>
          <Link to={"/"}>
            <NavigationButtons
              content={"SAVE"}
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
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default Register;
