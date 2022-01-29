// 所有接口方法的列表
import Ajax from './ajax.js'

export const reqmain = () => {
    return Ajax('/home/main')
} 

export const reqcate = () => {
    return Ajax('/home/cate')
}

export const reqlist = (page) => {
    return Ajax('/home/list', {page})
}

export const reqdetail = (id) => {
    return Ajax(`/detail/${id}`)
}

export const reqcart = () => {
    return Ajax('/home/cart')
}

export const requser = () => {
    return Ajax('/home/user')
}