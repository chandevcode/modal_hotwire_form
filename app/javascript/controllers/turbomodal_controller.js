import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="turbomodal"
export default class extends Controller {
  // connect() {
  //   console.log("hello ini turbomodal")
  // }

  submitEnd(e) {
    if (e.detail.success) {
      this.hideModal()
    }

    // console.log(e.detail.sucess)
  }

  hideModal() {
    this.element.remove()
  }
}
