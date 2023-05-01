const $html = document.querySelector('html')
const $checkbox = document.querySelector('#dark')

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark_mode')

    localStorage.removeItem("dark_mode");

    if ($html.classList.contains('dark_mode')){
        localStorage.setItem("dark_mode", 1);
    }
})


function tema(){
    const dark_mode = localStorage.getItem('dark_mode')

    if(dark_mode){
        $html.classList.toggle('dark_mode')
    }
}

tema();