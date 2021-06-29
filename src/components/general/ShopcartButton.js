
import { FiShoppingCart } from 'react-icons/fi'
import styled from 'styled-components'

export default function ShopcartButton(){
    return (
        <Shopcart>
            <FiShoppingCart />
        </Shopcart>
    )
}

const Shopcart = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #DBE6FD;
    font-size: 20px;
    border-style: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
`