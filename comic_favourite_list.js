var favourites = [];
function saveList(btn) {
    let i = 0;
    for (i; i < 24; i++) {
        let box = document.getElementsByClassName('selectTen')[i];
        console.log(box);
        if (box.checked) {
            favourites.push(box.parentElement.textContent);
            //checking if input box is checked, and appending to list
        } else {
            if (favourites.includes(box.parentElement.textContent)) {
                var index = favourites.indexOf(box.parentElement.textContent);
                favourites.splice(index, 1);
            }
            //uncheked box will be removed from the list
        }
    }
    if (favourites.length === 0) {
        alert('List cannot be empty!');
        return false;
        //user must select at least one favourite comic
    } else if (favourites.length > 10) {
        alert('You can only select ten favourite comics!');
        //only ten comics can be selected at max
    } else {
        btn.disabled = true;
        alert('Your favourite list has been created');
        var showlist = document.getElementById('createlist_area');
        //getting list area in html Doc
        for (var j = 0; j < favourites.length; j++) {
            if (j === 0) {
                if (favourites[j] === favourites[favourites.length - 1]) {
                    showlist.insertAdjacentHTML('afterbegin', '<h1 style="color: white;">Your Current List</h1><ol id = "favList"></ol>')
                    listEl = document.getElementById('favList');
                    listEl.insertAdjacentHTML('beforeend', '<li style="color: yellow;">' + favourites[j] + '</li>');
                    listEl.insertAdjacentHTML('afterend', '<h2 id="share" style="margin-left: 350px; font: italic 2em Georgia, Times, serif;"><b>Share Your List!!</b></h2>');
                    headingEl = document.getElementById('share');
                    headingEl.insertAdjacentHTML('afterend', '<span class="navLogo" style="margin-left: 350px;"><img style="margin-left: 25px; margin-right 25px;" src="Resources\\Logos\\facebookicon.PNG">' +
                        '<img style="margin-left: 25px; margin-right 25px;" src="Resources\\Logos\\instaicon.PNG">' +
                        '<img style="margin-left: 25px; margin-right 25px;" src="Resources\\Logos\\twitterlogo.PNG">' +
                        '</span>');
                    break;
                }
                showlist.insertAdjacentHTML('afterbegin', '<h1 style="color: white;">Your Current List</h1><ol id = "favList"></ol>')
                listEl = document.getElementById('favList');
                listEl.insertAdjacentHTML('afterbegin', '<li style="color: yellow; ">' + favourites[j] + '</li>');
                //inserting new html to update the page dynamically with the list

            } else if (favourites[j] === favourites[favourites.length - 1]) {
                listEl.insertAdjacentHTML('beforeend', '<li style="color: yellow;">' + favourites[j] + '</li>');
                listEl.insertAdjacentHTML('afterend', '<h2 id="share" style="margin-left: 380px; font: italic 2em Georgia, Times, serif;"><b>Share Your List!!</b></h2>');
                headingEl = document.getElementById('share');
                headingEl.insertAdjacentHTML('afterend', '<span class="navLogo" style="margin-left: 350px;"><a href="https://facebook.com"><img style="margin-left: 25px; margin-right 25px;" src="Resources\\Logos\\facebookicon.PNG"></a>' +
                    '<a href="https://instagram.com" ><img style="margin-left: 25px; margin-right 25px;" src="Resources\\Logos\\instaicon.PNG"></a>' +
                    '<a href="https://twitter.com"><img style="margin-left: 25px; margin-right 25px;" src="Resources\\Logos\\twitterlogo.PNG"></a>' +
                    '</span>');
            } else {
                listEl.insertAdjacentHTML('beforeend', '<li style="color: yellow;">' + favourites[j] + '</li>');
            }

        }
        document.body.scrollTop = 40;
        document.documentElement.scrollTop = 40;
    }
}

window.onload = function () {
    //document is now ready and loaded
    var topButton = document.getElementById('backTop');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = 'block';
        //setting the top button visible
    } else { topButton.style.display = 'none'; }
    //hiding the top button

    window.onscroll = function () { scroll() };
    //anonymous function to detect scroll events
    function scroll() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            topButton.style.display = 'block';
            //setting the top button visible
        } else { topButton.style.display = 'none'; }
        //hiding the top button
    }
}
function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    //top button is clicked and page is moved up.
}


