import { Container, Item } from "./styles";

export type ProductOrderProps = {
  quantity: number;
  name: string;
  total: number;
};
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
