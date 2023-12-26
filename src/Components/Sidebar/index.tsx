import { SidebarItem } from "../SidebarItem";

export const Sidebar = () => {
  return (
    <aside className="bg-blue-200 rounded p-2 w-48 flex flex-col gap-2 bottom-2 left-2 top-16 fixed">
      <SidebarItem title="Cadastros" items={["Produtos", "Fornecedores"]} />
    </aside>
  );
};
