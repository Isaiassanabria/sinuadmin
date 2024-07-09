import { useEffect, useState } from "react";
import { getSales } from "../../services/all.service";
import Table from "../../components/Table";
import { SALES_HEADER_TABLE } from "../../utils/constants/table";
import { TSaleSchema } from "../../schemas/sale.schema";

const Sales: React.FC = () => {
  const [sales, setSales] = useState<Array<TSaleSchema>>([]);
  const [amount, setAmount] = useState<number>(0);

  useEffect(() => {
    const sls = getSales();
    setSales(sls.data);
    setAmount(sls.amount);
  }, []);

  return (
    <section className="h-screen">
      <Table
        title="Mis ventas"
        description="Esta es tu lista de tus ventas registradas"
        header={SALES_HEADER_TABLE}
      >
        {sales &&
          sales.map((sale, index) => (
            <tr
              key={sale.id}
              className={`${index % 2 == 1 ? "bg-gray-50" : null}`}
            >
              <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                {sale.id}
              </td>
              <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                {new Date(sale.date).toLocaleString()}
              </td>
              <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                {sale.total}
              </td>
            </tr>
          ))}
        <div className="p-2 bg-gray-800 whitespace-nowrap text-sm w-full font-normal text-white">
          <strong>Total: {amount}</strong>
        </div>
      </Table>
    </section>
  );
};

export default Sales;
