import React from "react";
import ComponentCard from "../../common/ComponentCard.tsx";
import Label from "../Label.tsx";
import Input from "../input/InputField.tsx";
import TextArea from "../input/TextArea.tsx";
import PhoneInput from "../group-input/PhoneInput.tsx";
import { EnvelopeIcon } from "../../../icons/index.ts";
import Select from "../Select.tsx";

interface MemberInputProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  designation: string;
  setDesignation: React.Dispatch<React.SetStateAction<string>>;
  mobile: string;
  setMobile: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  facebook: string;
  setFacebook: React.Dispatch<React.SetStateAction<string>>;
  instagram: string;
  setInstagram: React.Dispatch<React.SetStateAction<string>>;
  details: string;
  setDetails: React.Dispatch<React.SetStateAction<string>>;
  secretCode: string;
  setSecretCode: React.Dispatch<React.SetStateAction<string>>;
  setType: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const MemberInput: React.FC<MemberInputProps> = ({
  name,
  setName,
  designation,
  setDesignation,
  mobile,
  setMobile,
  email,
  setEmail,
  facebook,
  setFacebook,
  instagram,
  setInstagram,
  details,
  setDetails,
  handleSubmit,
  setType,
  secretCode,
  setSecretCode
}) => {
  const countries = [{ code: "BAN", label: "+880" }];
  const options = [
    { value: "Committee", label: "Committee" },
    { value: "Adviser", label: "Adviser" },
    { value: "Life-time", label: "Life time" },
    { value: "Guest", label: "Guest" },
    { value: "General", label: "General" },
  ];
  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
    setType(value)
  };

  return (
    <ComponentCard title="Add Member">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="designation">Designation</Label>
          <Input
            id="designation"
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </div>
        <div>
          <Label>Type</Label>
          <Select
            options={options}
            placeholder="Select an option"
            onChange={handleSelectChange}
            className="dark:bg-dark-900"
          />
        </div>

        <div>
          <Label>Phone</Label>
          <PhoneInput
            selectPosition="start"
            countries={countries}
            placeholder={mobile}
            onChange={(value) => setMobile(value)}
          />
        </div>

        <div>
          <Label>Email</Label>
          <div className="relative">
            <Input
              placeholder="info@gmail.com"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-[62px]"
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <EnvelopeIcon className="size-6" />
            </span>
          </div>
        </div>

        <div>
          <Label htmlFor="facebook">Facebook</Label>
          <Input
            id="facebook"
            type="text"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="instagram">Instagram</Label>
          <Input
            id="instagram"
            type="text"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
        </div>


        <div>
          <Label>Details</Label>
          <TextArea
            value={details}
            onChange={(value) => setDetails(value)}
            rows={6}
          />
        </div>


        <div>
          <Label htmlFor="secret-code">Secret code</Label>
          <Input
            id="secret-code"
            type="text"
            value={secretCode}
            onChange={(e) => setSecretCode(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-green-400 py-2 px-5 rounded-lg text-white"
        >
          Add
        </button>
      </form>
    </ComponentCard>
  );
};

export default MemberInput;
