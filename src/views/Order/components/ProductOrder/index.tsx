import { Button, Container, Item, Span, Wrapper } from "./styles";
import { CgMathMinus, CgMathPlus } from "react-icons/Cg";

export type ProductOrderProps = {
  quantity: number;
  name: string;
  total: number;
};

export function ProductOrderList() {
  return (
    <Container>
      <Item flexGrow={1}>
        <Span>Nome</Span>
      </Item>
      <Item flexGrow={0}>
        <Span>Preço</Span>
      </Item>
      <Item flexGrow={0}>
        <Button>
          <span>
            <CgMathPlus />
          </span>
        </Button>
      </Item>
      <Item flexGrow={0}>
        <Button>
          <span>
            <CgMathMinus />
          </span>
        </Button>
      </Item>
    </Container>
  );
}

export default function ProductOrder({
  quantity,
  name,
  total,
}: ProductOrderProps) {
  return (
    <Container>
      <Item flexGrow={1}>{quantity}</Item>
      <Item flexGrow={6}>{name}</Item>
      <Item flexGrow={0}>{total}</Item>
    </Container>
  );
}
