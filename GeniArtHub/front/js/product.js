async function detail() {
    try {
        const res =  await fetch ('http://localhost:3000/api/products/')
        const data = await res.json();

        console.log(data)

        const productContainer = document.querySelector(".detailoeuvre")

        let productHtml = "";

        data.forEach(products => {
            productHtml += `
                <article>
                    <img src="${products.image}" alt="${products.titre}">
                    <h1>${products.titre}</h1>
                    <p>${products.description}</p>
                    <h2>Acheter pour :</h2>
                    <span>${products.declinaison["prix"]}</span>
                    <input type="number" id="quantity">
                    <select name="format id="format"></select>
                    <a href="#"
                        <button>Acheter ${products.shorttitle}</buton>
                    <a>
                </article>
                <aside>
                    <h2>Description de l'oeuvre : ${products.title}</h2>
                </aside>
            `;
        });

        productContainer.innerHTML = productHtml;

    } catch {

    }
}