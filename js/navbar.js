const body = document['body'];
const prop = document.getElementById('prop');
const nav = document.getElementById('nav');

//OnLoad Page
update_navbar();

body.onscroll = ()=>{
    update_navbar();
}

function update_navbar(){
    var prop_top_dist = prop.getBoundingClientRect().top;
    if(prop_top_dist <= 22){
        nav.classList.remove('index-nav');
    }else{
        nav.classList.add('index-nav');
    }
}