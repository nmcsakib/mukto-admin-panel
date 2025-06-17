import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import MembersTable from "./pages/Tables/MembersTable";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import AddBook from "./pages/Books/AddBook";
import AllMembers from "./pages/Members/AllMembers";
import AllBooks from "./pages/Books/AllBooks";
import AddMember from "./pages/Members/AddMember";
import AddEvent from "./pages/Events/AddEvent";
import AddTestimonial from "./pages/Testimonial/AddTestimonial";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/Add-Book" element={<AddBook />} />
            <Route path="/All-Books" element={<AllBooks />} />
            <Route path="/Add-Member" element={<AddMember />} />
            <Route path="/Add-Event" element={<AddEvent />} />
            <Route path="/Add-Testimonial" element={<AddTestimonial />} />
            <Route path="/All-Members" element={<AllMembers />} />
            <Route path="/basic-tables" element={<MembersTable />} />

          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
