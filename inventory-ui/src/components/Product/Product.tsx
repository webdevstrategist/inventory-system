export const Product = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <section className="py-4">
          <h1 className="text-base font-semibold text-zinc-800">Product Details</h1>
          <form className="py-4">
            <div className="grid gap-4 md:grid-cols-3 grid-cols-1">
              <div className="flex flex-col gap-2">
                <div>
                  <label htmlFor="productName" className="block text-xs font-medium text-gray-700">
                    Product Name
                  </label>

                  <input
                    type="text"
                    id="productName"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="isbn" className="block text-xs font-medium text-gray-700">
                    ISBN#
                  </label>

                  <input
                    type="text"
                    id="isbn"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="price" className="block text-xs font-medium text-gray-700">
                    Price
                  </label>

                  <input
                    type="number"
                    id="price"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <label htmlFor="category" className="block text-xs font-medium text-gray-700">
                    Category
                  </label>

                  <input
                    type="text"
                    id="category"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-xs font-medium text-gray-700">
                    Product Description
                  </label>

                  <textarea
                    id="description"
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
          </form>
        </section>
        <section className="py-4">
          <h1 className="text-base font-semibold text-zinc-800">Inventory Details</h1>
          <form className="py-4">
            <div className="grid gap-4 md:grid-cols-3 grid-cols-1">
              <div className="flex flex-col gap-2">
                <div>
                  <label htmlFor="productName" className="block text-xs font-medium text-gray-700">
                    Product Name
                  </label>

                  <input
                    type="text"
                    id="productName"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="isbn" className="block text-xs font-medium text-gray-700">
                    ISBN#
                  </label>

                  <input
                    type="text"
                    id="isbn"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="price" className="block text-xs font-medium text-gray-700">
                    Price
                  </label>

                  <input
                    type="number"
                    id="price"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <label htmlFor="category" className="block text-xs font-medium text-gray-700">
                    Category
                  </label>

                  <input
                    type="text"
                    id="category"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-xs font-medium text-gray-700">
                    Product Description
                  </label>

                  <textarea
                    id="description"
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
          </form>
        </section>
        <section className="py-4">
          <h1 className="text-base font-semibold text-zinc-800">Supplier Details</h1>
          <form className="py-4">
            <div className="grid gap-4 md:grid-cols-3 grid-cols-1">
              <div className="flex flex-col gap-2">
                <div>
                  <label htmlFor="productName" className="block text-xs font-medium text-gray-700">
                    Product Name
                  </label>

                  <input
                    type="text"
                    id="productName"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="isbn" className="block text-xs font-medium text-gray-700">
                    ISBN#
                  </label>

                  <input
                    type="text"
                    id="isbn"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="price" className="block text-xs font-medium text-gray-700">
                    Price
                  </label>

                  <input
                    type="number"
                    id="price"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <label htmlFor="category" className="block text-xs font-medium text-gray-700">
                    Category
                  </label>

                  <input
                    type="text"
                    id="category"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-xs font-medium text-gray-700">
                    Product Description
                  </label>

                  <textarea
                    id="description"
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
          </form>
        </section>
      </div>
    </div>
  );
};
