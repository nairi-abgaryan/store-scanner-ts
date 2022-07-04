// Products
import { IProduct } from "./interfaces";
import { Product } from "./product";

// Initializing data store
export let store: Map<string, IProduct> = new Map<string, IProduct>();
store.set("ipd", new Product("ipd", "Super iPad", 549));
store.set("mbp", new Product("mbp", "MacBook Pro", 1399.99));
store.set("atv", new Product("atv", "Apple TV", 109.5));
store.set("vga", new Product("vga", "VGA adapter", 30));
