import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components"
import UserContext from "../../contexts/UserContext";

export default function ConfirmOrderModal({shopcart, total, confirmModalIsOpen, toggleConfirmModal}){
    const { user } = useContext(UserContext);
    const [paymentMethod, setPaymentMethod] = useState("boleto")
    const [buyerCPF, setBuyerCPF] = useState("")

    const confirmOrder = () => {
        const config = {
            headers: {
                Authorization: `Bearer ${user?.token}`,
            },
        };
        const body = {
            cpf: buyerCPF,
            paymentMethod,
        }
        const promise = axios.post(
        "https://toyscamp.herokuapp.com/confirm-order", body, config);
    
        promise.then((res) => {
        });
    
        promise.catch((e) => {
        console.log(e);
        });
    }

    return(
        <>
            <Container isOpen={confirmModalIsOpen}>
                <p>Confirme seu pedido.</p>
                <ul>
                    {shopcart.map((item, i) => (
                        <li key={i}>
                        <div>
                            <span>{item.count}x</span>
                            {item.name}
                        </div>
                        <p>R${(item.price / 100).toFixed(2)}</p>
                        </li>
                    ))}
                </ul>
                <p className="price">Total: R${(total / 100).toFixed(2).replace(".",",")}</p>
                <div className="payment_info">
                    <div>
                        <label for="cpf">CPF:</label>
                        <input 
                        name="cpf" 
                        type="text" 
                        maxLength={11}
                        minLength={11}
                        onChange={(e)=>{setBuyerCPF(e.target.value)}}
                        required/>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id="boleto" 
                            name="payment_method" 
                            value="boleto" 
                            onChange={(e)=>{setPaymentMethod(e.target.value)}}
                            required
                            checked/>
                        <label for="boleto">Boleto</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id="cartão" 
                            name="payment_method" 
                            value="cartão_crédito" 
                            onChange={(e)=>{setPaymentMethod(e.target.value)}}/>
                        <label for="cartão">Cartão de Crédito</label>
                    </div>
                </div>
                <div className="buttons_container">
                    <button className="confirm_button" onClick={confirmOrder}>Confirmar</button>
                    <button className="back_button" onClick={toggleConfirmModal}>Voltar</button>
                </div> 
            </Container>
            <Background isOpen={confirmModalIsOpen}/>
        </>
    )
}

const Container = styled.div`
    background-color: #fff;
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    width: 80%;
    height: fit-content;
    min-height: 200px;
    min-width: 200px;
    max-width: 600px;
    inset: 0px;
    margin: auto;
    z-index: 4;
    font-size: 22px;
    padding: 20px;
    border-radius: 9px;
    & p:first-child, .price{
        font-size: 25px;
        font-weight: 700;
    }
    li{
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        div{      
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-right: 10px;
        }
        span{
            margin-right: 5px;
        }
    }
    & li:first-child{
        margin-top: 20px;
    }
    .price{
        margin-top: 20px;
    }
    .buttons_container{
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    .confirm_button, .back_button {
        width: 100px;
        aspect-ratio: 3 / 1;
        margin-top: 20px;
        border-style: none;
        border-radius: 5px;
        font-size: 17px;
        font-weight: 700;
    }
    .confirm_button{
        background-color: #293B5F;
        color: #fff;
    }
    .payment_info{
        display: flex;
        margin: 0 auto;
        flex-direction: column;
        width: 100%;
        div{
            margin: 10px 0;
            font-size: 19px;
        }
    }
`
const Background = styled.div`
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 3;
    pointer-events: none;
`