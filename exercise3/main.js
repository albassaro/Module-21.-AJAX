// Параметры для вывода даты в нужном формате
var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};



// Проверка хранилища на наличие записей
let user = localStorage.getItem('user');

// Если запись найдена
if (user && user != 'null'){
    // Вывод сообщения при найденной записи в хранилище
    alert("Добрый день, " + localStorage.getItem('user') + "!" + `\n`+"Давно не виделись." + `\n`+ "В последний раз вы были у нас: " + localStorage.getItem('date'));
    // Перезапись даты последнего посещения
    let currentDate = new Date().toLocaleString("ru", options);
    localStorage.setItem('date', currentDate);

}else { 
// Если запись не найдена
    
// Приветствие если в базе ничего не написано
let userName = prompt("Добро пожаловать! Назовите, пожалуйста, ваше имя");

// Получение текущей даты
let currentDate = new Date().toLocaleString("ru", options);

// Запись имени и даты в localStorage 
localStorage.setItem('user', userName);
localStorage.setItem('date', currentDate);
}













