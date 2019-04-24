$(document).ready(function() {
    
    $('.collapse').each((i, obj) => {
        $(obj).on(('shown.bs.collapse'), function () {

            fetch('js/data.json')
                .then(result => {
                    if(result.ok) return result.json();
                    else return Promise.reject(result.status);
                }).then(result => {
                    let str = '';
                    if (result.data[i].id == 'undefined') return;
                    else {
                        result.data[i].objects.forEach(item => {
                            str += `<div class="card-body-table_body px-4 py-3">${item}</div>`
                        });
                        let par;
                        this.childNodes.forEach((item, ind) => {
                            if (item.className == 'card-body') par = item;
                        });
                        par.childNodes.forEach(item => {
                            if (item.className == 'card-body-table') par = item;
                        });
                        par.childNodes.forEach(item => {
                            if (item.className == 'objects') par = item;
                        })
                        par.innerHTML = str;
                    }
                  
                }).catch(err => console.log(err));

            $($('.card')[i]).addClass('card_shaddow');
            $(document.body).addClass('body_shaddow');
            $($($('.button-img'))[i]).attr('src', 'img/arrow-up.svg');
        });
        $(obj).on(('hide.bs.collapse'), () => {
            $($('.card')[i]).removeClass('card_shaddow');
            $(document.body).removeClass('body_shaddow');
            $($($('.button-img'))[i]).attr('src', 'img/arrow-down.svg');
        });
    });
 

})