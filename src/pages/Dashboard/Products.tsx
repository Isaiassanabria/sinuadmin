import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Table from "../../components/Table";
import Modal from "../../components/modal/Modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PRODUCTS_HEADER_TABLE } from "../../utils/constants/table";
import { addProduct, getProducts } from "../../services/all.service";
import { productSchema, TProductSchema } from "../../schemas/product.schema";
import { Link } from "react-router-dom";

const Products: React.FC = () => {
  const [products, setProducts] = useState<TProductSchema[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TProductSchema>({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = (data: TProductSchema) => {
    console.log(data);
    const updatedProducts = addProduct(data);
    setProducts(updatedProducts);
    return toast.success("Producto agregado correctamente");
  };

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  console.log(errors);
  return (
    <section className="h-screen">
      <Toaster />
      <Table
        title="Mis productos"
        description="Esta es tu lista de productos registrados"
        header={PRODUCTS_HEADER_TABLE}
      >
        {products.map((product, index) => (
          <tr key={index} className={`${index % 2 === 1 ? "bg-gray-50" : ""}`}>
            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
              {product.name}
            </td>
            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
              {product.description}
            </td>
            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
              {product.price}
            </td>
            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
              {product.stock}
            </td>
            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
              <Link
                to={`/dashboard/products/${product.id}`}
                className="text-yellow-900 underline mr-2"
              >
                Modificar
              </Link>
            </td>
          </tr>
        ))}
      </Table>

      <Modal titleBtn="Agregar Producto" header="Productos" isForm={true}>
        <form className="my-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="name">Nombre</label>
            <input
              {...register("name")}
              className="w-full p-2 border rounded"
              placeholder="Nombre del producto"
            />
            <p className="text-red-500 text-xs italic">
              {errors.name?.message}
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="description">Descripción</label>
            <input
              {...register("description")}
              className="w-full p-2 border rounded"
              placeholder="Descripción del producto"
            />
            <p className="text-red-500 text-xs italic">
              {errors.description?.message}
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="image">Imagen</label>
            <input
              {...register("image")}
              className="w-full p-2 border rounded"
              placeholder="URL de la imagen"
            />
            <p className="text-red-500 text-xs italic">
              {errors.image?.message}
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="price">Precio</label>
            <input
              type="number"
              {...register("price", { valueAsNumber: true })}
              className="w-full p-2 border rounded"
              placeholder="Precio del producto"
            />
            <p className="text-red-500 text-xs italic">
              {errors.price?.message}
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="stock">Stock</label>
            <input
              type="number"
              {...register("stock", { valueAsNumber: true })}
              className="w-full p-2 border rounded"
              placeholder="Stock del producto"
            />
            <p className="text-red-500 text-xs italic">
              {errors.stock?.message}
            </p>
          </div>
          <button
            type="submit"
            className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-md px-6 py-2 my-6 float-right"
          >
            Agregar
          </button>
        </form>
      </Modal>
    </section>
  );
};

export default Products;
