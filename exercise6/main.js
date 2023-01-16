
// Поиск элементов через идентификатор класса
const btn = document.querySelector('.interface__button');
const imgList = document.querySelector('.list');

// Чтение из localstorage и вывод последней записи если оно не пустое
let images = localStorage.getItem('images');
if (images && images != 'null')
{
    imgList.innerHTML = localStorage.getItem('images');
}


btn.addEventListener('click',()=>{

    const pageNumber = document.querySelector('.page-number').value;
    const limitNumber = document.querySelector('.limit').value;

    // Условия для отображения нужной информации
    switch(true){
         
        case ((pageNumber<=0 || pageNumber>=11) && (limitNumber<=0 || limitNumber>=11)):
            //Вывод результата в div элемент
            imgList.innerHTML = `<p>Номер страницы и лимит вне диапазона от 1 до 10</p>`;
            break;

        case (pageNumber>=1 && pageNumber<=10 && limitNumber>=1 && limitNumber<=10):
            fetch('https://picsum.photos/v2/list?page='+pageNumber+'&limit='+limitNumber)
            .then((response)=>{
                const result = response.json();
                return result;
            })

            .then((result) => {
                let listCard = '';
                // Перебор массива и вывод картинок в div элемент 
                result.forEach(element => {
                    const card = `
                    <div class = "card">
                        <img src = ${element.download_url}
                        class = "card-image" />
                        <p>${element.author}</p>
                    </div> `;

                    listCard = listCard + card;
                    
                });
                imgList.innerHTML = listCard;
                localStorage.setItem('images', listCard);
            })

            .catch(() => {
                alert("Возникла ошибка")
            })

            break;

        case (pageNumber<1 || pageNumber>10):
            imgList.innerHTML = `<p>Номер страницы вне диапазона от 1 до 10</p>`;
            break;

        case (limitNumber<1 || limitNumber>10):
            imgList.innerHTML = `<p>Лимит вне диапазона от 1 до 10</p>`;
            break;
    }

})
















