export async function getWalletBalance(params) {

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            params:params
        })
    };
    const res = await fetch('/api/user/wallet/balance', options);
    return await res.json();
}

export async function getUserDelete(params) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            params:params
        })
    };
    const res = await fetch('/api/user/delete', options);
    return await res.json();
}


export async function getListUsers() {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            params:[]
        })
    };
    const res = await fetch('/api/user/list', options);
    return await res.json();
}

export async function getCreateUser(params) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            params:params
        })
    };
    const res = await fetch('/api/user/create', options);
    return await res.json();
}

export async function getApi(endPoint,method,params) {

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            endPoint:endPoint,
            method:method,
            params:params
            })
    };
    const res = await fetch('/api/user/create', options);
    return await res.json();
}
