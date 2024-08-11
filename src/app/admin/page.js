import AdminLayout from "./layout";
import AdminDashboard from "../components/AdminDashboard";

export default function HomePage() {
  return (
    <AdminLayout>
      <AdminDashboard />
    </AdminLayout>
  );
}