//Cards da tela de Metas

function showModal() {
    var element = document.getElementById("modal");
    element.classList.add("show-modal");
}

function hideModal() {
    var element = document.getElementById("modal");
    element.classList.remove("show-modal");
}

//Cards da tela de Planejamento

function showModal_vlrfx() {
    var element = document.getElementById("modal_vlrfx");
    element.classList.add("show-modal");
}

function hideModal_vlrfx() {
    var element = document.getElementById("modal_vlrfx");
    element.classList.remove("show-modal");
}

function showModal_planejamento() {
    var element = document.getElementById("modal_planejamento");
    element.classList.add("show-modal");
}

function hideModal_planejamento() {
    var element = document.getElementById("modal_planejamento");
    element.classList.remove("show-modal");
}
    //Funções para Adicionar e Remover campos no planejamento
    var controleCampo = 1;
    function adicionarCampo_planejamento() {
        controleCampo++;
        console.log(controleCampo);

        document.getElementById('formulario').insertAdjacentHTML('beforeend','<div class="form-group" id="campo'+ controleCampo +'"><label for="categoria">Categoria: </label><select name="categoria[]" id="categoria1" required><option value=""></option></select> <label for="limite">Limite: </label><input type="number" name="limite[]" required> <button type="button" id="' +controleCampo+'" onclick="removerCampo_planejamento('+controleCampo+')">Remover Campo</</button></div>');
    }

    function removerCampo_planejamento(idCampo) {
        document.getElementById('campo' + idCampo).remove();
    }

//Cards da tela de Reserva

function showModal_adc() {
    var element = document.getElementById("modal_adc");
    element.classList.add("show-modal");
}

function hideModal_adc() {
    var element = document.getElementById("modal_adc");
    element.classList.remove("show-modal");
}

function showModal_rem() {
    var element = document.getElementById("modal_rem");
    element.classList.add("show-modal");
}

function hideModal_rem() {
    var element = document.getElementById("modal_rem");
    element.classList.remove("show-modal");
}

//Cards da tela de Balanços

function showModal_gasto() {
    var element = document.getElementById("modal_gasto");
    element.classList.add("show-modal");
}

function hideModal_gasto() {
    var element = document.getElementById("modal_gasto");
    element.classList.remove("show-modal");
}

function showModal_recebido() {
    var element = document.getElementById("modal_recebido");
    element.classList.add("show-modal");
}

function hideModal_recebido() {
    var element = document.getElementById("modal_recebido");
    element.classList.remove("show-modal");
}

function showModal_criarcarteira() {
    var element = document.getElementById("modal_criarcarteira");
    element.classList.add("show-modal");
}

function hideModal_criarcarteira() {
    var element = document.getElementById("modal_criarcarteira");
    element.classList.remove("show-modal");
}