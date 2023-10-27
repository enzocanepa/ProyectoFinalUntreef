document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');

    // Utilizar Fetch para obtener los datos del archivo JSON
    fetch('../json/productos.json')
        .then(response => response.json())
        .then(data => {
            // Recorrer los datos y agregar cada producto a la lista
            data.forEach(product => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${product.id}</td>
                    <td>${product.nombre}</td>
                    <td>$${product.precio.toFixed(2)}</td>
                    <td>${product.descripcion}</td>
                    <td><img src="${product.imagen}" alt="${product.nombre}" width="100"></td>
                `;
                productList.appendChild(row);
            });
        })
        .catch(error => console.error('Error al obtener los datos de productos:', error));
});