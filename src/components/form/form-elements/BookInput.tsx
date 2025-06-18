import ComponentCard from "../../common/ComponentCard.tsx";
import Label from "../Label.tsx";
import Input from "../input/InputField.tsx";
import TextArea from "../input/TextArea.tsx";
type BookInputsProps = {
  bookName: string;
  setBookName: React.Dispatch<React.SetStateAction<string>>;
  writer: string;
  setWriter: React.Dispatch<React.SetStateAction<string>>;
  publications: string;
  setPublications: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  price: string;
  setPrice: React.Dispatch<React.SetStateAction<string>>;
  pages: string;
  setPages: React.Dispatch<React.SetStateAction<string>>;
  details: string;
  setDetails: React.Dispatch<React.SetStateAction<string>>;
  secretCode: string;
  setSecretCode: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void
};


export default function BookInputs({
  bookName,
  setBookName,
  writer,
  setWriter,
  publications,
  setPublications,
  type,
  setType,
  price,
  setPrice,
  pages,
  setPages,
  details,
  setDetails,
  handleSubmit,
  secretCode,
  setSecretCode
}: BookInputsProps) {


  return (
    <ComponentCard title="Add Book">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="bookName">Book Name</Label>
          <Input
            type="text"
            id="bookName"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="writer">Writer</Label>
          <Input
            type="text"
            id="writer"
            value={writer}
            onChange={(e) => setWriter(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="publications">Publications</Label>
          <Input
            type="text"
            id="publications"
            value={publications}
            onChange={(e) => setPublications(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="type">Type</Label>
          <Input
            type="text"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="price">Price</Label>
          <Input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="pages">Pages</Label>
          <Input
            type="number"
            id="pages"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="details">Description</Label>
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

        <button type="submit" className="bg-green-400 py-2 px-5 rounded-lg">
          Add
        </button>
      </form>
    </ComponentCard>
  );
}
