import React from "react"
import "rbx/index.css";
import { Content } from "rbx";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {note: []};
    /*
    this.state = {
      note: [],
      howdyCount: 0,
    }
    */
    this.score = 250;
    this.gain = 0;
    this.howdyCount = 0;
    this.howdyPrice = 10;
    this.howdyGain = 1;
    this.cowboyPrice = 100;
    this.cowboyCount = 0;
    this.cowboyGain = 8;
    this.hps = 0;

    this.upgradeHowdy1 = false;
  }

  Howdy = () => {
    //variable = "Howdy!";
    //console.log(this.state.note);
    //this.tick()
    if (this.score >= this.howdyPrice){
      this.score = this.score - this.howdyPrice;
      this.howdyCount = this.howdyCount + 1;
      this.howdyPrice = this.howdyPrice + (7 * this.howdyCount);
      this.setState((state, props) => {
        this.state.note.push(<div><br/>Howdy! +1/sec</div>);
        return {
          //note: this.state.note2,
          note: this.state.note
        };
      });
    }
  }

  upgradeHowdy = () => {
    if (this.score >= 200){
      this.score -= 200;
      this.howdyGain = this.howdyGain * 2;
      this.upgradeHowdy1 = true;
    }

  }

  sayHowdy = () => {
    this.score = this.score + 1;
    this.setState({});
  }

  getCowboy = () => {
    if (this.score >= this.cowboyPrice){
      this.score = this.score - this.cowboyPrice;
      this.cowboyCount = this.cowboyCount + 1;
      this.cowboyPrice = this.cowboyPrice + (35 * this.cowboyCount);
      this.setState((state, props) => {
        this.state.note.push(<div><br/>Cowboy here! +8/sec</div>);
        return {
          note: this.state.note
        };
      });
    }
  }

  getButtons = () => {
    return (
      <div>
      <button onClick={this.sayHowdy}>Say Howdy!</button><br/>
      <button onClick={this.Howdy}>Make a Howdy ({this.howdyPrice})</button>
      <button onClick={this.getCowboy}>Hire a Cowboy ({this.cowboyPrice})</button><br/>
      <button disabled={this.upgradeHowdy1}onClick={this.upgradeHowdy}>Emphasize the "dee" in Howdy: Double Howdy gain. (200)</button>}
      </div>
    )
  }

  componentDidMount() {
	  this.timerID = setInterval(
  		() => this.tick(),
  		1000
	  );
  }

  componentWillUnmount() {
	  clearInterval(this.timerID);
	}

  tick() {
    this.gain = (this.howdyCount * this.howdyGain) + (this.cowboyCount * this.cowboyGain);
	  this.score = this.score + this.gain
    this.setState({});
	}

  render(){
    return (
      <div>
        <h1>{this.score}</h1><br/>
        Total How's Deed/second: {this.gain}
        <p>{this.howdyCount + " Howdy's"}</p>
        {this.cowboyCount + " Cowboy's"}<br/>

        {this.state.note.map(
          (item, index) => (this.state.note[index])
        )}
      </div>
    )
  }
}

//export default App

export default () => <App />



/*
class array {
  arrayPrefixer (func(...)){
    newarray[]
    foreach item in this{
        newarray.push(func(...), item.thing, item.index)
    }
  }
}

//            0    1    2
somearray = ["a", "b", "c"]


  foobar("a", 0)
  foobar("b", 1)
  foobar("c", 2)

somearray.map(
  item <-- $0
  index <-- $1
  function($0, $1, $2, ...)
  foobar(title, index, item)
)
}


thingDoer(prefix, thing, index){
  return prefix+thing
}

main{
  array{1,2,3}
  array.arrayPrefixer(thingDoer("Pre-", $0, $1))
}

  createcars mycommand [red, 6seats, tesla, modelx]
  mycommand


  mycommand
  -> help
  mycommand create cars
  mycommand reset

  function main(x, y) {
    x <-- my command
    y <-- parameter for the command
  }

  foobar(thing, index) {
    print(thing + "is at index: " + index)
  }

*/
