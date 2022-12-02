function ISR({ tarefas }) {
    return (
        <div style={{ padding: '20px' }}>            
            <h1>Criptos</h1>
            {tarefas.length === 0 &&
                <h1>Nenhuma moeda encontrada</h1>}
            {tarefas.length > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Código</th>
                            <th scope="col">Simbolo</th>
                            <th scope="col">Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tarefas.map(objeto => (
                            <tr key={objeto.id}>
                                <td>{objeto.id}</td>
                                <td>{objeto.symbol}</td>
                                <td>{objeto.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default ISR;

export async function getStaticProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);
    const tarefas = await res.json();

    return {
        props: {
            tarefas
        }, revalidate :30
    }
}