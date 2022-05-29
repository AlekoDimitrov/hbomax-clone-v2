import "./WhosWatching.css";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { ActiveUserContext, UsersContext } from "../../../Helper/Context";
import BigAvatar from "../BigAvatar/BigAvatar";
import NavigationButtons from "../../../shared/NavigationButtons/NavigationButtons";
import { Link as RouterLink } from "react-router-dom";

const WhosWatching = () => {
  const { users }: any = useContext(UsersContext);
  const { setActiveUser }: any = useContext(ActiveUserContext);
  return (
    <Flex
      mt={"60px"}
      flexDir={"column"}
      h={"88%"}
      justify={"space-between"}
      alignItems={"center"}
    >
      <Text fontSize={"5xl"} color={"#ffff"}>
        Who is Watching?
      </Text>
      <HStack spacing={"90px"} justifyContent={"center"}>
        {users.map((user, key) => {
          return (
            <Box
              key={key}
              onClick={() =>
                setActiveUser([
                  user.name,
                  user.userTheme.avatarBackground,
                  user.userTheme.background,
                ])
              }
            >
              <RouterLink to={"/watch"}>
                <BigAvatar
                  name={user.name}
                  background={user.userTheme.avatarBackground}
                />
              </RouterLink>
            </Box>
          );
        })}
      </HStack>
      <Box>
        <HStack spacing={"30px"} justifyContent={"center"}>
          <RouterLink to={"/register-adult"}>
            <NavigationButtons
              content={"ADULT"}
              icon={<AiOutlinePlus className="marginRight" />}
            />
          </RouterLink>
          <RouterLink to={"/register-kid"}>
            <NavigationButtons
              content={"KID"}
              icon={<AiOutlinePlus className="marginRight" />}
            />
          </RouterLink>
        </HStack>
        <Box textAlign={"center"}>
          <RouterLink to={"/manage-profiles"}>
            <Text
              mt={"40px"}
              fontSize={"1.1em"}
              letterSpacing={"1px"}
              fontWeight={"bold"}
              color={"#9e88ff"}
            >
              MANAGE PROFILES
            </Text>
          </RouterLink>
        </Box>
      </Box>
    </Flex>
  );
};

export default WhosWatching;
