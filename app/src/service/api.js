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
