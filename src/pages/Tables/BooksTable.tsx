import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import BooksTableData from "../../components/tables/BasicTables/BooksTableData";

export default function BooksTable() {
  return (
    <>
      <PageMeta
        title="Admin Panel Basic Tables Dashboard | MUKTO PATHAGAR"
        description="This is Admin Panel Basic Tables Dashboard page for TailAdmin - Admin Panel Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="All Books" />
      <div className="space-y-6">
        <ComponentCard title="Book list">
          <BooksTableData />
        </ComponentCard>
      </div>
    </>
  );
}
