import { ChangeEvent, useState } from "react";
import { Container } from "../../Components/Container";
import { TextInput } from "../../Components/TextInput";
import { Supplier } from "../../Models/Supplier";
import { Button } from "../../Components/Button";

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
          <TextInput
            label="Endereço"
            name="address"
            value={supplierData.address}
            onChange={handleChange}
          />
          <TextInput
            label="Cidade"
            name="city"
            value={supplierData.city}
            onChange={handleChange}
          />
          <TextInput
            label="Estado"
            name="state"
            value={supplierData.state}
            onChange={handleChange}
          />
          <TextInput
            label="Pais"
            name="country"
            value={supplierData.country}
            onChange={handleChange}
          />
          <TextInput
            label="Telefone"
            name="phone"
            value={supplierData.phone}
            onChange={handleChange}
          />
          <TextInput
            label="E-mail"
            name="email"
            type="email"
            value={supplierData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mt-2 flex gap-2">
          <Button label="Salvar" />
        </div>
      </Container>
    </main>
  );
};
