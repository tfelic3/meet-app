(this["webpackJsonpmeet-app"]=this["webpackJsonpmeet-app"]||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(20),r=n.n(i),c=(n(27),n(3)),o=n(4),l=n(6),u=n(5),d=(n(28),n(0)),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={details:!1},e.changeDetails=function(){e.setState({details:!0})},e.hideDetails=function(){e.setState({details:!1})},e.showDetails=function(){return!1===e.state.details?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"summary",children:e.props.event.summary})," ",Object(d.jsx)("p",{className:"dateTime",children:e.props.event.end.dateTime})," ",Object(d.jsx)("p",{className:"timezone",children:e.props.event.originalStartTime.timeZone}),Object(d.jsx)("button",{className:"details-btn",onClick:e.changeDetails,children:"Show Details"})]}):Object(d.jsxs)(d.Fragment,{children:[" ",Object(d.jsx)("p",{className:"summary",children:e.props.event.summary}),Object(d.jsx)("p",{className:"dateTime",children:e.props.event.end.dateTime})," ",Object(d.jsx)("p",{className:"timezone",children:e.props.event.originalStartTime.timeZone})," ",Object(d.jsxs)("div",{className:"extraDetails",children:[Object(d.jsx)("p",{className:"description",children:e.props.event.description})," ",Object(d.jsx)("p",{className:"location",children:e.props.event.location}),Object(d.jsx)("a",{href:e.props.event.htmlLink,children:"Link here"})," "]}),Object(d.jsx)("button",{className:"details-btn",onClick:e.hideDetails,children:"Hide Details"})]})},e}return Object(o.a)(n,[{key:"render",value:function(){this.props.event;return Object(d.jsx)("div",{className:"event",children:this.showDetails()})}}]),n}(a.Component),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("ul",{className:"EventList",children:this.props.events.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(p,{event:e})},e.id)}))})})}}]),n}(a.Component),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={query:"",suggestions:[]},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:a})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"CitySearch",children:[Object(d.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})},placeholder:"Type your city"}),Object(d.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(d.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={numberOfEvents:32},e.changeInput=function(t){var n=t.target.value;e.setState({numberOfEvents:n}),e.props.updateEvents(null,n),n<1||n>32?e.setState({infoText:"Select number of events from 1 to 32"}):e.setState({infoText:""})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"numberOfEvents",children:[Object(d.jsx)("label",{children:"Number of Events:"}),Object(d.jsx)("input",{type:"number",id:"numberOfEvents input",value:this.state.numberOfEvents,onChange:this.changeInput})]})}}]),n}(a.Component),v=n(7),f=n.n(v),b=n(8),g=(n(22),n(21),[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}]),O=(n(49),function(){var e=Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),y=(n(50),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={events:[],locations:[]},e.updateEvents=function(t){O().then((function(n){var a="all"===t?n:n.filter((function(e){return e.location===t}));e.setState({events:a})}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,O().then((function(t){var n=t.map((function(e){return e.location}));e.mounted&&e.setState({events:t,locations:n})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("p",{children:"Hello Friends"}),Object(d.jsx)(m,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(d.jsx)(j,{updateEvents:this.updateEvents}),Object(d.jsx)(h,{events:this.state.events})]})}}]),n}(a.Component)),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),x()}},[[51,1,2]]]);
//# sourceMappingURL=main.96e84ce3.chunk.js.map