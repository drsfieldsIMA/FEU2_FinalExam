import Footer from "./Footer"
import Nav from "./Nav"

const Layout = ({ children }) => {
  return (
    <>
      <Nav/>
      <main className="main-wrapper">
      { children }
      </main>
      <footer>
      <Footer/>
      </footer>
    </>
  );
}
 
export default Layout;