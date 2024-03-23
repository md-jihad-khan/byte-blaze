import Nav from "./components/Nav";
import Blogs from "./pages/Blogs";
import Bookmarks from "./pages/Bookmarks";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="h-16">
        <Nav></Nav>
      </div>
      <Home></Home>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
    </>
  );
}

export default App;
