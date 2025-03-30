document.addEventListener("DOMContentLoaded", function () {
    const addHumanButton = document.querySelector(".button-add-human");
    const formContainer = document.querySelector("#form-container");
    const saveButton = document.querySelector(".button-save-form");
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container");
    document.body.appendChild(infoContainer);

    addHumanButton.addEventListener("click", function () {
        resetForm(formContainer);
        showForm(formContainer, infoContainer);
    });

    saveButton.addEventListener("click", function () {
        handleSave(formContainer, infoContainer);
        showInfoBlock(formContainer, infoContainer)
    });
});

function showForm(formContainer, infoContainer) {
    formContainer.classList.remove("hidden");
    infoContainer.querySelectorAll(".info-block").forEach(infoBlock => infoBlock.classList.add("hidden"));

}

function showInfoBlock(formContainer, infoContainer) {
    formContainer.classList.add("hidden");
    infoContainer.querySelectorAll(".info-block").forEach(infoBlock => infoBlock.classList.remove("hidden"));
}

function handleSave(formContainer, infoContainer) {
    const name = document.querySelector(".input-name-human").value;
    const gender = document.querySelector("#gender").value;
    const product = document.querySelector("#product-list").value;
    const productName = document.querySelector("#product-list-article").value;
    const color = document.querySelector("#product-list-color").value;
    const quantityItems = document.querySelector("#quality-items").value;
    const productSize = document.querySelector("#product-list-size").value;
    const chestSize = document.querySelector("#chest-size").value;
    const qualityLogo = document.querySelector("#quality-logo").value;
    const qualityEmbroideries = document.querySelector("#quality-embroideries").value;

    if (!name || !gender || !product || !productName || !color || !quantityItems || !productSize || !chestSize || !qualityLogo || !qualityEmbroideries) {
        alert("Будь ласка, заповніть всі поля!");
        return;
    }

    const infoBlock = document.createElement("div");
    infoBlock.classList.add("info-block");
    infoBlock.innerHTML = `
        <p>Ім'я: <span class="info-name">${name}</span></p>
        <p>Стать: <span class="info-gender">${gender}</span></p>
        <p>Виріб: <span class="info-product">${product}</span></p>
        <p>Назва виробу: <span class="info-productName">${productName}</span></p>
        <p>Колір: <span class="info-color">${color}</span></p>
        <p>Кількість: <span class="info-quantityItems">${quantityItems}</span></p>
        <p>Розмір: <span class="info-productSize">${productSize}</span></p>
        <p>ОГ/ОС: <span class="info-chestSize">${chestSize}</span></p>
        <p>Кількість лого: <span class="info-qualityLogo">${qualityLogo}</span></p>
        <p>Кількість вишивки: <span class="info-qualityEmbroideries">${qualityEmbroideries}</span></p>
        <button class="edit-button">Редагувати</button>
        <button class="delete-button">Видалити</button>
    `;

    infoContainer.appendChild(infoBlock);
    formContainer.classList.add("hidden");
    resetForm(formContainer);
    setupEditAndDelete(infoBlock, formContainer);
}

function setupEditAndDelete(infoBlock, formContainer) {
    const editButton = infoBlock.querySelector(".edit-button");
    const deleteButton = infoBlock.querySelector(".delete-button");

    editButton.addEventListener("click", function () {
        formContainer.querySelector(".input-name-human").value = infoBlock.querySelector(".info-name").textContent;
        formContainer.querySelector("#gender").value = infoBlock.querySelector(".info-gender").textContent;
        formContainer.querySelector("#product-list").value = infoBlock.querySelector(".info-product").textContent;
        formContainer.querySelector("#product-list-article").value = infoBlock.querySelector(".info-productName").textContent;
        formContainer.querySelector("#product-list-color").value = infoBlock.querySelector(".info-color").textContent;
        formContainer.querySelector("#quality-items").value = infoBlock.querySelector(".info-quantityItems").textContent;
        formContainer.querySelector("#product-list-size").value = infoBlock.querySelector(".info-productSize").textContent;
        formContainer.querySelector("#chest-size").value = infoBlock.querySelector(".info-chestSize").textContent;
        formContainer.querySelector("#quality-logo").value = infoBlock.querySelector(".info-qualityLogo").textContent;
        formContainer.querySelector("#quality-embroideries").value = infoBlock.querySelector(".info-qualityEmbroideries").textContent;
        
        formContainer.classList.remove("hidden");
        infoBlock.remove();
    });

    deleteButton.addEventListener("click", function () {
        infoBlock.remove();
    });
}

function resetForm(formContainer) {
    if (!formContainer) return;
    formContainer.classList.add("hidden");
    const fields = [
        ".input-name-human", "#gender", "#product-list", "#product-list-article", 
        "#product-list-color", "#quality-items", "#product-list-size", 
        "#chest-size", "#quality-logo", "#quality-embroideries"
    ];
    fields.forEach(selector => {
        const field = formContainer.querySelector(selector);
        if (field) field.value = "";
    });
}
