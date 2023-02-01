document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('.calc')
    form.addEventListener('submit', function (e) {
        e.preventDefault()
    })
    let res_field = document.querySelector('.calc__result-field')
    let btn_num = document.querySelectorAll('.js--btn-add-res')
    let btn_reset = document.querySelector('.js--btn-reset')
    let btn_calc = document.querySelector('.js--btn-calc')
    for (let i = 0;i < btn_num.length;i++){
        btn_num[i].addEventListener('click', function (e) {
            e.preventDefault()
            res_field.value += this.innerHTML;

        })
    }

    btn_reset.addEventListener ('click', function (e) {
        e.preventDefault()
        res_field.value = '';
    })

    btn_calc.addEventListener('click', function (e) {
        e.preventDefault()
        res_field.value = eval(res_field.value);
    })
})