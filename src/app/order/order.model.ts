class Order{
  constructor(
    public address: string,
    public number: number,
    public optionalAddress: string,
    public paymentOptional: string,
    public orderItems: OrderItem[]=[],
    public id?: string
  ){}
}

class OrderItem{
  constructor(public quantity: number, public menuID: string ){}
}

export{Order,OrderItem}
