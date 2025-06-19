import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import DropzoneComponent from "../../components/form/form-elements/DropZone";

import PageMeta from "../../components/common/PageMeta";
import EventInput from "../../components/form/form-elements/EventInput";

export default function AddEvent() {
    return (
        <div>
            <PageMeta
                title="Admin Panel | Mukto Patahgar"
                description="This is Admin Panel Form Elements  Dashboard page for TailAdmin - Admin Panel Tailwind CSS Admin Dashboard Template"
            />
            <PageBreadcrumb pageTitle="Add Event" />
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <div className="space-y-6">
                    <EventInput />

                </div>
                <div className="space-y-6">

                    <DropzoneComponent title="Event Image" picture={""} setPicture={function (): void {
                        throw new Error("Function not implemented.");
                    } } />
                </div>
            </div>
        </div>
    );
}
