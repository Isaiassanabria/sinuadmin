interface ITable {
  children?: React.ReactNode;
  title: string;
  description: string;
  header: string[];
}

const Table = ({ children, title, description, header }: ITable) => {
  return (
    <div className="bg-white shadow rounded-lg m-4 p-4 sm:p-6 xl:p-8 ">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <span className="text-base font-normal text-gray-500">
            {description}
          </span>
        </div>
        <div className="flex-shrink-0">
          <a
            href="#"
            className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
          >
            Ver todos
          </a>
        </div>
      </div>
      <div className="flex flex-col mt-8">
        <div className="overflow-x-auto rounded-lg">
          <div className="align-middle inline-block min-w-full">
            <div className="shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {header.map((header, index) => (
                      <th
                        key={index}
                        scope="col"
                        className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {children ? children : <tr>Tabla sin datos</tr>}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
