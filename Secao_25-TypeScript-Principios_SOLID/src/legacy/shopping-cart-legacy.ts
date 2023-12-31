type CartItem = {
  name: string;
  price: number;
}

type OrderStatus = 'Status: open' | 'Status: closed';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'Status: open';

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio!');
      return;
    }

    this._orderStatus = 'Status: closed';
    this.sendMessage(`Seu pedido com total de R$${this.total()} foi recebido!`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log(`Mensagem enviada: ${msg}`);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso!');
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo!');
    this._items.length = 0;
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'Camiseta', price: 49.94 });
shoppingCart.addItem({ name: 'Caderno', price: 9.49 });
shoppingCart.addItem({ name: 'Lápis', price: 1.59 });

console.log(shoppingCart.orderStatus);

shoppingCart.checkout();

console.log(shoppingCart.orderStatus);
