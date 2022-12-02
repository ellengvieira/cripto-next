import { useState, useEffect } from "react";

function CSR() {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}`)
            .then(response => response.json())
            .then(json => setLista(json))
    }, []);

    return (
        <div style={{ padding: '20px' }}>            
            <h1>Criptos</h1>
            {lista.length === 0 &&
                <h1>Nenhuma moeda encontrada</h1>}
            {lista.length > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Código</th>
                            <th scope="col">Simbolo</th>
                            <th scope="col">Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lista.map(objeto => (
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

export default CSR;