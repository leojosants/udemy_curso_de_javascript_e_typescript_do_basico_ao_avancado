import { OrderStatus } from "./interfaces/orderStatus";
import { ShoppingCart } from "./shopping-cart";
import { Messaging } from '../services/messaging';
import { Persistency } from "../services/persistency";
import { CustomerOrder } from "./interfaces/customer-protocol";

export class Order {
  private _orderStatus: OrderStatus = 'Status: open';

  constructor(
    // eslint-disable-next-line no-unused-vars
    private readonly cart: ShoppingCart,

    // eslint-disable-next-line no-unused-vars
    private readonly messaging: Messaging,

    // eslint-disable-next-line no-unused-vars
    private readonly persistency: Persistency,

    // eslint-disable-next-line no-unused-vars
    private readonly customer: CustomerOrder,
  ) { }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio!');
      return;
    }

    this._orderStatus = 'Status: closed';
    this.messaging.sendMessage(`Seu pedido com total de R$${this.cart.totalWithDiscount()} foi recebido!`);
    this.persistency.saveOrder();
    this.cart.clear();

    console.log(`O cliente é: ${this.customer.getName()}, ${this.customer.getIDN()}`);
  }
}
