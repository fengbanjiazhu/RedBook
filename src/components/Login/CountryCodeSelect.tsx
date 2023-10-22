import React, { useState, memo } from "react";
import { CheckIcon, Select } from "native-base";
import { countryCode } from "../../constant/countryCode";

const CountryCodeSelect = () => {
  const [code, setCode] = useState("");

  return (
    <Select
      selectedValue={code}
      defaultValue={"+61"}
      minWidth="100"
      _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="2" />,
      }}
      variant="unstyled"
      onValueChange={(itemValue) => setCode(itemValue)}
    >
      {countryCode.map(({ name, dial_code, code }) => {
        return <Select.Item key={code} label={`${dial_code} ${name}`} value={dial_code} />;
      })}
    </Select>
  );
};

export default memo(CountryCodeSelect);
