import * as Yup from 'yup';

export const ProductSchema = Yup.object().shape({
  isbn: Yup.lazy((value) => (value === '' ? Yup.string() : Yup.number())),
  productName: Yup.string().required('Product name is required'),
  price: Yup.lazy((value) => (value === '' ? Yup.string() : Yup.number().required('Price is required'))),
  category: Yup.string(),
  description: Yup.string(),
  inventory: Yup.array()
    .of(
      Yup.object({
        location: Yup.string().required('Location is required'),
        quantity: Yup.lazy((value) => (value === '' ? Yup.string() : Yup.number().required('Quantity is required'))),
      }),
    )
    .required('Inventory is required'),
  suppliers: Yup.array().of(
    Yup.object({
      supplier: Yup.string().required('Supplier is required'),
      purchaseQuantity: Yup.number().required('Purchase quantity is required'),
      purchaseRate: Yup.number().required('Purchase rate is required'),
    }),
  ),
});

export type Product = Yup.InferType<typeof ProductSchema>;
