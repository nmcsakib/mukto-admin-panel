import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ResponsiveImage from "../../components/ui/images/ResponsiveImage";
import TwoColumnImageGrid from "../../components/ui/images/TwoColumnImageGrid";
import ThreeColumnImageGrid from "../../components/ui/images/ThreeColumnImageGrid";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";

export default function Images() {
  return (
    <>
      <PageMeta
        title="Admin Panel Images Dashboard | TailAdmin - Admin Panel Admin Dashboard Template"
        description="This is Admin Panel Images page for TailAdmin - Admin Panel Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Images" />
      <div className="space-y-5 sm:space-y-6">
        <ComponentCard title="Responsive image">
          <ResponsiveImage />
        </ComponentCard>
        <ComponentCard title="Image in 2 Grid">
          <TwoColumnImageGrid />
        </ComponentCard>
        <ComponentCard title="Image in 3 Grid">
          <ThreeColumnImageGrid />
        </ComponentCard>
      </div>
    </>
  );
}
