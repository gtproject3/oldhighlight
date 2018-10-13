import React from "react";
import AuthorCard from "./components/AuthorCard";
import AuthorDetailNav from "./components/AuthorDetailNav";
/*import AuthorForm from "./components/AuthorForm";*/
import HomeNav from "./components/HomeNav";
import SearchPanel from "./components/SearchPanel";

const App = () => (
  <div className="container-fluid mainPage">
  <AuthorDetailNav/>
  <AuthorCard/>
  <HomeNav/>
  {/*<AuthorForm/>*/}
  <SearchPanel/>

    {/* you need to break down each part of the page into a component */ }
    { /* from there, we'll link them as: <Sidebar/> , <NavBar/> etc.*/ }
    { /* ask TA if this is the best way to do it. */} 
  </div>
);

export default App;


