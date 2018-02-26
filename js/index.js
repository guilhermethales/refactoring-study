import $ from "jquery";

const $contact = $('#contact');
const $name = $('#name');
const $email = $('#email');
const $phone = $('#phone');
const $website = $('#website');
const $message = $('#message');
const $submit = $('#submit');

const elementsIds = ['contact', 'name', 'email', 'phone', 'website', 'message', 'submit'];

const getObjectWithElements = (elementsIds) => {
    return elementsIds.reduce((item, id) => {
        item[id] = $(`#${id}`);

        return item;
    }, {});
}

let elements = getObjectWithElements(elementsIds);

const getPayload = () => {
    let obj = {};
    Object.keys(elements).map(item => {
        obj[item] = elements[item].val();
    })

    return obj;
}

function fill() {
    $name.val('Guilherme');
    $email.val('guilhermevtog@hotmail.com');
    $phone.val('31994258494');
    $website.val('http://www.guilherme.com.br');
    $message.val('messagem teste');
}

fill();

elements.contact.on('submit', (event) => {
    event.preventDefault();

    let payload = getPayload();

    $name.attr('disabled', true);
    $email.attr('disabled', true);
    $phone.attr('disabled', true);
    $website.attr('disabled', true);
    $message.attr('disabled', true);
    $submit.attr('disabled', true);

    setTimeout(() => {
        $name.val();
        $email.val();
        $phone.val();
        $website.val();
        $message.val();
        alert('Mensagem enviada com sucesso!!!');
        $name.focus();
        $name.attr('disabled', false);
        $email.attr('disabled', false);
        $phone.attr('disabled', false);
        $website.attr('disabled', false);
        $message.attr('disabled', false);
        $submit.attr('disabled', false);
    }, 2000);
})