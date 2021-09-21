// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
global.jQuery = require('jquery');
require ('bootstrap');
require ('@fortawesome/fontawesome-free/js/all');

Rails.start()
Turbolinks.start()
ActiveStorage.start()
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@popperjs/core'

$('document').ready(function() {
    setTimeout(function() {
      $('#flash').slideUp();
    }, 5000);
  });