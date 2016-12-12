var controller = {

}

/* обработчик для строки поиска*/
controller.__proto__.sorting = function(text) {

    for (var i = 0; i < model.books.length; i++) {
        /*опускаю все в нижний регистр и сравниваю*/
        if ( (model.books[i].title.toLowerCase().indexOf(text.toLowerCase()) == -1) && (model.books[i].author.toLowerCase().indexOf(text.toLowerCase()) == -1) )
        {
            model.books[i].setVisibleOFF();
        } else {
            model.books[i].setVisibleON();
        }

        view.showLibrary(model.books);
        view.allbooks_menu();
    }

}


/* обработчик All Books*/
controller.__proto__.allbooks_button = function() {

    for (var i = 0; i < model.books.length; i++) {

            model.books[i].setVisibleON();
        }
        view.showLibrary(model.books); 
        view.allbooks_menu();
}


/* обработчик для Most Recent*/
controller.__proto__.mostrecent_button = function() {

        view.showLibrary(model.books);
        view.mostrecent_menu();
}


/* обработчик для Most Popular*/
controller.__proto__.mostpopular_button = function() {
    for (var i = 0; i < model.books.length; i++) {
        if (model.books[i].getStars() == 5)
        {
            model.books[i].setVisibleON();
        } else {
            model.books[i].setVisibleOFF();
        }

        view.showLibrary(model.books);
        view.mostpopular_menu();
    }    
}


/* обработчик для Free Books*/
controller.__proto__.freebooks_button = function() {
    for (var i = 0; i < model.books.length; i++) {
        if (model.books[i].getPrice() == 0)
        {
            model.books[i].setVisibleON();
        } else {
            model.books[i].setVisibleOFF();
        }

        view.showLibrary(model.books);
        view.freebooks_menu();
    } 
}


/* обработчик для ADD A BOOK*/
controller.__proto__.addabook_button = function() {
    view.addabook();
}

controller.__proto__.addabook_cancel = function() {
    view.cancel();
}

controller.__proto__.addabook_add = function() {
    if ((document.getElementById("newbook_title").value) && (document.getElementById("newbook_author").value) && ((document.getElementById("newbook_price").value >= 0) && (document.getElementById("newbook_price").value <= 99999)) ) {
    model.books[model.books.length] = new Book(document.getElementById("newbook_title").value, document.getElementById("newbook_author").value, document.getElementById("newbook_stars").value, "covers/cover_new.png", document.getElementById("newbook_price").value, ["New Book"], model.books.length);
    alert("Книга была успешно добавлена в библиотеку.");

    controller.newnews(document.getElementById("newbook_title").value, document.getElementById("newbook_author").value, "this library");
   
   view.showLibrary(model.books);
   view.cancel();
    } else {
        alert ("Введите корректные данные.");
    }
}

controller.__proto__.showbook = function(number) {
    view.showbookinfo(number);
}

controller.__proto__.off_bookinfo = function() {
    view.offbookinfo();
}


/*метод добавления тегов*/

controller.__proto__.addnewtag = function(number) {

    var temporary = true;
    if (document.getElementById('newtagtext').value != "")
    {
        /*для выбранной книги*/
        for (var i = 0; i < model.books[number].tags.length; i++) {
            if (document.getElementById('newtagtext').value.toLowerCase() == model.books[number].tags[i].toLowerCase()) {
                alert("Данный тег уже присутствует.");
                temporary = false;
            }
        }
    if (temporary == true) {
        model.books[number].tags[ model.books[number].tags.length] = document.getElementById('newtagtext').value;
        alert("Новый тег успешно добавлен.");

        controller.newnews(model.books[number].title,model.books[number].author, document.getElementById('newtagtext').value);
    }

    /*для списка тегов*/
    temporary = false;
    for (var i = 0; i < model.tags.length; i++) {
        if (document.getElementById('newtagtext').value.toLowerCase() == model.tags[i].name.toLowerCase()) {
            temporary = true;
        }
    }
    if (temporary == false) {model.tags[model.tags.length] = new Tag(document.getElementById('newtagtext').value, "white")
    view.listoftags();
    controller.showbook(number);
    }
    } else {alert("Введите корректные данные")}
}


/*сортирую по тегам*/
controller.__proto__.sortoftags = function(id) {

    for (var i = 0; i < model.books.length; i++) {
        model.books[i].setVisibleOFF();
        for (var i_2 = 0; i_2 < model.books[i].tags.length; i_2++) {
            if (model.books[i].tags[i_2] == model.tags[id].name) {
                model.books[i].setVisibleON();
            }
        }
    }
    view.showLibrary(model.books);
}

controller.__proto__.newnews = function(title, author, where) {
    model.news[model.news.length] = new News(title, author, where);
    view.shownews();
}

controller.__proto__.history = function() {
    view.historyshow();
}

/*подписываюсь на кнопки меню*/

document.getElementById('allbooks').onclick = function() {
    controller.allbooks_button();
}

document.getElementById('mostrecent').onclick = function() {
    controller.mostrecent_button();
}

document.getElementById('mostpopular').onclick = function() {
    controller.mostpopular_button();
}

document.getElementById('freebooks').onclick = function() {
    controller.freebooks_button();
}

/*подписываюсь на кнопку ADD A BOOK*/
document.getElementById('addabook_click').onclick = function() {
    controller.addabook_button();
}

document.getElementById('but_cancel').onclick = function() {
    controller.addabook_cancel();
}

document.getElementById('but_add').onclick = function() {
    controller.addabook_add();
}

document.getElementById('history').onclick = function() {
    controller.history();
}