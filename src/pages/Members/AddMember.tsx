import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import DropzoneComponent from "../../components/form/form-elements/DropZone";

import PageMeta from "../../components/common/PageMeta";
import MemberInput from "../../components/form/form-elements/MemberInput";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AddMember() {
      const [name, setName] = useState("");
      const [designation, setDesignation] = useState("");
      const [mobile, setMobile] = useState("");
      const [email, setEmail] = useState("");
      const [picture, setPicture] = useState("");
      const [facebook, setFacebook] = useState("");
      const [instagram, setInstagram] = useState("");
      const [details, setDetails] = useState("");
      const [type, setType] = useState("");
      const [secretCode, setSecretCode] = useState("");
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        const memberData = {
         name: name,
         designation: designation,
         type: type,
         mobile: mobile,
         email: email,
         image: picture,
         social_media: { facebook: facebook, instagram: instagram },
         details: details
        
        };
        
        console.log("Submitted Member:", memberData);
    
        if(secretCode === import.meta.env.VITE_SECRET_CODE){
            fetch(`${import.meta.env.VITE_SERVER}/members`, {
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(memberData)
        }).then(res => res.json()).then(data => {
            
            if(data.insertedId){
                console.log(data, data.insertedId)
              toast("✅ Member Added Successfully")
            }
        }).catch(err => {
          console.log(err);
          toast("Something went wrong!")
        })
        } else{
            toast("Code is incorrect.")
        }
    
      
      };
    
    return (
        <div>
            <PageMeta
                title="Admin Panel | Mukto Patahgar"
                description="This is Admin Panel Form Elements  Dashboard page for TailAdmin - Admin Panel Tailwind CSS Admin Dashboard Template"
            />
            <PageBreadcrumb pageTitle="Add Members" />
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <div className="space-y-6">
                   <MemberInput
                        name={name}
                        setName={setName}
                        designation={designation}
                        setType={setType}
                        setDesignation={setDesignation}
                        mobile={mobile}
                        email={email}
                        setMobile={setMobile}
                        facebook={facebook}
                        setFacebook={setFacebook}
                        instagram={instagram}
                        setInstagram={setInstagram}
                        details={details}
                        setDetails={setDetails}
                        handleSubmit={handleSubmit}
                        setEmail={setEmail}
                        secretCode={secretCode}
                        setSecretCode={setSecretCode}
                        />


                </div>
                <div className="space-y-6">

                    <DropzoneComponent title="Member Image"  picture={picture} setPicture={setPicture} />
                </div>
            </div>
        </div>
    );
}
