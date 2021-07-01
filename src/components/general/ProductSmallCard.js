import styled from "styled-components";
import ShopcartButton from "./ShopcartButton";

export default function ProductSmallCard({ product }) {
  const { id, name, image, price } = product;

  return (
    <CardContainer>
      <StyledImage src={`https://toyscamp.herokuapp.com/${image}`} />
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <div>
          <div className="price_tag">
            <span>R$ {(price / 100).toFixed(2).replace(".", ",")}</span>
            <span>
              Até 12x de R$ {(price / 1200).toFixed(2).replace(".", ",")} sem
              juros
            </span>
          </div>
          <ShopcartButton productId={id} />
        </div>
      </ProductInfo>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  width: 96%;
  margin: 10px auto;
  background-color: #fff;
`;
const StyledImage = styled.img`
  width: 28%;
  object-fit: cover;
  background-color: red;
`;
const ProductInfo = styled.div`
  width: 72%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  div {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 21px;
    font-weight: 700;
  }
  .price_tag {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    span:last-child {
      font-size: 16px;
      font-weight: 400;
      margin-top: 5px;
      letter-spacing: -0.6px;
    }
  }
`;
const ProductName = styled.span`
  font-weight: 700;
  margin: 15px 0;
  font-size: 28px;
  color: #000;
`;
