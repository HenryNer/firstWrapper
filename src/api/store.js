import axios from 'axios'
//做api请求,mockjs中有定义
export function home() {
    return axios({
        method: 'get',
        url: `${process.env.VUE_APP_BASE_URL}/book/home`
    })
}
//线上请求
export function detail(book) {
    return axios({
        method: 'get',
        url: `${process.env.VUE_APP_BOOK_URL}/book/detail`,
        params: {
            fileName: book.fileName
        }
    })
}
//mockjs中有定义
export function list() {
    return axios({
        method: 'get',
        url: `${process.env.VUE_APP_BASE_URL}/book/list`
    })
}