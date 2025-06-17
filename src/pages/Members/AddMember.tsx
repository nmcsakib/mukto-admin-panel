import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import DropzoneComponent from "../../components/form/form-elements/DropZone";

import PageMeta from "../../components/common/PageMeta";
import MemberInput from "../../components/form/form-elements/MemberInput";

export default function AddMember() {
    return (
        <div>
            <PageMeta
                title="Admin Panel | Mukto Patahgar"
                description="This is Admin Panel Form Elements  Dashboard page for TailAdmin - Admin Panel Tailwind CSS Admin Dashboard Template"
            />
            <PageBreadcrumb pageTitle="Add Members" />
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <div className="space-y-6">
                    <MemberInput />

                </div>
                <div className="space-y-6">

                    <DropzoneComponent title="Member Image" />
                </div>
            </div>
        </div>
    );
}
