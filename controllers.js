
const leerCatalogo = async () => {
    let urlProducts = urlCatalogo+'?apikey='+apiKey;    
    const response = await fetch(urlProducts, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Request-Headers': '*'
        }
    });
    const myJson = await response.json(); 
    // console.log(myJson);
    return myJson;

}

const leerCarrito = async (userId) => {
    let urlProducts = urlCarrito+userId+'?apikey='+apiKey;   
    const response = await fetch(urlProducts, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Request-Headers': '*'
        }
    });
    const myJson = await response.json(); 
    console.log('LeerCarrito',myJson);
    return myJson;

}

const guardarCarrito = async (carrito, userId) => {
    // console.log('guardarCarrito entrada',carrito);
    let urlProducts = urlCarrito+userId+'?apikey='+apiKey;  
    const response = await fetch(urlProducts, {
        method: 'POST',
        body: JSON.stringify({
            "id": userId,
            "carrito": carrito 
          }), 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Request-Headers': '*'
        }
    });
    const myJson = await response.json(); 
    // console.log('guardarCarrito, response',myJson);
    return myJson;
}

const cancelarCarrito = async (userId) => {
    let urlProducts = urlCarrito+userId+'?apikey='+apiKey;     
    const response = await fetch(urlProducts, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Request-Headers': '*'
        }
    });
    const myJson = await response.json(); 
    // console.log('cancelarCarrito response',myJson);
    return myJson;
}