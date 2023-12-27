import { ChangeEvent, useState } from "react";
import { Container } from "../../Components/Container";
import { TextInput } from "../../Components/TextInput";
import { Supplier } from "../../Models/Supplier";

export const Suppliers = () => {
  const [supplierData, setSupplierData] = useState(new Supplier());

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSupplierData({
      ...supplierData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <main className="flex flex-col gap-2">
      <Container title="Cadastrar fornecedores">
        <div className="flex gap-2 flex-wrap">
          <TextInput
            label="Nome"
            name="name"
            value={supplierData.name}
            onChange={handleChange}
          />
          <TextInput
            label="CNPJ"
            name="cnpj"
            value={supplierData.cnpj}
            onChange={handleChange}
            maskPattern={/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/}
            maskPosition="$1.$2.$3/$4-$5"
            maxLength={18}
          />
        </div>
      </Container>
    </main>
  );
};
