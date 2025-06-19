import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import DropzoneComponent from "../../components/form/form-elements/DropZone";

import PageMeta from "../../components/common/PageMeta";
import TestimonialInput from "../../components/form/form-elements/TestimonialInput";

export default function AddTestimonial() {
    return (
        <div>
            <PageMeta
                title="Admin Panel | Mukto Patahgar"
                description="This is Admin Panel Form Elements  Dashboard page for TailAdmin - Admin Panel Tailwind CSS Admin Dashboard Template"
            />
            <PageBreadcrumb pageTitle="Add Testimonial" />
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <div className="space-y-6">
                    <TestimonialInput />

                </div>
                <div className="space-y-6">

                    <DropzoneComponent title="Image" picture={""} setPicture={function (): void {
                        throw new Error("Function not implemented.");
                    } } />
                </div>
            </div>
        </div>
    );
}
