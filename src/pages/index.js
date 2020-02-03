import React from "react"
import "rbx/index.css";
import { Content, Title, Button} from "rbx";
import Layout from "../components/layout"

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
      this.howdyPrice = this.howdyPrice + (2 * this.howdyCount);
      this.setState((state, props) => {
        this.state.note.push(<div><br/>Howdy! +1/sec</div>);
        return {
          //note: this.state.note2,
          note: this.state.note
        };
      });
    }
    this.setState({});
  }

  upgradeHowdy = () => {
    if (this.score >= 200){
      this.score -= 200;
      this.howdyGain = this.howdyGain * 2;
      this.upgradeHowdy1 = true;
    }
    this.setState({});
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
      <>
      <Button rounded size={"large"} onClick={this.sayHowdy}>Say Howdy!</Button><br/>
      <Button onClick={this.Howdy}>Make a Howdy ({this.howdyPrice})</Button>
      <Button onClick={this.getCowboy}>Hire a Cowboy ({this.cowboyPrice})</Button><br/>
      <Button disabled={this.upgradeHowdy1}onClick={this.upgradeHowdy}>Emphasize the "dee" in Howdy: Double Howdy gain. (200)</Button>
      </>
    )
  }

  getGain = () => {
    if (this.gain == 0){return (<gain0>{this.gain}</gain0>)}
    else if (this.gain < 5 && this.gain > 0){return (<gain1>{this.gain}</gain1>)}
    else if (this.gain < 20 && this.gain > 5){return (<gain2>{this.gain}</gain2>)}
    else if (this.gain < 50 && this.gain > 20){return (<gain3>{this.gain}</gain3>)}
    else if (this.gain < 100 && this.gain > 50){return (<gain4>{this.gain}</gain4>)}
    else if (this.gain < 300 && this.gain > 100){return (<gain5>{this.gain}</gain5>)}
    else if (this.gain < 1000 && this.gain > 300){return (<gain6>{this.gain}</gain6>)}
    else {return (<gain7>{this.gain}</gain7>)}
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
        <startValue>{this.score}</startValue><br/>
        Total How's Deed/second: {this.getGain()} <br/>
        {this.howdyCount + " Howdy's"}<br/>
        {this.cowboyCount + " Cowboy's"}<br/>
        {this.getButtons()}
        {this.state.note.map(
          (item, index) => (this.state.note[index])
        )}
      </div>
    )
  }
}
//<Title>E</Title>
//export default App

export default () => <Layout><App /></Layout>



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
