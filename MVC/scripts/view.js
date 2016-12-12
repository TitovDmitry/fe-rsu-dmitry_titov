var view = {
}

view.__proto__.showLibrary = function(library)
{
    content.innerHTML = "";/*очищаю контейнер для книг*/
    document.getElementById("content").className = "content";

    for (var i = 0; i < model.books.length; i++)
    {

            var string = ""; /* Переменная для построения звезд*/

            if (model.books[i].getVisible())
            {

                    /*считаю количество целых звезд*/
                    for (var stars = model.books[i].getStars(); stars > 0.5; stars--) {
                            string = string + "<i class='fa fa-star' aria-hidden='true'></i>";
                    }

                    /*добавляю половинку звезды*/
                    if (stars == 0.5) {string = string + "<i class='fa fa-star-half-o' aria-hidden='true'></i>";
                        stars = stars - 0.5;} 

                    /*добавляю оставшиеся пустые звезды*/
                    for (stars = model.books[i].getStars(); stars < 4.5; stars++) {
                            string = string + "<i class='fa fa-star-o' aria-hidden='true'></i>";
                    }

                    var money = model.books[i].getPrice();
                    money = (money == 0 )? "free": money += " $";

                /*строю блок с книгой*/
                content.insertAdjacentHTML("beforeEnd","<div class = 'book' id = '" + model.books[i].getId() + "' onclick='controller.showbook("+ i +")'><img src='" + model.books[i].getCover() + "' alt='book' class='book__cover'/><div class = 'book__title'>" + model.books[i].getTitle() + "</div><div class = 'book__author'>" + model.books[i].getAuthor() + "</div><div class = 'book__prise'>Prise: "+ money +"</div><div class = 'book__stars' id = 'stars'>"+ string +"<div></div>");
            }
    } 
}


view.__proto__.allbooks_menu = function() {
    document.getElementById("allbooks").className = "centerblockmenu__link_first";
    document.getElementById("mostrecent").className = "centerblockmenu__link";
    document.getElementById("mostpopular").className = "centerblockmenu__link";
    document.getElementById("freebooks").className = "centerblockmenu__link"; 
}

view.__proto__.mostrecent_menu = function() {
    document.getElementById("allbooks").className = "centerblockmenu__link";
    document.getElementById("mostrecent").className = "centerblockmenu__link_first";
    document.getElementById("mostpopular").className = "centerblockmenu__link";
    document.getElementById("freebooks").className = "centerblockmenu__link"; 
}

view.__proto__.mostpopular_menu = function() {
    document.getElementById("allbooks").className = "centerblockmenu__link";
    document.getElementById("mostrecent").className = "centerblockmenu__link";
    document.getElementById("mostpopular").className = "centerblockmenu__link_first";
    document.getElementById("freebooks").className = "centerblockmenu__link"; 
}


view.__proto__.freebooks_menu = function() {
    document.getElementById("allbooks").className = "centerblockmenu__link";
    document.getElementById("mostrecent").className = "centerblockmenu__link";
    document.getElementById("mostpopular").className = "centerblockmenu__link";
    document.getElementById("freebooks").className = "centerblockmenu__link_first"; 
}

view.__proto__.addabook = function() {
    document.getElementById("newbook").className = "newbook";
}

view.__proto__.cancel = function() {
    document.getElementById("newbook").className = "newbook_off";
}

view.__proto__.showbookinfo = function(number){
    document.getElementById("bookinfo").className = "bookinfo";
    bookinfo_1.innerHTML = "<img src='"+ model.books[number].getCover() +"' alt='Book' class = 'bookinfo__cover'>";
    var tags = "";
    for (var i = 0; i < model.books[number].tags.length; i++) {
        tags = tags + model.books[number].tags[i] + " <br> ";
    }

    bookinfo_2.innerHTML = "<div class = 'bookinfo__info'>Title: "+  model.books[number].getTitle() +"</div><div class = 'bookinfo__info'>Author: "+ model.books[number].getAuthor() + "</div><div class = 'bookinfo__info'>Raiting: "+ model.books[number].getStars() + "</div><div class = 'bookinfo__info'>Price: "+ model.books[number].getPrice() + " $</div><div class = 'bookinfo__info'>Tags: <br>"+ tags +"</div><input type = 'text' class = 'bookinfo__button' id = 'newtagtext'><button class = 'bookinfo__button' onclick = 'controller.addnewtag("+ number +")'>Add tag</button><button class = 'bookinfo__button' onclick = 'controller.off_bookinfo();'>Close</button>";
}

view.__proto__.offbookinfo = function(){
    document.getElementById("bookinfo").className = "bookinfo_off";
}

view.__proto__.listoftags = function() {
    document.getElementById("listoftags").innerHTML ="";
    for (var i = 0; i < model.tags.length; i++) {
        document.getElementById("listoftags").insertAdjacentHTML("beforeEnd","<li class = 'panel-item'><a class = 'panel-link' href = '#'><i class = 'panel-pix panel-pix_" + model.tags[i].color + "'>⚫</i> <i class = 'panel-text' id = '"+ i +"' onclick = 'controller.sortoftags("+ i +")'>" + model.tags[i].name + "</i></a></li>");
    }
}

view.__proto__.shownews = function() {
    document.getElementById("news").innerHTML ="";
    var temporary = model.news.length-3;
    var i = model.news.length - 1;
    for (; i > temporary; i--) {
        document.getElementById("news").insertAdjacentHTML("beforeEnd", "<li class = 'news'><div class = 'watch'><i class='fa fa-clock-o' aria-hidden='true'></i></div><div class = 'textofnews'> You added <span class = 'textofnews_blue'>" + model.news[i].title + "</span> by <span class = 'textofnews_blue'>" + model.news[i].author + "</span> to your <span class = 'textofnews_blue'>"+ model.news[i].where +"</span><p class = 'timeago'>"+ model.news[i].getMinutesAgo() +" minutes ago</p></div></li>");
    }
}

view.__proto__.historyshow = function() {
    document.getElementById("allbooks").className = "centerblockmenu__link";
    document.getElementById("mostrecent").className = "centerblockmenu__link";
    document.getElementById("mostpopular").className = "centerblockmenu__link";
    document.getElementById("freebooks").className = "centerblockmenu__link";

    for (var i = 0; i < model.books.length; i++) {
        model.books[i].setVisibleOFF();
    } 

    view.showLibrary();

    document.getElementById("content").className = "history";

    for (i = (model.news.length - 1); i > -1; i--) {
        content.insertAdjacentHTML("beforeEnd", "<li> You added <b> "+ model.news[i].title +"</b> by <b> "+ model.news[i].author +"</b> to your <b>"+ model.news[i].where +"</b>. <small>("+ model.news[i].getDay() +" - "+ model.news[i].getMonth() +" - "+ model.news[i].getYear() +")</small></li>");
    }

}