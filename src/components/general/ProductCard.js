import styled from "styled-components";
import ShopcartButton from "./ShopcartButton";

export default function ProductCard({ product, cartItems, getShopcartItems }) {
  const { id, name, image, price, category } = product;
  const cartItem = cartItems.filter((i) => i.id === id);
  const itemCount = cartItem[0]?.count;

  return (
    <Container>
      <CategoryStrip>
        {category === "Lançamentos" ? "Novidade" : "Desconto"}
      </CategoryStrip>
      <StyledImage src={`https://toyscamp.herokuapp.com${image}`} alt={name} />
      <ProductName>{name}</ProductName>
      <CardFooter>
        <span>R$ {(price / 100).toFixed(2).replace(".", ",")}</span>
        <ShopcartButton
          productId={id}
          itemCount={itemCount}
          getShopcartItems={getShopcartItems}
        />
      </CardFooter>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 260px;
  max-width: 270px;
  height: 500px;
  border-radius: 9px;
  background-color: #fff;
  margin: 0 5px;
  overflow: hidden;
`;

const StyledImage = styled.img`
  border-radius: 9px 9px 0 0;
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

const ProductName = styled.span`
  font-weight: 700;
  margin: 15px 0;
  font-size: 25px;
  color: #000;
`;

const CardFooter = styled.div`
  display: flex;
  font-family: "Saira Stencil One", cursive;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  color: #000;
`;

const CategoryStrip = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: -40px;
  top: 30px;
  width: 200px;
  height: 25px;
  background-color: #293b5f;
  transform: rotateZ(-35deg);
  color: #fff;
  font-size: 20px;
`;
