const Footer = () => {
    return <>
        <footer className="page-footer green lighten-4">
            <div className="footer-copyright">
                <div className="container">
                    {new Date().getFullYear()} Copyright text
                    <a className="grey-text text-lighten-4 right" href="!#">repo</a>
                </div>
            </div>
        </footer>
    </>
}

export { Footer }