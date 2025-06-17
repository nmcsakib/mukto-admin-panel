import { useState } from "react";
import ComponentCard from "../../common/ComponentCard.tsx";
import Label from "../Label.tsx";
import Input from "../input/InputField.tsx";
import TextArea from "../input/TextArea.tsx";
import PhoneInput from "../group-input/PhoneInput.tsx";
import { EnvelopeIcon } from "../../../icons/index.ts";

export default function MemberInput() {
  const [message, setMessage] = useState("");
   const countries = [
    { code: "BAN", label: "+880" },
  ];
  const handlePhoneNumberChange = (phoneNumber: string) => {
    console.log("Updated phone number:", phoneNumber);
  };

  return (
    <ComponentCard title="Add Member">
      <div className="space-y-6">
        <div>
          <Label htmlFor="input">Name</Label>
          <Input type="text" id="input" />
        </div>
        <div>
          <Label htmlFor="input">Designation</Label>
          <Input type="text" id="input" />
        </div>
         <div>
          <Label>Phone</Label>
          <PhoneInput
            selectPosition="start"
            countries={countries}
            placeholder="+880 (555) 000-0000"
            onChange={handlePhoneNumberChange}
          />
        </div>{" "}
          <div>
          <Label>Email</Label>
          <div className="relative">
            <Input
              placeholder="info@gmail.com"
              type="text"
              className="pl-[62px]"
            />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
              <EnvelopeIcon className="size-6" />
            </span>
          </div>
        </div>
        <div>
          <Label htmlFor="input">Facebook</Label>
          <Input type="text" id="input" />
        </div>
        <div>
          <Label htmlFor="input">Instagram</Label>
          <Input type="text" id="input" />
        </div>
        <div>
          <Label>Details</Label>
          <TextArea
            value={message}
            onChange={(value) => setMessage(value)}
            rows={6}
          />
        </div>

                    <button className="bg-green-400 py-2 px-5 rounded-lg">Add</button>
      </div>
    </ComponentCard>
  );
}
