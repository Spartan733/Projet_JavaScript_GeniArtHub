async function images() {
    try {
        const response = await fetch ('http://localhost:3000/api/products/')
        const donnees = await response.json();
        
        console.log(donnees)

        //Ajouter la selection du container

        const mainContainer = document.querySelector(".products")

        let globalHtml = "";

        donnees.forEach(products => {
            globalHtml += `
            <article>
                <img class="products" src="${products.image}" alt="${products.titre}">
                <h1>${products.shorttitle}</h1>
                <h2>${products.titre}</h2>
                
                <a href="/front/product.html">
                    <button id="btn">Consulter les détails</button>
                </a>
            </article>
            `;
        });

        // Injection tout d'un coup dans le conteneur

        mainContainer.innerHTML = globalHtml;

    } catch (error) {
        console.error(`Une erreur est survenue : ${error}`)
    }
}
images()