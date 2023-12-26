import { ChangeEvent, useEffect, useState } from "react";
import { Container } from "../../Components/Container";
import { TextInput } from "../../Components/TextInput";
import { Button } from "../../Components/Button";
import { api } from "../../Helpers/api";
import { notifyErrors } from "../../Helpers/errorHandler";
import { toast } from "react-toastify";
import { Product } from "../../Models/Product";
import { Table } from "../../Components/Table";

export const Products = () => {
  const [productData, setProductData] = useState(new Product());
  const [dataTable, setDataTable] = useState<Product[]>([]);
  const [editing, setEditing] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProductData({ ...productData, [event.target.name]: event.target.value });
  };

  const create = async () => {
    await api
      .post("/product", productData)
      .then(() => {
        toast.success("Produto cadastrado com sucesso");
        setProductData(new Product());
        readAll();
      })
      .catch((res) => notifyErrors(res));
  };

  const readAll = () => {
    api.get("/product").then((res) => setDataTable(res.data));
  };

  const deleteProduct = (id: number) => {
    api
      .delete("/product", {
        params: {
          id,
        },
      })
      .then(() => {
        toast.success("Produto removido com sucesso");
        readAll();
      })
      .catch(() => toast.error("Erro ao tentar remover o produto"));
  };

  const update = (id: number) => {
    const product = dataTable.find((row) => row.id == id);
    setEditing(true);
    if (product) {
      setProductData(product);
    }
  };

  const saveUpdate = () => {
    api
      .put("/product", productData)
      .then(() => {
        toast.success("Produto alterado com sucesso");
        setEditing(false);
        setProductData(new Product());
        readAll();
      })
      .catch(() => toast.error("Erro ao tentar alterar o produto"));
  };

  useEffect(() => readAll(), []);

  return (
    <main className="flex flex-col gap-2">
      <Container title="Cadastrar produtos">
        <div className="flex gap-2 flex-wrap">
          <TextInput
            label="Nome"
            name="name"
            value={productData.name}
            onChange={handleChange}
          />
          <TextInput
            label="Categoria"
            name="category"
            value={productData.category}
            onChange={handleChange}
          />
          <TextInput
            label="Subcategoria"
            name="subcategory"
            value={productData.subcategory}
            onChange={handleChange}
          />
          <TextInput
            label="Marca"
            name="brand"
            value={productData.brand}
            onChange={handleChange}
          />
          <TextInput
            label="Modelo"
            name="model"
            value={productData.model}
            onChange={handleChange}
          />
          <TextInput
            label="Estoque mínimo"
            name="minimumStock"
            value={productData.minimumStock}
            onChange={handleChange}
            type="number"
            min={0}
          />
        </div>
        <div className="mt-2">
          <Button label="Salvar" onClick={editing ? saveUpdate : create} />
        </div>
      </Container>
      <Container title="Produtos cadastrados">
        <Table
          columnNames={[
            "ID",
            "Nome",
            "Categoria",
            "Subcategoria",
            "Marca",
            "Modelo",
            "Estoque",
          ]}
          dataKeys={[
            "id",
            "name",
            "category",
            "subcategory",
            "brand",
            "model",
            "quantityInStock",
          ]}
          data={dataTable}
          actions={["edit", "delete"]}
          onDelete={(e) => deleteProduct(e)}
          onEdit={(e) => update(e)}
        />
      </Container>
    </main>
  );
};
