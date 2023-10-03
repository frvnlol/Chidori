import React from "react";

function Header(props) {
  const { pages = [], setCurrentPage, currentPage } = props;
  return (
    <header className="flex-row space-between px-1">
      <nav>
        <ul>{pages.map((Page) => (
            <li key= {Page.name} onClick= {() => setCurrentPage(Page)}>{Page.name}</li>
        ))}</ul>
      </nav>
      <h1>Hi I'm Francis</h1>
    </header>
  );
}

export default Header;
