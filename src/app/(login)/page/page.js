import PageLayout from "./layout";
import UserDashboard from "./dashboard/page";

export default function HomePage() {
  return (
    <PageLayout>
      <UserDashboard />
    </PageLayout>
  );
}