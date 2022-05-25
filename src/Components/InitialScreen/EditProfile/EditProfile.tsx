import React, { useContext, useState } from "react";
import { Flex, HStack, Input, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import BigAvatar from "../BigAvatar/BigAvatar";
import { AiOutlineCamera } from "react-icons/ai";
import ColorButtons from "../ColorButtons/ColorButtons";
import { BsPerson } from "react-icons/bs";
import NavigationButtons from "../../../shared/NavigationButtons/NavigationButtons";
import {
  BackgroundContext,
  PassedUserContext,
  UsersContext,
} from "../../../Helper/Context";

const EditProfile = () => {
  const { users, setUsers }: any = useContext(UsersContext);
  const { passedUser, setPassedUser }: any = useContext(PassedUserContext);
  const [updatedUser, setUpdatedUser] = useState(false);
  const [buttonToggle, setButtonToggle] = useState(
    passedUser === undefined ? true : false
  );
  const { background }: any = useContext(BackgroundContext);

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
          Edit Profile
        </Text>

        <Flex w={"50%"} justify={"space-between"}>
          <Flex flexDir={"column"} align={"center"}>
            <BigAvatar
              icon={<BsPerson />}
              background={
                updatedUser
                  ? background.avatarBackground
                  : passedUser.userDetails.userTheme.avatarBackground
              }
            />
            <Flex
              mt={"20px"}
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
              color={"#ffff"}
              fontSize={"2xl"}
              maxLength={20}
              id={"inputName"}
              defaultValue={
                passedUser === undefined ? "" : passedUser.userDetails.name
              }
              onChange={() => {
                if (
                  (document.getElementById("inputName") as HTMLInputElement)
                    .value.length < 1 ||
                  passedUser === undefined
                ) {
                  setButtonToggle(true);
                } else {
                  setButtonToggle(false);
                }
              }}
            />

            <Flex w={"100%"} justify={"space-between"}>
              <ColorButtons setUpdatedUser={setUpdatedUser} />
            </Flex>
          </Flex>
        </Flex>
        <HStack spacing={"40px"} mb={"30px"}>
          <RouterLink
            to={"/who-is-watching"}
            onClick={() => {
              let updateOldUsers = users;
              updateOldUsers[passedUser.userIdentifier] = {
                name: (document.getElementById("inputName") as HTMLInputElement)
                  .value,
                userTheme: {
                  avatarBackground: background.avatarBackground,
                  background: background.background,
                },
              };

              setUsers(updateOldUsers);
            }}
          >
            <NavigationButtons content={"SAVE"} disabled={buttonToggle} />
          </RouterLink>
          <RouterLink to={"/manage-profiles"}>
            <NavigationButtons content="CANCEL" />
          </RouterLink>
        </HStack>
      </Flex>
    </>
  );
};

export default EditProfile;
