import styled from 'styled-components';
import axios from 'axios'
import Menu from './Menu';
import { useState, useEffect } from 'react';


function Home(props) {
    let { cidade, sigla, texto, temperaturaMinima, temperaturaMaxima, data, imagem } = props
    return (
        <>
            <Container>
                <h1>{cidade}-{sigla}</h1>
                <h2>{data}</h2>
                <img src={imagem} alt='' />
                <h3>{texto}</h3>
                <h2 className='cidade'>{temperaturaMinima}°C/{temperaturaMaxima}°C</h2>
            </Container>
        </>
    )
}
export default function PaginaHome() {
    function pesquisar() {
        const requisicao = axios.get(`http://localhost:5000/?cidade=${pesquisaCidade}`)

        requisicao.then(resposta => setInformacoesPesquisa(resposta.data))
    }
    const [pesquisaCidade, setPesquisaCidade] = useState('Brasília')
    const [informacoesPesquisa, setInformacoesPesquisa] = useState({})


    useEffect(pesquisar, [pesquisaCidade])


    let arrayTexto = ''
    if (informacoesPesquisa.texto) {
        const textoCidade = informacoesPesquisa.texto
        arrayTexto = textoCidade.split(' ');
    }
    return (
        <>

            <Menu pesquisaCidade={pesquisaCidade} setPesquisaCidade={setPesquisaCidade} pesquisarCidade={pesquisar} />
            {
                (arrayTexto.includes('tempestade') || arrayTexto.includes('Tempestade') || arrayTexto.includes('chuva') || arrayTexto.includes('Chuva')) ?
                    <Pagina>
                        <Home
                            cidade={informacoesPesquisa.cidade} sigla={informacoesPesquisa.sigla} texto={informacoesPesquisa.texto}
                            temperaturaMinima={informacoesPesquisa.temperaturaMinima} temperaturaMaxima={informacoesPesquisa.temperaturaMaxima}
                            data={informacoesPesquisa.data} imagem={'chuva.png'}
                        />
                    </Pagina>
                    :
                    <Pagina>
                        <Home
                            cidade={informacoesPesquisa.cidade} sigla={informacoesPesquisa.sigla} texto={informacoesPesquisa.texto}
                            temperaturaMinima={informacoesPesquisa.temperaturaMinima} temperaturaMaxima={informacoesPesquisa.temperaturaMaxima}
                            data={informacoesPesquisa.data} imagem={'sol.png'}
                        />
                    </Pagina>
            }
        </>

    )
}
const Pagina = styled.div`
display:flex;
justify-content: center;
align-items: center;
`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #6495ED;
width: 30%;
height: 650px;
border-radius: 10px;
margin-top: 160px;

h1{
    font-family: 'Quintessential';
    font-size: 50px;
    margin-top: 30px;
    color: white;
}
h2{
    font-family: 'Zen Kaku Gothic New';
    font-size: 25px;
    color: white;
    margin-top: 25px;
}
h3{
    margin-top: 30px;
    font-family: 'Zen Kaku Gothic New';
    font-size: 20px;
    color: white;
    text-align: center
}
img{
  margin-top: 40px; 
  border-radius: 100%;
  overflow: hidden;
  height: 196px;
  width:37%;
  margin-top: 40px;
  
}
`

