import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <main className="flex">
      <div className="w-1/5 fixed top-0 left-0 shadow-xl">
        <Sidebar />
      </div>
      <div className="w-4/5 fixed top-0 right-0">
        {children}
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
