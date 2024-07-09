import Aside from "../../components/dashboard/Aside";
import Navbar from "../../components/dashboard/Navbar";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Navbar />
      <div className="flex overflow-hidden bg-white pt-16">
        <Aside />
        <div
          className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
          id="sidebarBackdrop"
        ></div>
        <div
          id="main-content"
          className="h-screen w-full bg-yellow-600 relative overflow-y-auto lg:ml-64"
        >
          {children}
        </div>
      </div>
      <script async defer src="https://buttons.github.io/buttons.js"></script>
      <script src="https://demo.themesberg.com/windster/app.bundle.js"></script>
    </section>
  );
};

export default Dashboard;
