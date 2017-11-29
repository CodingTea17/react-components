class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: "Put your life in the hands of a computer.",
      options: props.options
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handlePick() {
    const randNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randNum])
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add option';
    } else if (this.state.options.indexOf(option) > -1 ) {
      return 'This option has already exists';
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      }
    })
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  render() {
    // const title = "Indecision App";
    // const subtitle = "Put your life in the hands of a computer.";
    // const options = ['Eat ice cream', 'Do homework', 'Watch Netflix'];
    return (
      <div>
        <Header title={this.state.title} subtitle={this.state.subtitle}/>
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
          />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
}

// I am a component
// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <p>{this.props.subtitle}</p>
//       </div>
//     );
//   }
// }

// Stateless functional component
const Header = (props) => {
  return (
    <div>
      <h1>{ props.title }</h1>
      { props.subtitle && <h2>{ props.subtitle }</h2> }
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision'
}

// Me too
// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button
//           disabled={!this.props.hasOptions}
//           onClick={this.props.handlePick}
//         >
//           What Should I Do?
//         </button>
//       </div>
//     );
//   }
// }

// Stateless functional component
const Action = (props) => {
  return (
    <div>
      <button
        disabled={!props.hasOptions}
        onClick={props.handlePick}
      >
        What Should I Do?
      </button>
    </div>
  );
}

// Me three
// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//         <ol>
//           {
//             // Returns each option into a list element with an Option component recieving a prop of the value of that option
//             this.props.options.map((option) => {
//               return <li key={option}><Option option={option} /></li>
//             })
//           }
//         </ol>
//       </div>
//     );
//   }
// }

// Stateless functional component
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      <ol>
        {
          props.options.map((option) => {
            return <li key={option}><Option option={option} /></li>
          })
        }
      </ol>
    </div>
  );
}

// Subcompoent of Options
// class Option extends Options {
//   render() {
//     return (
//       <div>
//         <p>{this.props.option}</p>
//       </div>
//     );
//   }
// }

// Stateless functional component
const Option = (props) => {
  return (
    <div>
      <p>{props.option}</p>
    </div>
  );
}

// I like ice cream
class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option)

    e.target.elements.option.value = '';

    this.setState(() => {
      return {
        error // ES6 implies values with same name as key
      };
    });
  }

  render() {
    return (
      <div>
        {
          this.state.error && <p>{this.state.error}</p>
        }
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp options={["opt 1", "opt 2"]}/>, document.getElementById('app'))
