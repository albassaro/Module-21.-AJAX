
// Создаем экземпляр класса DOMParser
const XmlParse = new DOMParser();

//XML для парсинга
const XmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

// Цикл для перебора значений(т.к. студентов двое) и вывода массива в консоль
for (let i=0;i<2;i++){
    // Парсинг XML 
    const XmlDOM = XmlParse.parseFromString(XmlString, "text/xml");

    // Получение DOM-элементов (данных каждого студента через childnotes)
    const NameStud = XmlDOM.querySelectorAll("first")[i].childNodes[0].nodeValue;
    const SurnameStud = XmlDOM.querySelectorAll("second")[i].childNodes[0].nodeValue;
    const AgeStud = XmlDOM.querySelectorAll("age")[i].childNodes[0].nodeValue;
    const ProfStud = XmlDOM.querySelectorAll("prof")[i].childNodes[0].nodeValue;
    // Объединил получение DOM-элемента "name" и получение из него атрибута "lang"
    const LangNode = XmlDOM.querySelectorAll("name")[i].getAttribute('lang');

    // Вывод в list значений
    const list = {
        name: NameStud + ' ' + SurnameStud,
        age: Number(AgeStud),
        prof: ProfStud,
        lang: LangNode,
    }

    // Вывод в консоль
    console.log(list);
}










