import styled from 'styled-components';
import Menu from './Menu';

export default function PaginaHome() {
    return (
        <>
        <Menu/>
        <Pagina>
            <Container>
                <h1>Brasília-DF</h1>
                <h2>Sábado, 22 de outubro de 2022</h2>
                <Imagem></Imagem>
                <h3>Nublado</h3>
                <h2 className='cidade'>22°C/23°C</h2>
            </Container>
            </Pagina>
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
    font-size: 50px;
    color: white;
}

`
const Imagem = styled.div`
    border-radius: 100%;
    overflow: hidden;
    height: 190px;
    width:35%;
    background: white;
    margin-top: 40px;

`
