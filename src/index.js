import "./styles/styles.css";



import "./styles/image/ellipse.png";
import "./styles/image/image 3.1.png";
import "./styles/image/image4.png";
import "./styles/image/leftcalendar.png";
import "./styles/image/leftcalendar.svg";
import "./styles/image/Logo.svg";
import "./styles/image/star.png";
import "./styles/image/TOXIN.svg";
import "./styles/image/Vector-checkbox.png";
import "./styles/image/Vector-checkbox-strone.svg";

import "./styles/image/ui-icons_ffffff_256x240.png";
import "./styles/image/ui-icons_777620_256x240.png";
import "./styles/image/ui-icons_cc0000_256x240.png";
import "./styles/image/ui-icons_777777_256x240.png";
import "./styles/image/ui-icons_444444_256x240.png";



import 'jquery'
import 'chart'
import './js/checkbox-buttons'
import './js/date-dropdown'
import './js/date-dropdown-ru'
import './js/diagram'
import './js/dropdown'
import './js/jquery-select-step'
import './js/stepper'
import './js/expandable-checkbox'
import './js/expandable-checkboxes'
import './js/expandable-checkbox-list'
import './js/filter-date-dropdown'
import './js/radio-buttons'
import './js/range-slider'

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'doughnut',

    data: {

        datasets: [{
            data: [130, 65, 65, 0],
            backgroundColor: ['#FFBA9C', '#66D2EA', '#8BA4F9', '#3D4975 '],
            radius: 55,
            borderColor: '#FFFFFF',
            borderRadius: 15,
            cutout: 45,
            hoverBorderColor: '#FFFFFF'
        }]
    },
    options: {
        legend: {
            display: false,
            labels: {
                display: false
            }
        }
    },
});


$.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: 'Предыдущий',
    nextText: 'Следующий',
    currentText: 'Сегодня',
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    weekHeader: 'Не',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);

$(function() {
    $("#datepicker").datepicker();
});

function myFunctiondropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
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

$(function() {
    $("input").checkboxradio();
});

value = null;

if (value == null) {
    $("input").prop('disabled', true);
} else {
    $("input").prop('disabled', true);
}

$("#slider-range").slider({
    range: true,
    min: 0,
    max: 15000,
    values: [5000, 10000],
    slide: function(event, ui) {
        $("#amount").val("₽" + ui.values[0] + " - ₽" + ui.values[1]);
    }
});
$("#amount").val("₽" + $("#slider-range").slider("values", 0) +
    " - ₽" + $("#slider-range").slider("values", 1));

jQuery(document).ready(function() {
    jQuery(".select-step").each(function() {
        jQuery(this).selectStep({
            incrementLabel: "+",
            decrementLabel: "-",
            onChange: function(value) {
                console.log(value, "value");
            }
        });
    });
});

(function($) {
    $.fn.selectStep = function(vars) {
        /*
         * Function to get all plugin's variables
         * and element options on array
         */
        function getData(element, callback) {
            // Define default variables
            var defaultVars = {
                onChange: null,
                incrementLabel: "+",
                decrementLabel: "-"
            };
            var assign = Object.assign;
            // Get all plugin variables
            vars = assign({}, defaultVars, vars);
            var options = [];
            // Get select options
            var optElement = $(element).find("option");
            optElement.each(function(i, o) {
                var name = $(this).text();
                var value = $(this).attr("value");
                var selected = $(this).is(':selected');
                options = options.concat([{ name: name, value: value, selected: selected }]);
                if (i === optElement.length - 1) {
                    // Fire callback with select options and variables
                    callback(vars, options);
                }
            });
        }
        /*
         * Function to create fake element
         * to mock the select elements
         */
        function addFakeElements(element, callback) {
            getData(element, function(vars, options) {
                // Check if options is empty
                if (!options.length) {
                    return;
                }
                // Add class to select element
                jQuery(element).addClass("select-step");
                // Add fake elements
                var incrementLabel = vars.incrementLabel,
                    decrementLabel = vars.decrementLabel;
                // Find selected option on the select element
                var isSelected = [];
                options.map(function(opt, key) {
                    if (opt.selected) {
                        isSelected = isSelected.concat([{ key: key, name: opt.name, value: opt.value }]);
                    }
                    return false;
                });
                var selectedOptionName = isSelected.length ? isSelected[0].name : null;
                var selectedOptionKey = isSelected.length ? isSelected[0].key : null;
                var selectedOptionvalue = isSelected.length ? isSelected[0].value : null;
                // Create the fake element
                var fakeElement = "<div class=\"jquery-select-step-element\">\n                  <div class=\"decrementStep\">" + decrementLabel + "</div>\n                  <div class=\"selectStepValue\" data-key=\"" + selectedOptionKey + "\" data-value=\"" + selectedOptionvalue + "\">\n                    " + selectedOptionName + "\n                  </div>\n                  <div class=\"incrementStep\">" + incrementLabel + "</div>\n                </div>";
                // Wrap select to a div
                var parentElement = $(element)
                    .wrap("<div class=\"jquery-select-step\"></div>")
                    .parent();
                // Append the fake element
                parentElement.append(fakeElement);
                // Fire callback when finished
                callback(vars, options, parentElement);
            });
        }
        /*
         * Function to check if variable is function
         */
        function isFunction(functionToCheck) {
            var getType = {};
            return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
        }
        /*
         * Function to handle the increment and decrement of the plugins
         * it fire onChange event and change the select value
         */
        function handleChange(element, vars, options, type) {
            var selectStepValue = $(element).find(".selectStepValue"); // Get the element that show the value
            var key = parseInt($(selectStepValue).attr("data-key")); // Get current active key
            var onChange = vars.onChange; // Get user onChange event
            // Check if the key is not less than 0 or bigger than select options length
            if (type === "decrement" && key <= 0 || type === "increment" && key >= options.length - 1) {
                return;
            }
            // Get the new key
            var newKey = (type === "decrement" ? (key - 1) : (key + 1));
            var _a = options[newKey],
                name = _a.name,
                value = _a.value; // Get name and value of the new key
            // Change value
            selectStepValue.text(name);
            selectStepValue.attr("data-key", newKey);
            selectStepValue.attr("data-value", value);
            // Change select element selected options
            jQuery(element).find(".select-step option").removeAttr('selected');
            jQuery(element).find(".select-step option:eq(" + newKey + ")").attr('selected', true);
            // Fire onChange event
            if (onChange !== null && isFunction(onChange)) {
                onChange({
                    key: newKey,
                    name: name,
                    value: value
                });
            }
        }
        /*
         * Function to initialize the plugins
         */
        function init(element) {
            addFakeElements(element, function(vars, options, parentElm) {
                // Listen to change event
                $(parentElm).on("click", ".decrementStep", function() {
                    handleChange(parentElm, vars, options, "decrement");
                });
                $(parentElm).on("click", ".incrementStep", function() {
                    handleChange(parentElm, vars, options, "increment");
                });
            });
        }
        init(this);
        return this;
    };
}(jQuery));