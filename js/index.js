// Accordion
  const acc = document.getElementsByClassName("acc-btn");
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.maxHeight){
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          }
    });
}

// Phone number validation

function formatPhoneNumber(value) {
        if (!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;
        if (phoneNumberLength < 4) return phoneNumber;
        if (phoneNumberLength < 7) {
          return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
          3,
          6
        )}-${phoneNumber.slice(6, 9)}`;
      }
function phoneNumberFormatter(currentTarget) {
        const inputField = currentTarget;
        const formattedInputValue = formatPhoneNumber(inputField.value);
        inputField.value = formattedInputValue;
}

// Submit Form

function submitForm(currentTarget) {
        const form = currentTarget;
        const formData = new FormData(form);
        const url = 'https://formsubmit.co/mandarin.lviv@gmail.com';
        fetch(
          url,
          {
            method: 'POST',
            body: formData
          }
        );
        return false;
}

// Modal window

var modal = null;
var modalWrap = null;
const showModal = (
  title,
  description,
  subject
) => {
  if(modalWrap !== null) {
    modalWrap.remove();
  }

  modalWrap = document.createElement('div');
  modalWrap.innerHTML = `
  <div class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content order-lesson">
          <div>
            <button type="button" class="modal-icon float-end" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-center">
            <h3>${title}</h3>
            <h5>${description}</h5>
            <form class="col my-form" method="POST">
              <!-- Honeypot -->
              <input type="text" name="_honey" class="d-none">
              <!-- Disable Captcha -->
              <input type="hidden" name="_captcha" value="false">
              <!-- Subject -->
              <input type="hidden" name="_subject" value="${subject}">

              <div>
                <input type="text" class="form-control input-item" name="Name" placeholder="Ім’я" required>
                <input type="text" class="form-control input-item phone-number" name="Phone" placeholder="Телефон" required>
                <input type="email" class="form-control input-item" name="E-mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Пошта" required>
              </div>
              <div class="d-grid">
                <button type="submit" class="btn main-btn">Створити заявку</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.append(modalWrap);
  modal = new bootstrap.Modal(modalWrap.querySelector('.modal'), { backdrop: 'static', keybord: false });
  modal.show();

}

// Success Page

var modalSuccess = null;
const showSuccess = () => {

  if(modalSuccess !== null) {
    modalSuccess.remove();
  }

  if(modalWrap !== null) {
    modalWrap.remove();
  }

  modalSuccess = document.createElement('div');
  modalSuccess.innerHTML = `
  <div class="modal fade " tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
    <div class="modal-content success-page">
    <div>
      <button type="button" class="modal-icon float-end" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body text-center">
      <h3>Вітаємо</h3>
      <h5 class="mb-0">Вашу заявку успішно надіслано!</h5>
      <img class="story-image" src="images/postbox.svg"/>
      <p>
        Ми зв’яжемося з вами для підтвердження найближчим часом.
      </p>
    </div>
  </div>
</div>
</div>
  `;

  document.body.append(modalSuccess);
  var success = new bootstrap.Modal(modalSuccess.querySelector('.modal'));
  success.show();
  modal.hide();
}


document.addEventListener('keydown', e => {
  let currentTarget = e.target;
  if(currentTarget.matches('.phone-number')) phoneNumberFormatter(currentTarget);
});


document.addEventListener('submit', e => {
  if(e.target.matches('.my-form')) {
    let currentTarget = e.target;
    submitForm(currentTarget);
    showSuccess();
  }
});

document.addEventListener('click', e => {
  if(e.target.matches('#btn1')) showModal(
                  'Пробне заняття',
                  'Ви маєте можливість безкоштовно відвідати одне пробне заняття. Тривалість такого заняття 30 хв.',
                  'Пробне заняття!'
                );
});

document.getElementById('copy-text').addEventListener('click', e => {
  let copyText = 'UA733052990000026005041031757';
  navigator.clipboard.writeText(copyText);
});
