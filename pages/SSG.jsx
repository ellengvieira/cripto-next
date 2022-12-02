function SSG({ tarefas }) {
    return (
        <div style={{ padding: '20px' }}>            
           <h1>Tarefas</h1>
            {tarefas.length === 0 &&
                <h1>Nenhuma tarefa encontrada</h1>}
            {tarefas.length > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Código</th>
                            <th scope="col">Título</th>
                            <th scope="col">Corpo</th>
                            <th scope="col">Coluna</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tarefas.map(objetoTarefa => (
                            <tr key={objetoTarefa.codigo}>
                                <td>{objetoTarefa.codigo}</td>
                                <td>{objetoTarefa.titulo}</td>
                                <td>{objetoTarefa.corpo}</td>
                                <td>{objetoTarefa.titulocoluna}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default SSG;

export async function getStaticProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_TAREFAS}/tarefas`);
    const tarefas = await res.json();

    return {
        props: {
            tarefas
        }
    }
}