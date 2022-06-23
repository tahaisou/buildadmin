import createAxios from '/@/utils/axios'
import { getUserToken } from '/@/utils/common'

const controllerUrl = '/index.php/api/user/'
const accountUrl = '/index.php/api/account/'

export function index() {
    return createAxios({
        url: controllerUrl + 'index',
        method: 'get',
    })
}

export function checkIn(params: object = {}): ApiPromise {
    return createAxios({
        url: controllerUrl + 'checkIn',
        data: params,
        method: 'POST',
    }) as ApiPromise
}

export function overview() {
    return createAxios({
        url: accountUrl + 'overview',
        method: 'get',
    })
}

export function logout() {
    return createAxios({
        url: controllerUrl + 'logout',
        method: 'POST',
        data: {
            refresh_token: getUserToken('refresh'),
        },
    })
}