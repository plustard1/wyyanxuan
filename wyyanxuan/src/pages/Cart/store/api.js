export const change_logo = (cartItem, cartdata = []) => {
    const {id} = cartItem
    let index = cartdata.findIndex((item) => item.id == id)
    cartdata[index].isChecked = ! cartdata[index].isChecked
    return cartdata
}

export const allmoney = (cartdata) => {
    let arr = cartdata.filter(item => item.isChecked)
    return arr.reduce((sum, cur) => sum + cur.price * cur.num, 0)
}

export const reduce_num = (id, cartdata) => {
    let index = cartdata.findIndex((item) => item.id == id)
    cartdata[index].isChecked = true;

    // 业务，当商品的num变为1时，不能再减少，把按钮改为disabel:false
    if (cartdata[index].num == 1) {
            cartdata[index].isChecked = false
            return cartdata
    }
    cartdata[index].num--;
    if(cartdata[index].num == 1)  cartdata[index].isChecked = false
    return cartdata
}

export const add_num = (id, cartdata) => {
    let index = cartdata.findIndex((item) => item.id == id)

    // 业务逻辑 点击数量增加后，isChecked改为true
    cartdata[index].isChecked = true;
    cartdata[index].num++;
    return cartdata
}

export const change_num = (data,cartdata) => {

    let {num,id} =data
    let index = cartdata.findIndex((item) => item.id == id)
    
    cartdata[index].num = num
    cartdata[index].isChecked = true
    return cartdata
}

export const allSelected = (cartdata) => {
    // 判断如果index == -1 则全选
    let index = cartdata.findIndex((item) => !item.isChecked)
    if(index == -1) return true
}

export const SelectedAll = (cartdata) =>{
    let index = cartdata.findIndex((item) => !item.isChecked) 
    if(index == -1) {    // 表示全选
        cartdata.map(item => 
        item.isChecked = !item.isChecked)
    }
    else{ // 没选或部分选
        cartdata.map(item => 
          item.isChecked = true)
    }
    return cartdata
}

export const goToCart = (data,cartdata) =>{
    return cartdata;
}

export const deleteItem = (id,data) =>{
    let index = data.findIndex(item => item.id == id)
    data.splice(index,1)
    return data
}

// 详情页点击进入购物车
export const goToCart_btn = (data,cartdata) =>{
    let {id} = data
    let index = cartdata.findIndex(item => item.id == id)

    if(index == -1){
        cartdata.push(data)
        console.log(cartdata);
        return cartdata
    }
   return cartdata
}

// tabbar 的总数量
export const totalnum = (data) =>{
    let num = data.reduce((acc,item) => acc+item.num,0)
    return num
}