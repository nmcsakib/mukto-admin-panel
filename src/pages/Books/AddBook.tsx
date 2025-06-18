import { useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import BookInputs from "../../components/form/form-elements/BookInput";
import DropzoneComponent from "../../components/form/form-elements/DropZone";
import PageMeta from "../../components/common/PageMeta";
import { toast } from "react-toastify";

export default function AddBook() {
  const [bookName, setBookName] = useState("");
  const [writer, setWriter] = useState("");
  const [publications, setPublications] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [pages, setPages] = useState("");
  const [details, setDetails] = useState("");
  const [picture, setPicture] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const bookData = {
      bookName,
      writer,
      publications,
      type,
      price: parseInt(price),
      pages: parseInt(pages),
      picture,
      details,
    };

    fetch(`${import.meta.env.VITE_SERVER}/All-books`, {
        method: "POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(bookData)
    }).then(res => res.json()).then(data => {
        
        if(data.insertedId){
            console.log(data, data.insertedId)
          toast("✅ Book Added Successfully")
        }
    }).catch(err => {
      console.log(err);
      toast("Something went wrong!")
    })

    console.log("Submitted Book:", bookData);
  
  };

  return (
    <div>
      <PageMeta
        title="Admin Panel | Mukto Pathagar"
        description="This is Admin Panel Form Elements Dashboard page for TailAdmin"
      />
      <PageBreadcrumb pageTitle="Add Books" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <BookInputs
            bookName={bookName}
            setBookName={setBookName}
            writer={writer}
            setWriter={setWriter}
            publications={publications}
            setPublications={setPublications}
            type={type}
            setType={setType}
            price={price}
            setPrice={setPrice}
            pages={pages}
            setPages={setPages}
            details={details}
            setDetails={setDetails}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="space-y-6">
          <DropzoneComponent picture={picture} setPicture={setPicture} title={""} />
        </div>
      </div>
    </div>
  );
}
