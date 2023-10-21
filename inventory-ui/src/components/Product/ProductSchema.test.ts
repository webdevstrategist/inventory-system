import { describe, it, expect } from 'vitest';
import { ProductSchema } from './ProductSchema';

describe('Purchase Schema', () => {
  it('Product name is required field', async () => {
    const product = {
      isbn: 1123,
      price: 1,
      category: 'A',
      description: 'A valid description',
      inventory: [{ location: 'LOC1', quantity: 1 }],
      suppliers: [{ supplier: 'hello', purchaseQuantity: 1, purchaseRate: 2 }],
    };

    try {
      await ProductSchema.validate(product);
    } catch (e: unknown) {
      expect((e as { message: string }).message).toBe('Product name is required');
    }
  });

  it('Price is required field', async () => {
    const product = {
      isbn: 1123,
      productName: 'sads',
      category: 'A',
      description: 'A valid description',
      inventory: [{ location: 'LOC1', quantity: 1 }],
      suppliers: [{ supplier: 'hello', purchaseQuantity: 1, purchaseRate: 2 }],
    };

    try {
      await ProductSchema.validate(product);
    } catch (e: unknown) {
      expect((e as { message: string }).message).toBe('Price is required');
    }
  });

  it('Inventory is required field', async () => {
    const product = {
      isbn: 1123,
      productName: 'sads',
      category: 'A',
      description: 'A valid description',
      suppliers: [{ supplier: 'hello', purchaseQuantity: 1, purchaseRate: 2 }],
    };

    try {
      await ProductSchema.validate(product);
    } catch (e: unknown) {
      expect((e as { message: string }).message).toBe('Inventory is required');
    }
  });

  it('Inventory quantity is required field', async () => {
    const product = {
      isbn: 1123,
      productName: 'sads',
      category: 'A',
      description: 'A valid description',
      inventory: [{}],
      suppliers: [{ supplier: 'hello', purchaseQuantity: 1, purchaseRate: 2 }],
    };

    try {
      await ProductSchema.validate(product);
    } catch (e: unknown) {
      expect((e as { message: string }).message).toBe('Quantity is required');
    }
  });

  it('Inventory location is required field', async () => {
    const product = {
      isbn: 1123,
      productName: 'sads',
      category: 'A',
      description: 'A valid description',
      inventory: [{ quantity: 1 }],
      suppliers: [{ supplier: 'hello', purchaseQuantity: 1, purchaseRate: 2 }],
    };

    try {
      await ProductSchema.validate(product);
    } catch (e: unknown) {
      expect((e as { message: string }).message).toBe('Location is required');
    }
  });

  it('Supplier purchaseRate is required field', async () => {
    const product = {
      isbn: 1123,
      productName: 'sads',
      category: 'A',
      description: 'A valid description',
      inventory: [{ quantity: 1, location: 'dasda' }],
      suppliers: [{ supplier: 'hello', purchaseQuantity: 1 }],
    };

    try {
      await ProductSchema.validate(product);
    } catch (e: unknown) {
      expect((e as { message: string }).message).toBe('Purchase rate is required');
    }
  });
});
