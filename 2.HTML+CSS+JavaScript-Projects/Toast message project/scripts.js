let toastBox = document.querySelector('.toast-box');

let primary_message = '<i class="fa-solid fa-star"></i>Primary message submitted';
let secondary_message = '<i class="fa-solid fa-bell"></i>Secondary message submitted';
let success_message = '<i class="fa-solid fa-circle-check"></i>Success message submitted';
let danger_message = '<i class="fa-solid fa-skull-crossbones"></i>Danger message submitted';
let warning_message = '<i class="fa-solid fa-triangle-exclamation"></i>Warning message submitted';
let info_message = '<i class="fa-solid fa-circle-info"></i>Info message submitted';
let light_message = '<i class="fa-regular fa-lightbulb"></i>Light message submitted';
let dark_message = '<i class="fa-solid fa-moon"></i>Dark message submitted';

function showToast(toast_msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = toast_msg;
    toastBox.appendChild(toast);

    if (toast_msg.includes('Primary')) {
        toast.classList.add('primary');
    }
    if (toast_msg.includes('Secondary')) {
        toast.classList.add('secondary');
    }
    if (toast_msg.includes('Success')) {
        toast.classList.add('success');
    }
    if (toast_msg.includes('Danger')) {
        toast.classList.add('danger');
    }
    if (toast_msg.includes('Warning')) {
        toast.classList.add('warning');
    }
    if (toast_msg.includes('Info')) {
        toast.classList.add('info');
    }
    if (toast_msg.includes('Light')) {
        toast.classList.add('light');
    }
    if (toast_msg.includes('Dark')) {
        toast.classList.add('dark');
    }

    setTimeout(() => {
        toast.remove();
    }, 6000);
}