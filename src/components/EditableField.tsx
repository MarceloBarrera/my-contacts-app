import {
  EditablePreview,
  IconButton,
  Input,
  useEditableControls,
  ButtonGroup,
  Editable,
  EditableInput,
  Flex,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import { useState } from "react";

export const EditableField = ({
  value,
  updateHandler,
}: {
  value: string;
  updateHandler: (name: string) => void;
}) => {
  const [text, setText] = useState<string>(value);

  const EditableControls = () => {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="end" size="sm" w="full" spacing={2} mt={2}>
        <IconButton
          aria-label="submit-ok"
          icon={
            <CheckIcon
              onClick={() => {
                updateHandler(text);
              }}
            />
          }
          {...getSubmitButtonProps()}
        />
        <IconButton
          aria-label="Close-cancel"
          icon={<CloseIcon boxSize={3} />}
          {...getCancelButtonProps()}
        />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton
          aria-label="edit-field"
          size="sm"
          icon={<EditIcon />}
          {...getEditButtonProps()}
        />
      </Flex>
    );
  };

  return (
    <Editable
      onChange={setText}
      defaultValue={value}
      isPreviewFocusable={true}
      selectAllOnFocus={false}
      wordBreak="break-word"
      submitOnBlur={false}
    >
      <EditablePreview />

      <Input
        py={2}
        px={4}
        as={EditableInput}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            updateHandler(text);
          }
        }}
      />
      <EditableControls />
    </Editable>
  );
};
