import { Container } from "./styles";
import { api } from "../../services/api";
import { useEffect } from "react";

export function TransactionsTable(){

    useEffect(()=>{
        api.get('transactions')
        .then(response => console.log(response.data))
      }, [])
    
    return(
        <Container>

            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de web site</td>
                        <td className="deposit">R$12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>Data</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-R$1.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>Data</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de web site</td>
                        <td>R$12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>Data</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}