import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { UsersContext } from "../../../Helper/Context";
import Avatar from "../Avatar/Avatar";
import NavigationButtons from "../NavigationButtons/NavigationButtons";

const WhosWatching = () => {
  const { users }: any = useContext(UsersContext);
  console.log(users[0].name);
  return (
    <Flex mt={"60px"} flexDir={"column"} h={"88%"} justify={"space-between"}>
      <Text fontSize={"5xl"} color={"#ffff"}>
        Who is Watching?
      </Text>
      <Flex justifyContent={"center"}>
        {users.map((user, key) => {
          return (
            <Avatar
              name={user.name}
              background={user.userTheme.avatarBackground}
              key={key}
            />
          );
        })}
      </Flex>
      <Box>
        <HStack spacing={"30px"}>
          <NavigationButtons content={"ADULT"} />
          <NavigationButtons content={"KID"} />
        </HStack>
        <Box textAlign={"center"}>
          <Text
            mt={"40px"}
            fontSize={"1.1em"}
            letterSpacing={"1px"}
            fontWeight={"bold"}
            color={"#9e88ff"}
          >
            MANAGE PROFILES
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default WhosWatching;
