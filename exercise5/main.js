
const btn = document.querySelector('.interface__button');
const list = document.querySelector('.list');


btn.addEventListener('click', () => {

    const taskID = document.querySelector('.interface__input').value;

    while (list.firstChild){
        list.removeChild(list.firstChild);
    }
    
    fetch('https://jsonplaceholder.typicode.com/users/'+taskID+'/todos')
        .then((response) => {
            const result = response.json();
            console.log(result);
            return result;
        })
        .then((result) => {
            if(result.length>0){
                // обработать задачу и вывести на сайте
                for (let i=0;i<result.length;i++){

                    let newElement = document.createElement('ul');
                    newElement.className = "task-list";

                    // Проверка завершенности задачи и зачеркивание ее с помощью присвоения доп класса
                    if (result[i].completed == true){
                        newElement.className = "task-list complete-task";
                    }
                    newElement.innerHTML = ` <h4>Задача № ${i+1}</h4>
                    <li = "list__item>userId: ${result[i].userId}</li>
                    <li = "list__item>id: ${result[i].id}</li>
                    <li = "list__item>title: ${result[i].title}</li>
                    <li = "list__item>completed: ${result[i].completed}</li>`;

                    list.append(newElement);
                }   
            }else{
                alert("Пользователь с указанным id не найден")
            }
            
        })

        .catch((result) => {
            alert("Возникла ошибка")
        })

})































