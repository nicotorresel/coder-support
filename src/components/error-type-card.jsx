import React from "react";
import { Stack, Center, Text } from "@chakra-ui/react";

const ErrorTypeCard = ({ content }) => {
  const { comment, date_created, description, ...posible_workourounds } = content;

  return (
    <Center>
      <Stack
        alignItems="center"
        bg="gray.200"
        boxShadow="sm"
        direction="row"
        justifyContent="space-between"
        p={2}
        rounded="md"
        width="80%"
      >
        <Text as="kbd" color="black">
          {comment}
        </Text>
        <Text>{date_created}</Text>
        <Text color="gray.600" fontSize="lg" width="50%">
          {description}
        </Text>
        <Text>Repeticiones: {}</Text>
      </Stack>
    </Center>
  );
};

export default ErrorTypeCard;
