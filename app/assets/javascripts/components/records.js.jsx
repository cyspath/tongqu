// @Records = React.createClass
//   render: ->
//     React.DOM.div
//       className: 'records'
//       React.DOM.h2
//         className: 'title'
//         'Records'
//
//
//         var Groups = React.createClass({
//           render: function () {
//             return <div>Hi {this.props.groups}</div>;
//           }
//         });


var Records = React.createClass({

  getDefaultProps: function () {
      return (
        data = "Nothing to see here."
      )
  },

  render: function () {
    return(
      <div className='all-records'>
        <h2>{this.props.data}</h2>
      </div>
    )
  }
})
