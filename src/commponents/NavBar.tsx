function NavBar({ onClick, path }) {
    return (
        <nav>
            <h1>AlgoZen</h1>
            <button onClick={onClick} className={path === 'playground' ? 'selected' : ''}>
                Playground
            </button>
            <button style={{ marginLeft: 10 }}>
                Charts
            </button>
        </nav>
    )
}

export default NavBar