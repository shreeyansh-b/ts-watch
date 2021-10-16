/**
 * @class TimeModel
 *
 * Manages the data of the application.
 */
class TimeModel {
  currentSeconds: number;
  currentMinutes: number;
  currentHours: number;
  currentDate: Date;
  constructor() {
    setInterval(() => this.setCurrentTime());
  }
  setCurrentTime = () => {
    const currentDate = new Date();
    this.currentDate = currentDate;
    this.currentSeconds = this.currentDate.getSeconds();
    this.currentMinutes = this.currentDate.getMinutes();
    this.currentHours = this.currentDate.getHours();
  };
}

/**
 * @class View
 *
 * Visual representation of the model.
 */

class View {
  secondsHand: HTMLElement;
  minutesHand: HTMLElement;
  hoursHand: HTMLElement;
  constructor() {
    this.secondsHand = document.querySelector("#seconds-hand")!;
    this.minutesHand = document.querySelector("#minutes-hand")!;
    this.hoursHand = document.querySelector("#hours-hand")!;
  }
}

/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */

class Controller {
  // 6deg = 1 unit;
  // initial angle is -90deg to make time to 00:00:00
  constructor(private model: TimeModel, private view: View) {
    console.log({ model });
  }
  setSeconds() {
    this.view.secondsHand.style.transform = `rotate(${
      6 * this.model.currentSeconds - 90
    }deg)`;
  }
  setMinutes() {
    this.view.minutesHand.style.transform = `rotate(${
      6 * this.model.currentMinutes - 90
    }deg)`;
  }
  setHours() {
    this.view.hoursHand.style.transform = `rotate(${
      6 * (this.model.currentHours - 12) - 90
    }deg)`;
  }
  updateTimeInView() {
    setInterval(() => {
      this.setSeconds();
      this.setMinutes();
      this.setHours();
    });
  }
}

const app = new Controller(new TimeModel(), new View());
app.updateTimeInView();
