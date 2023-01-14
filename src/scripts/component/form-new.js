class Form extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <form>
        <div class="form-grid">
            <input type="text" name="name" id="name" placeholder="Nama" class="form-element" />
            <input type="email" name="email" id="email" placeholder="Alamat Email" class="form-element" />
            <textarea aria-label="isi pesan anda" name="message" id="message" placeholder="isi pesan anda" class="form-area"></textarea>
        </div>
           <div class="right-align">
              <button type="submit" aria-label="kirim pesan" >kirim pesan</button>
          </div>
    </form> `;
  }
}

customElements.define('form-new', Form);
