import { useFormik } from 'formik';
import { Product as ProductType, ProductSchema } from './ProductSchema';

export const Product = () => {
  const productForm = useFormik<ProductType>({
    initialValues: {
      productName: '',
      price: '',
      isbn: '',
      category: '',
      description: '',
      inventory: [
        {
          location: '',
          quantity: '',
        },
      ],
    },
    validationSchema: ProductSchema,
    onSubmit: (values) => {
      console.log('hello');
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <form onSubmit={productForm.handleSubmit}>
          <section className="py-4">
            <h1 className="text-base font-semibold text-zinc-800">Product Details</h1>
            <div className="grid gap-4 md:grid-cols-3 grid-cols-1 py-2">
              <div className="flex flex-col gap-2">
                <div>
                  <label htmlFor="productName" className="block text-xs font-medium text-gray-700">
                    Product Name
                  </label>

                  <input
                    type="text"
                    id="productName"
                    name="productName"
                    onChange={productForm.handleChange}
                    value={productForm.values.productName}
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                  {productForm.touched.productName && productForm.errors.productName ? (
                    <div className="text-sm text-red-500">{productForm.errors.productName}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="price" className="block text-xs font-medium text-gray-700">
                    Price
                  </label>

                  <input
                    type="number"
                    id="price"
                    name="price"
                    onChange={productForm.handleChange}
                    value={productForm.values.price}
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                  {productForm.touched.price && productForm.errors.price ? (
                    <div className="text-sm text-red-500">{productForm.errors.price}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="isbn" className="block text-xs font-medium text-gray-700">
                    ISBN#(Optional)
                  </label>

                  <input
                    type="number"
                    id="isbn"
                    name="isbn"
                    onChange={productForm.handleChange}
                    value={productForm.values.isbn}
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <label htmlFor="category" className="block text-xs font-medium text-gray-700">
                    Category(Optional)
                  </label>

                  <input
                    type="text"
                    id="category"
                    name="category"
                    onChange={productForm.handleChange}
                    value={productForm.values.category}
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-xs font-medium text-gray-700">
                    Product Description(Optional)
                  </label>

                  <textarea
                    id="description"
                    name="description"
                    onChange={productForm.handleChange}
                    value={productForm.values.description}
                    className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                    rows={4}
                    placeholder="Enter the description of product"
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <label htmlFor="upload" className="block text-xs font-medium text-gray-700">
                    Product Images
                  </label>

                  <input
                    type="file"
                    id="upload"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="py-4">
            <h1 className="text-base font-semibold text-zinc-800">Inventory Details</h1>
            <div className="py-2">
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                  <thead className="ltr:text-left rtl:text-right">
                    <tr>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Location</th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Quantity</th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">...</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="whitespace-nowrap px-4 py-2">
                        <input
                          type="text"
                          id="location"
                          name="location"
                          onChange={productForm.handleChange}
                          value={productForm.values.productName}
                          className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                        />
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <input
                          type="number"
                          id="quantity"
                          name="quantity"
                          onChange={productForm.handleChange}
                          value={productForm.values.productName}
                          className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                        />
                      </td>
                      <td className="whitespace-nowrap px-4 py-2">
                        <a
                          href="#"
                          className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-red-100 hover:bg-red-700"
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <section className="flex items-center gap-2">
            <button
              type="submit"
              className="rounded border border-zinc-600 bg-zinc-600 px-8 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-zinc-600 focus:outline-none focus:ring active:text-zinc-500"
            >
              Add
            </button>
            <button className="rounded border border-zinc-600 px-8 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-600 hover:text-white focus:outline-none focus:ring active:bg-zinc-500">
              Cancel
            </button>
          </section>
          {!productForm.isValid && JSON.stringify(productForm.errors)}
        </form>
      </div>
    </div>
  );
};
