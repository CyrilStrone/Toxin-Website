import 'jquery'
import 'chart'

import './js/diagram.js'
import './js/dropdown.js'
import './js/expandable-checkbox.js'
import './js/expandable-checkboxes.js'
import './js/filter-date-dropdown.js'
import './js/jquery-select-step.js'
import './js/range-slider.js'
import './js/stepper.js'
import dropdown from './js/dropdown'

window.onclick = function(event) {
    if (!event.target.matches('.ui-kit__dropdown')) {
        var dropdowns = document.getElementsByClassName("ui-kit__dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {

            }
        }
    }
}