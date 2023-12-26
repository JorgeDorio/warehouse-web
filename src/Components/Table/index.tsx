import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { ReactNode } from "react";

type action = "open" | "edit" | "delete";

interface ITableProps {
  columnNames: string[];
  dataKeys: string[];
  data: any[];
  actions?: action[];
  onDelete?: (e: any) => void;
  onEdit?: (e: any) => void;
}

interface IActionButtonProps {
  children: ReactNode;
  onClick?: (e: any) => void;
}

const ActionButton = ({ children, onClick }: IActionButtonProps) => {
  return (
    <button onClick={onClick} className="hover:bg-blue-200 rounded-full p-1">
      {children}
    </button>
  );
};

export const Table = ({
  columnNames,
  dataKeys,
  data,
  actions,
  onDelete,
  onEdit,
}: ITableProps) => {
  return (
    <>
      {data.length ? (
        <table className="w-full text-center">
          <thead>
            <tr>
              {columnNames.map((name) => (
                <th key={`${name}-header`}>{name}</th>
              ))}
              {actions?.length ? <th>Ações</th> : null}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-blue-50">
                {dataKeys.map((d: string) => (
                  <td key={`${d}-data`}>{row[d]}</td>
                ))}
                {actions && (
                  <td>
                    {actions.includes("open") && (
                      <ActionButton>
                        <OpenInNewIcon />
                      </ActionButton>
                    )}
                    {actions.includes("edit") && (
                      <ActionButton onClick={() => onEdit?.(row.id)}>
                        <EditIcon />
                      </ActionButton>
                    )}
                    {actions.includes("delete") && (
                      <ActionButton onClick={() => onDelete?.(row.id)}>
                        <DeleteIcon />
                      </ActionButton>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
      {!data.length && <p className="p-2 text-center">Não há dados ainda.</p>}
    </>
  );
};
