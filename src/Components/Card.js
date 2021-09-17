import React from "react";
import styled from "styled-components";

const ContainerCard = styled.div `
    border: 1px solid black;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        margin-bottom: -5px;
    }

    button {
        margin-bottom: 5px;
    }
`

function Card(props) {
    const product = [
        {
            id: 1,
            name: "Moletom Espacial - Kids",
            value: 75.0,
            imageUrl: "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/KIDS-11-SPACEDUIT-ONESIE-INFANT-ONESIE-WHITE-GREY-FRONT_300x.png?v=1631644276"
        },
        {   
            id: 2,
            name: "Falcon F9 Camiseta - Feminino",
            value: 30.0,
            imageUrl: "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/WOMENS-F9-T-SHIRT-CHARCOAL-BACKcopy_300x.png?v=1631678515"
        },
        {
            id: 3,
            name: "Starship Camiseta - Feminino",
            value: 45.0,
            imageUrl: "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/WOMENS-CREW-DRAGON-SCHEMATIC-T-SHIRT-GRAY-BACK_300x.png?v=1631678337"
        },
        {
            id: 4,
            name: "Ocupando Marte Camiseta - Masculino",
            value: 35.0,
            imageUrl: "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/MENS-oocupymars-black-FRONT_300x.png?v=1631725808"
        },
        {
            id: 5,
            name: "Equipe Nasa Camiseta - Masculino",
            value: 50.0,
            imageUrl: "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/MENS-CREW1-MISSION-TSHIRT-BLACK-BACK_300x.png?v=1631679231"
        },
        {
            id: 6,
            name: "Projeto Nave - Kids",
            value: 30.0,
            imageUrl: "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/KIDS-6-FALCON-1-T-SHIRT-CHARCOAL-BACK_300x.png?v=1631676603"
        }
    ]

    return (
            <ContainerCard>
                <div>
                    <img src={props.product.imageUrl} alt={props.product.name}/>
                </div>
                <h3>{props.product.name}</h3>
                <p>R$ {props.product.value},00</p>
                <button  onClick={() => props.addToCart(props.product.id)}>Adicionar ao carrinho</button>
            </ContainerCard>
    )
}

export default Card