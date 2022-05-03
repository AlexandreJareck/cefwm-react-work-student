import { FormEvent, useState } from "react";
import ReactModal from "react-modal";
import { useProducts } from "../../../../hooks/useProducts";
import { Form } from "./styles";

interface ProductModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function ProductModal({ isOpen, onRequestClose }: ProductModalProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const { createProduct } = useProducts();

  function clear() {
    setName("");
    setPrice(0);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();


    await createProduct({
      nome: name,
      preco: price,
      descricao: name
    })

    clear();
    onRequestClose();
  }

  return (
    <ReactModal
      className={"modal-content"}
      overlayClassName={"modal-overlay"}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <button onClick={onRequestClose} className={"modal-close"}>
        <span className="fa fa-close"></span>
      </button>
      <Form onSubmit={handleSubmit}>
        <h2>Cadastro de produto</h2>
        <input
          type="text"
          name=""
          id=""
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          name=""
          id=""
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <button type="submit">Salvar</button>
      </Form>
    </ReactModal>
  );
}

export default ProductModal;
