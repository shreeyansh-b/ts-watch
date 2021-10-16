"use strict";
/**
 * @class TimeModel
 *
 * Manages the data of the application.
 */
var TimeModel = /** @class */ (function () {
    function TimeModel() {
        var _this = this;
        this.setCurrentTime = function () {
            var currentDate = new Date();
            _this.currentDate = currentDate;
            _this.currentSeconds = _this.currentDate.getSeconds();
            _this.currentMinutes = _this.currentDate.getMinutes();
            _this.currentHours = _this.currentDate.getHours();
        };
        setInterval(function () { return _this.setCurrentTime(); });
    }
    return TimeModel;
}());
/**
 * @class View
 *
 * Visual representation of the model.
 */
var View = /** @class */ (function () {
    function View() {
        this.secondsHand = document.querySelector("#seconds-hand");
        this.minutesHand = document.querySelector("#minutes-hand");
        this.hoursHand = document.querySelector("#hours-hand");
    }
    return View;
}());
/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
var Controller = /** @class */ (function () {
    // 6deg = 1 unit;
    // initial angle is -90deg to make time to 00:00:00
    function Controller(model, view) {
        this.model = model;
        this.view = view;
        console.log({ model: model });
    }
    Controller.prototype.setSeconds = function () {
        this.view.secondsHand.style.transform = "rotate(" + (6 * this.model.currentSeconds - 90) + "deg)";
    };
    Controller.prototype.setMinutes = function () {
        this.view.minutesHand.style.transform = "rotate(" + (6 * this.model.currentMinutes - 90) + "deg)";
    };
    Controller.prototype.setHours = function () {
        this.view.hoursHand.style.transform = "rotate(" + (6 * (this.model.currentHours - 12) - 90) + "deg)";
    };
    Controller.prototype.updateTimeInView = function () {
        var _this = this;
        setInterval(function () {
            _this.setSeconds();
            _this.setMinutes();
            _this.setHours();
        });
    };
    return Controller;
}());
var app = new Controller(new TimeModel(), new View());
app.updateTimeInView();
//# sourceMappingURL=index.js.map