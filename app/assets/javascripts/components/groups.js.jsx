// var HelloWorld = React.createClass({
//   propTypes: {
//     name: React.PropTypes.string,
//     isPerson: React.PropTypes.bool
//   },
//
//   getDefaultProps: function () {
//       return {
//         name: "Mike"
//       }
//   },
//
//   getInitialState: function() {
//     return {
//       value: 1
//     }
//   },
//
//   _addByOne: function() {
//     console.log('click');
//     this.setState({
//       value: this.state.value + 1
//     })
//   },
//
//   componentDidMount: function() {
//     // // only runs once, only after component has mounted
//     // setInterval(function() {
//     //   this.setState({
//     //     value: this.state.value + 1
//     //   })
//     // }.bind(this), 500)
//   },
//
//   handleClick: function() {
//     AppActions.addItem("ITEM: ABC")
//   },
//
//   render: function() {
//     var greeting = "World";
//
//     if (this.props.isPerson) {
//       greeting = (<Person name={this.props.name} />)
//     }
//
//     return (
//       <div>
//         <h1>hello {greeting}</h1>
//         {this.state.value}
//         <button onClick={this._addByOne}>Click Me</button>
//
//         <button onClick={this.handleClick}>Add Item</button>
//       </div>
//     )
//   }
//
// })
//
//
// var Person = React.createClass({
//   getDefaultProps: function () {
//       return {
//         name: "Mike"
//       }
//   },
//
//   propTypes: {
//     name: React.PropTypes.string
//   },
//
//   render: function() {
//     return (
//       <span>{this.props.name}</span>
//     )
//   }
//
// })

var Groups = React.createClass({

  render: function() {
    groups = JSON.parse(this.props.groups)

    return (
      <div className='all-groups'>
        {
          groups.map(function(group) {
            return <Group key={group.id} data={group} />
          })
        }
      </div>
    )
  }
});

var Group = React.createClass({
  render: function() {
    return (
      <div className="each-group">
        <p>{this.props.data.name}</p>
        <p>{this.props.data.purpose}</p>

      </div>
    )
  }
});
