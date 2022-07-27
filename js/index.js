(function() {
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
})();

// Modal window

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
            <button type="button" class="acc-icon float-end" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-center">
            <h3>${title}</h3>
            <h5>${description}</h5>
            <form class="col" action="https://formsubmit.co/fb5e769dd4f4789a56945869fd2060ff" method="POST">
              <!-- Honeypot -->
              <input type="text" name="_honey" class="d-none">
              <!-- Disable Captcha -->
              <input type="hidden" name="_captcha" value="false">
              <!-- Subject -->
              <input type="hidden" name="_subject" value="${subject}">
              <!-- Success page -->
              <input type="hidden" name="_next" value="">


              <div>
                <input type="text" class="form-control input-item" name="Name" placeholder="Ім’я" required>
                <input type="text" class="form-control input-item" name="Phone" placeholder="Телефон" required>
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
  var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
  modal.show();
}
