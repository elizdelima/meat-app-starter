import {CartItem} from './cart-item.model'

export class ShoppingCartService{


  items: CartItem[] = []

  clear(){
    this.items = []
  }

  addItem(item:any){
    //console.log(item)
    let foundItem = this.items.find((mItem) =>mItem.menuItem.id === item.id )

    if(foundItem){
      this.increaseQty(foundItem)
    }else{
      this.items.push(new CartItem(item))
    }
  }

  increaseQty(item: CartItem) {
    item.quantity = item.quantity + 1
  }

  decreasyQty(item: CartItem) {
      item.quantity = item.quantity - 1
      if(item.quantity ===0){
        this.removeItem(item)
      }
  }

  removeItem(item:any){
    this.items.splice(this.items.indexOf(item),1)
  }

  total():number{
    return this.items
    .map(item => item.value())
    .reduce((prev,value) => prev + value,0);
  }
}
