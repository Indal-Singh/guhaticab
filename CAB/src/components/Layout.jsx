import Footer from "./Footer";
import Navbar from "./Navbar";
import Adventure from "./Adventure";
import Hero from "./Hero";
import Explore from "./Explore";
import Popular from "./Popular";

const Layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            <div>{children}</div>
            <Footer />
        </div>
    );
}
export default Layout;