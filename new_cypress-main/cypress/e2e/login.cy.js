describe('Тестирование login', function () {  // название набора тестов

     it('search something', function () {  
        cy.visit('https://login.qa.studio//');//переходим на сайт https://login.qa.studio/
        cy.get('#mail').type('german@dolnikov.ru'); // вводим логин
        cy.get('#pass').type('iLoveqastudio1');  // вводим пароль               
        cy.get('#loginButton').click();  // кликаем на кнопку войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяем полученное сообщение
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем наличие кнопки закрыть, проверяем видимость кнопки закрыть
        })
})
describe('Тестирование восстановление пароля', function () {
     it('search something', function () {
        cy.visit('https://login.qa.studio//'); //переходим на сайт https://login.qa.studio/
       cy.get('#forgotEmailButton').click(); // находим кнопку забыли пароль, кликаем на кнопку
       cy.get('#mailForgot').type('Yan@mail.ru'); //вводим почту
        cy.get('#restoreEmailButton').click(); // нажимаем кнопку восстановить
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем наличие кнопки закрыть, проверяем видимость кнопки закрыть
       cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяем полученное сообщение
        })
})
describe('Тестирование login неверный пароль', function () { 

     it('search something', function () {
        cy.visit('https://login.qa.studio//');  //переходим на сайт https://login.qa.studio/
        cy.get('#mail').type('german@dolnikov.ru'); // вводим логин
        cy.get('#pass').type('1111'); // вводим пароль
        cy.get('#loginButton').click(); // кликаем на кнопку войти
       cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяем полученное сообщение
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем наличие кнопки закрыть, проверяем видимость кнопки закрыть
        })
})
describe('Тестирование login неверный логин', function () {  

     it('search something', function () {
        cy.visit('https://login.qa.studio//');  //переходим на сайт https://login.qa.studio/
        cy.get('#mail').type('1@mail.ru'); // вводим логин
        cy.get('#pass').type('iLoveqastudio1'); // вводим пароль
        cy.get('#loginButton').click(); // кликаем на кнопку войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяем полученное сообщение
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем наличие кнопки закрыть, проверяем видимость кнопки закрыть
        })
})
describe('Тестирование login логин без @', function () { 

     it('search something', function () {
        cy.visit('https://login.qa.studio//');  //переходим на сайт https://login.qa.studio/
        cy.get('#mail').type('germandolnikov.ru'); // вводим логин
        cy.get('#pass').type('iLoveqastudio1'); // вводим пароль
        cy.get('#loginButton').click(); // кликаем на кнопку войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяем полученное сообщение
        })
})
describe('Тестирование login верный логин(с большими буквами)/пароль', function () {  

     it('search something', function () {
        cy.visit('https://login.qa.studio//');  //переходим на сайт https://login.qa.studio/
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // вводим логин
        cy.get('#pass').type('iLoveqastudio1'); // вводим пароль
        cy.get('#loginButton').click(); // кликаем на кнопку войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяем полученное сообщение
        })
})
describe('Проверка покупки нового аватара', function () {                 // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
         cy.get('input[id="k_email"]').type('USER_LOGIN');                   // вводим логин
         cy.get('input[id="k_password"]').type('USER_PASSWORD');               // вводим пароль
         cy.get('button[type="submit"]').click();                // нажимаем кнопку Подтвердить
         cy.wait(2000);
         cy.get('.header_card_trainer').click();            // Клик в шапке на аватар тренера
         cy.wait(2000);
         cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click(); // нажимаем кнопку Смена аватара
         cy.get('.available > button').first().click();   // кликаем Купить у первого доступного аватара
         cy.get('.card_number').type('4620869113632996');                     // вводим номер карты
         cy.get('.card_csv').type('125');                             // вводим CVV карты
         cy.get('.card_date').type('1226');                           // вводим срок действия карты
         cy.get('.card_name').type('NAME');                           // вводим имя владельца действия карты
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();     // нажимаем кнопку Оплатить
         cy.get('.threeds_number').type('56456');                            // вводим код подтверждения СМС
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();   // нажимаем кнопку Оплатить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения об успешной покупке
     });
 });