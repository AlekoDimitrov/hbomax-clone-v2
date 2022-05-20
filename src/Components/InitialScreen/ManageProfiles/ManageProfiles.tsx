import React, { useContext, useState } from "react";
import { Box, Button, Flex, HStack, Input, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import { AiOutlineCamera } from "react-icons/ai";
import ColorButtons from "../ColorButtons/ColorButtons";
import { BiEdit } from "react-icons/bi";
import NavigationButtons from "../NavigationButtons/NavigationButtons";
import { PassedUserContext, UsersContext } from "../../../Helper/Context";

const ManageProfiles = () => {
  const { users, setUsers }: any = useContext(UsersContext);
  const { passedUser, setPassedUser }: any = useContext(PassedUserContext);

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
          Manage Profiles
        </Text>
        <HStack spacing={"90px"}>
          {users.map((user, key) => {
            return (
              <Box
                onClick={() => {
                  setPassedUser(user);
                }}
                key={key}
              >
                <RouterLink to={"edit-profile"}>
                  <Avatar
                    name={user.name}
                    icon={<BiEdit fontSize={"50px"} color={"#E2E1E5"} />}
                    background={user.userTheme.avatarBackground}
                  />
                </RouterLink>
              </Box>
            );
          })}
        </HStack>
        <Box mb={"30px"}>
          <RouterLink to={"/who-is-watching"}>
            <NavigationButtons content="DONE" />
          </RouterLink>
        </Box>
      </Flex>
    </>
  );
};

export default ManageProfiles;
