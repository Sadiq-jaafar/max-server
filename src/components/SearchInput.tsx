import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      style={{ width: "100%", height: "auto" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) console.log(ref.current?.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          width="100%" // This is optional since the form is already 100% width
          ref={ref}
          borderRadius={20}
          placeholder="Search file"
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
