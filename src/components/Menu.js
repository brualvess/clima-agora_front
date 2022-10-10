import styled from 'styled-components';


export default function Menu(props) {
    let { pesquisaCidade, setPesquisaCidade, pesquisarCidade } = props
    return (
        <>
            <Topo>
                <Logo>
                    <h1>Clima agora</h1>
                    <ion-icon className='iconeLogo' name="partly-sunny"></ion-icon>
                </Logo>
                <PesquisaCidade>
                    <input type='cidade' placeholder="Digite uma cidade"
                        value={pesquisaCidade} onChange={item => setPesquisaCidade(item.target.value)}

                    />
                    <ion-icon name="search" onClick={pesquisarCidade}></ion-icon>
                </PesquisaCidade>
                <ion-icon className='favoritos' name="bookmarks"></ion-icon>


            </Topo>
        </>

    )
}
const Topo = styled.div`
display: flex;
justify-content: center;
justify-content: space-between;
background-color: black;
width: 100%;
height: 60px;



ion-icon{
color: white;
width: 3%;
height: 25px;
margin-top: 18px;

}

h1{
color: white;
font-family: 'Quintessential';
font-size: 25px;
margin-top : 20px
}
`
const Logo = styled.div`
display: flex;
width: 9%;
justify-content: space-between;

ion-icon{
width: 25px;
height: 25px;
margin-top: 18px;
}

`
const PesquisaCidade = styled.div`
display: flex;
justify-content: space-between;

ion-icon{
width: 30px;
height: 30px;
margin-left: 15px;
}

input{
height: 30px;
margin-top: 13px;
border-radius: 5px;
text-align:center;
background: #FFFFFF;
border: 1px solid #D5D5D5;
font-family: 'Zen Kaku Gothic New';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
align-self: center;
}

`


