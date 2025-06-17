import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import DefaultInputs from "../../components/form/form-elements/BookInput";
import DropzoneComponent from "../../components/form/form-elements/DropZone";

import PageMeta from "../../components/common/PageMeta";

export default function AddBook() {
    return (
        <div>
            <PageMeta
                title="Admin Panel | Mukto Patahgar"
                description="This is Admin Panel Form Elements  Dashboard page for TailAdmin - Admin Panel Tailwind CSS Admin Dashboard Template"
            />
            <PageBreadcrumb pageTitle="Add Books" />
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <div className="space-y-6">
                    <DefaultInputs />

                </div>
                <div className="space-y-6">

                    <DropzoneComponent title="Book Image" />
                </div>
            </div>
        </div>
    );
}
