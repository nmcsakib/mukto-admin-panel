import { useState } from "react";
import ComponentCard from "../../common/ComponentCard.tsx";
import Label from "../Label.tsx";
import Input from "../input/InputField.tsx";
import TextArea from "../input/TextArea.tsx";

export default function DefaultInputs() {
  const [message, setMessage] = useState("");

  return (
    <ComponentCard title="Add Book">
      <div className="space-y-6">
        <div>
          <Label htmlFor="input">Book Name</Label>
          <Input type="text" id="input" />
        </div>
        <div>
          <Label htmlFor="input">Writer</Label>
          <Input type="text" id="input" />
        </div>
        <div>
          <Label htmlFor="input">Publications</Label>
          <Input type="text" id="input" />
        </div>
        <div>
          <Label htmlFor="input">Type</Label>
          <Input type="text" id="input" />
        </div>
        <div>
          <Label htmlFor="input">Price</Label>
          <Input type="text" id="input" />
        </div>
        <div>
          <Label>Description</Label>
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
