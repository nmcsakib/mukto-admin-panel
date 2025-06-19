import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import BookInputs from "../../components/form/form-elements/BookInput";
import InputGroup from "../../components/form/form-elements/InputGroup";
import CheckboxComponents from "../../components/form/form-elements/CheckboxComponents";
import RadioButtons from "../../components/form/form-elements/RadioButtons";
import ToggleSwitch from "../../components/form/form-elements/ToggleSwitch";
import FileInputExample from "../../components/form/form-elements/FileInputExample";
import SelectInputs from "../../components/form/form-elements/SelectInputs";
import TextAreaInput from "../../components/form/form-elements/TextAreaInput";
import InputStates from "../../components/form/form-elements/InputStates";
import PageMeta from "../../components/common/PageMeta";

export default function FormElements() {
  return (
    <div>
      <PageMeta
        title="Admin Panel Form Elements Dashboard | TailAdmin - Admin Panel Admin Dashboard Template"
        description="This is Admin Panel Form Elements  Dashboard page for TailAdmin - Admin Panel Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="From Elements" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <BookInputs bookName={""} setBookName={function (): void {
            throw new Error("Function not implemented.");
          } } writer={""} setWriter={function (): void {
            throw new Error("Function not implemented.");
          } } publications={""} setPublications={function (): void {
            throw new Error("Function not implemented.");
          } } type={""} setType={function (): void {
            throw new Error("Function not implemented.");
          } } price={""} setPrice={function (): void {
            throw new Error("Function not implemented.");
          } } pages={""} setPages={function (): void {
            throw new Error("Function not implemented.");
          } } details={""} setDetails={function (): void {
            throw new Error("Function not implemented.");
          } } secretCode={""} setSecretCode={function (): void {
            throw new Error("Function not implemented.");
          } } handleSubmit={function (): void {
            throw new Error("Function not implemented.");
          } } />
          <SelectInputs />
          <TextAreaInput />
          <InputStates />
        </div>
        <div className="space-y-6">
          <InputGroup />
          <FileInputExample />
          <CheckboxComponents />
          <RadioButtons />
          <ToggleSwitch />
        </div>
      </div>
    </div>
  );
}
