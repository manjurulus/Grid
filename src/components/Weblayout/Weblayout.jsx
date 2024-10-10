import "./Weblayout.scss";

const Weblayout = () => {
  return (
    <>
    <div className="container">
        <header className="header">
            <h1>Website Header</h1>
        </header>

        <div className="main-content">
            <section className="body-content">
                <h2>Main Content Area</h2>
                <p>This is the body of the website where the main content goes.</p>
            </section>

            <aside className="sidebar">
                <h2>Sidebar</h2>
                <p>This is the sidebar content, like links or additional info.</p>
            </aside>
        </div>

        <footer className="footer">
            <p>Website Footer</p>
        </footer>
    </div>
      
    </>
  )
}

export default Weblayout
