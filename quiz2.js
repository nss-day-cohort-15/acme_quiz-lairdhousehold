$(document).ready(function (){
  $('body').html(`
  <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Blow Life to Bits</a>
  </div>
    <ul class="nav navbar-nav">
      <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">Choose Your Product
             <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a  href="#" id="fireworx">Fireworks</a></li>
            <li><a  href="#" id="destrux">Destruction</a></li>
          </ul>
        </li>
      </ul>
      <div class="bombArea">
      </div>
    </div>
  </nav>
`)})

