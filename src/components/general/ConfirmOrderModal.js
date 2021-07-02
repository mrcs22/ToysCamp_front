import styled from "styled-components"

export default function ConfirmOrderModal({shopcart, total, confirmModalIsOpen, toggleConfirmModal}){

    return(
        <>
            <Container isOpen={confirmModalIsOpen}>
                <p>Confirme seu pedido.</p>
                <ul>
                    <li>
                        <div>
                            <span>2x</span>
                            Testando
                        </div>
                        <p>R$ 300,00</p>
                    </li>
                    <li>
                        <div>
                            <span>2x</span>
                            Testando
                        </div>
                        <p>R$ 300,00</p>
                    </li>
                    <li>
                        <div>
                            <span>2x</span>
                            Testando
                        </div>
                        <p>R$ 300,00</p>
                    </li>
                    <li>
                        <div>
                            <span>2x</span>
                            Testando
                        </div>
                        <p>R$ 300,00</p>
                    </li>
                    <li>
                        <div>
                            <span>2x</span>
                            Testando
                        </div>
                        <p>R$ 300,00</p>
                    </li>
                    {/* {shopcart.map((item, i) => (
                        <li key={i}>
                        <div>
                            <span>{item.count}x</span>
                            {item.name}
                        </div>
                        <p>R${(item.price / 100).toFixed(2)}</p>
                        </li>
                    ))} */}
                </ul>
                <p className="price">Total: R${(total / 100).toFixed(2).replace(".",",")}</p>
                <div className="buttons_container">
                    <button className="confirm_button">Confirmar</button>
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