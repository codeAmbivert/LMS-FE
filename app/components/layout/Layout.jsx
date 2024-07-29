import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <main className="flex">
      <div className="hidden lg:block w-1/5 fixed top-0 left-0 shadow-xl">
        <Sidebar />
      </div>
      <div className="w-full lg:w-4/5 fixed top-0 right-0">
        {children}
        {/* <Footer /> */}
      </div>
      <div className="fixed bottom-0 left-0 w-full lg:hidden">
        <Navbar />
      </div>
    </main>
  );
};

export default Layout;
