import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import MembersTableData from "../../components/tables/BasicTables/MembersTableData";

export default function MembersTable() {
  return (
    <>
      <PageMeta
        title="Admin Panel Basic Tables Dashboard | MUKTO PATHAGAR"
        description="This is Admin Panel Basic Tables Dashboard page for TailAdmin - Admin Panel Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="All Members" />
      <div className="space-y-6">
        <ComponentCard title="Members list">
          <MembersTableData />
        </ComponentCard>
      </div>
    </>
  );
}
