import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getProduct, updateProduct } from "../../services/all.service";
import { TProductSchema } from "../../schemas/product.schema";

const EditProducts = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TProductSchema>();

  useEffect(() => {
    const data = getProduct(parseInt(id as string, 10));
    if (data) {
      setValue("name", data.name);
      setValue("description", data.description);
      setValue("image", data.image);
      setValue("price", data.price);
      setValue("stock", data.stock);
      setValue("id", data.id);
    }
  }, [id, setValue]);

  const onSubmit = (data: TProductSchema) => {
    updateProduct(data);
    navigate("/dashboard/products");
  };

  return (
    <div className="p-4 bg-white m-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 my-5 rounded-md">
      <h1 className="text-2xl font-bold mb-4">Editar producto</h1>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre
          </label>
          <input
            {...register("name", { required: "El nombre es obligatorio" })}
            className="w-full p-2 border rounded"
            placeholder="Nombre del producto"
            id="name"
          />
          <p className="text-red-500 text-xs italic">{errors.name?.message}</p>
        </div>
        <div className="mb-3">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Descripción
          </label>
          <input
            {...register("description")}
            className="w-full p-2 border rounded"
            placeholder="Descripción del producto"
            id="description"
          />
          <p className="text-red-500 text-xs italic">
            {errors.description?.message}
          </p>
        </div>
        <div className="mb-3">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Imagen (URL)
          </label>
          <input
            {...register("image")}
            className="w-full p-2 border rounded"
            placeholder="https://example.com/image.jpg"
            id="image"
          />
          <p className="text-red-500 text-xs italic">{errors.image?.message}</p>
        </div>
        <div className="mb-3">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Precio
          </label>
          <input
            type="number"
            {...register("price", {
              valueAsNumber: true,
              required: "El precio es obligatorio",
            })}
            className="w-full p-2 border rounded"
            placeholder="Precio del producto"
            id="price"
          />
          <p className="text-red-500 text-xs italic">{errors.price?.message}</p>
        </div>
        <div className="mb-3">
          <label
            htmlFor="stock"
            className="block text-sm font-medium text-gray-700"
          >
            Stock
          </label>
          <input
            type="number"
            {...register("stock", {
              valueAsNumber: true,
              required: "El stock es obligatorio",
            })}
            className="w-full p-2 border rounded"
            placeholder="Stock del producto"
            id="stock"
          />
          <p className="text-red-500 text-xs italic">{errors.stock?.message}</p>
        </div>
        <button
          type="submit"
          className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-md px-6 py-2"
        >
          Guardar
        </button>
      </form>
    </div>
  );
};

export default EditProducts;
