import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignInForm from "../../components/auth/SignInForm";

export default function SignIn() {
  return (
    <>
      <PageMeta
        title="Admin Panel SignIn Dashboard | MUKTO PATHAGAR"
        description="This is Admin Panel SignIn Tables Dashboard page for TailAdmin - Admin Panel Tailwind CSS Admin Dashboard Template"
      />
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </>
  );
}
