
$(document).ready(init)

function init() {
  renderProjs()
  renderModal()
}
$('.btn-contact').click(contactMe)

function renderProjs() {
    const projs = getProjs()
    const strHTMLs = projs.map(proj => {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${proj.id}">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/${proj.id}.png" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">${proj.title}</p>
          </div>
        </div>`
            })
    $('.projects-container').html(strHTMLs)
}

function renderModal() {
  const projs = getProjs()
  const strHTMLs = projs.map(proj => {
      return `<div class="portfolio-modal modal fade" id="portfolioModal${proj.id}" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                  <!-- Project Details Go Here -->
                  <h2>${proj.name}</h2>
                  <h4 class="h4 m-5">${proj.desc}</h4>
                  <ul class="list-inline">
                    <li>Date: January 2017</li>
                    <li>Client: Threads</li>
                    <li>Category: Illustration</li>
                  </ul>
                  <a href="https://mayanfeldbaum.github.io/${proj.id}/" class="btn btn-primary btn-info" role="button" target="_blank">Check it out!</a>
                  <button class="btn btn-primary btn-projectLink" data-dismiss="modal" type="button">
                      <i class="fa fa-times"></i>
                      Close Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`
  })
  $('.modals').html(strHTMLs)
}

function contactMe(){
  const elEmail = document.querySelector('input[id="inputEmail"]')
  const email = elEmail.value
  const elSubject = document.querySelector('input[id="inputSubject"]')
  const subject = elSubject.value
  const elMsg = document.querySelector('input[id="inputMessage"]')
  const msg = elMsg.value+ email

  const queryStringParams= `to=mayan.lemberg@gmail.com&su=${subject}&body=${msg}&bcc=someone.else@example.com`
  const newUrl= 'https:mail.google.com/mail/?view=cm&' +queryStringParams
  window.open(newUrl)
}
