import Header from "../Header/index";
import Footer from "../Footer/index";
import Navigation from "../Navigation/index";
const Layout = ({ children }) => {
  return (
    <div className="content">
      <Header />
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
