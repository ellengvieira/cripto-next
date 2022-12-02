import Link from 'next/link'

const Menu = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <Link className="navbar-brand" aria-current="page" href="/">CRIPTOS</Link>
                    <button variant='primary' mr={2} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link  className="nav-link active" aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link active" aria-current="page" href="/CSR">CSR</Link>
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link active" aria-current="page" href="/SSR">SSR</Link>
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link active" aria-current="page" href="/SSG">SSG - Tarefas </Link>
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link active" aria-current="page" href="/ISR">ISR</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>)
};

export default Menu;