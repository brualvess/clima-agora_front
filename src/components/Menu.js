import styled from 'styled-components';


export default function Menu() {
    return (
        <>
            <Topo>

                <h1>Clima agora</h1>
                <ion-icon className='iconeLogo' name="partly-sunny"></ion-icon>
                <input type='cidade' placeholder="Digite uma cidade"></input>
                <ion-icon name="search"></ion-icon>
                <ion-icon className='favoritos' name="bookmarks"></ion-icon>


            </Topo>
        </>

    )
}
const Topo = styled.div`
display: flex;
justify-content: center;
background-color: black;
width: 100%;
height: 60px;

input{
width: 20%;
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
}

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


