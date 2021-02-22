import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Supertime extends Component {
  constructor(props) {
    super(props);
    var timeShow = this.props.trackone;
    var timeHide = this.props.tracktwo;
    var pageindex = this.props.trackthree;

    var now = new Date().getTime();
    var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

    this.state = {
      nowz: now,
      countdz: countDownDate,
      minutez: 0,
      secondz: 0,
      microsecondz: 0,
      showTime: timeShow,
      hideTime: timeHide,
      stepz: pageindex,
    };
  }

  componentDidMount() {
    var { nowz, countdz, minutez, secondz, stepz } = this.state;
    var that = this;
    // Set the date we're counting down to
    // var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countdz - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      var microseconds = Math.floor((distance % 1000) / 100);

      // Display the result in the element with id="demo"
      //  document.getElementById("demo").innerHTML =
      //    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      //console.log(this.props);
      console.log(stepz);
      that.setState((state) => {
        return {
          minutez: minutes,
          secondz: seconds,
          microsecondz: microseconds,
        };
      });

      // return fancytime;

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        //document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 50);
  }

  render() {
    var {
      minutez,
      secondz,
      microsecondz,
      showTime,
      hideTime,
      stepz,
    } = this.state;
    console.log(stepz);

    const fancytime = (
      <div id="clocktime">
        {minutez} :: {secondz} :: {microsecondz}
      </div>
    );
    return (
      <div>
        {!this.props.trackone &&
        !this.props.tracktwo &&
        this.props.trackthree == 5
          ? fancytime
          : null}
      </div>
    );
  }
}

export default Supertime;
