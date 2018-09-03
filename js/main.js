// Menú móvil

$('.mob-menu-trigger').on('click tap', function() {
  $('.mob-menu').toggleClass('open')
});

// Formulario

var formActivation = function() {  
  $('input').on('change', function() {
    var inputElement = $(this);
    if (inputElement.val().length) {
      inputElement.addClass('populated');
    } else {
      inputElement.removeClass('populated');
    }
  });

  $('#tipo').on('change', function() {
    var selectElement = $(this);

    if (selectElement.val() == 'web-design') {
      $('.form-visible').removeClass('form-visible');
      $('.visible-web-design').addClass('form-visible');
    }
    if (selectElement.val() == 'app-design') {
      $('.form-visible').removeClass('form-visible');
      $('.visible-app-design').addClass('form-visible');
    }
    if (selectElement.val() == 'development') {
      $('.form-visible').removeClass('form-visible');
      $('.visible-development').addClass('form-visible');
    }
  })

  // Envío del formulario
  
  function handleSubmit(e) {
    if($('#contact')[0].checkValidity()){
      e.preventDefault();
      window.location.replace("#gracias")
    } 
  }

  $('#contact').on('submit', function(e) {
    handleSubmit(e);
  });
  $('#enviar').on('click tap', function(e) {
    handleSubmit(e);
  });
};

// Cargador de partials

var loadPartial = function(partialUrl) {
  var partialContainer = $('#main-content');
  partialContainer.empty();
  partialContainer.load(partialUrl, () => {
    // Cerramos menu en el movil para que no se quede en medio
    $('.mob-menu').removeClass('open');
    
    // Activamos los eventos del formulario
    if(partialUrl == 'partials/contacto.html') {
      formActivation();
    }
  })
}


// Rutas

var app = $.sammy(function() {

	this.get('/', function() {
    loadPartial('partials/home.html');
  });
	this.get('/#proyectos', function() {
    loadPartial('partials/proyectos.html');
  });
	this.get('/#nosotros', function() {
    loadPartial('partials/nosotros.html');

  });
	this.get('/#contacto', function() {
    loadPartial('partials/contacto.html');
  });
	this.get('/#gracias', function() {
    loadPartial('partials/gracias.html');
  });

  // Proyectos

  this.get('/#proyectos/infojobs', function() {
    loadPartial('partials/proyectos/infojobs.html');
  });
  
  this.get('/#proyectos/computerhoy', function() {
    loadPartial('partials/proyectos/computerhoy.html');
  });
  
});

app.run();