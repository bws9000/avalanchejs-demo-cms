<<<<<<< HEAD
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

=======
>>>>>>> 5e9b81490d0151896c9a8d9ea9ac9adf0579640b
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
<<<<<<< HEAD
    const res = await fetch('/api/user/create', options);
    return await res.json();
=======

    const res = await fetch('/api/user/create', options);
    return await res.json();

>>>>>>> 5e9b81490d0151896c9a8d9ea9ac9adf0579640b
}
