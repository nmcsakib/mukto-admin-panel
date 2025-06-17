import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import MembersTableData from "../../components/tables/BasicTables/MembersTableData";

export default function BasicTables() {
  return (
    <>
      <PageMeta
        title="Admin Panel Basic Tables Dashboard | MUKTO PATHAGAR"
        description="This is Admin Panel Basic Tables Dashboard page for TailAdmin - Admin Panel Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Basic Tables" />
      <div className="space-y-6">
        <ComponentCard title="Basic Table 1">
          <MembersTableData />
        </ComponentCard>
      </div>
    </>
  );
}
