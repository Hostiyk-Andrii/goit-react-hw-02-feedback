import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import LeaveFeedback from './onLeaveFeedback'

class Statistics extends Component {
  state = { good: 0, neutral: 0, bad: 0, total: 0, percentage:0,visible: false };
  handelGood = () => {
  
   
    this.setState(prevState => {
      return { good: prevState.good + 1, visible: true };
      
    });
   
      this.countTotalFeedback();
  };
  
  handelNeutral = () => {
   
    
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1, visible: true };
    });
     this.countTotalFeedback();
  };
  handelBad = () => {
 
    this.setState(prevState => {
      return { bad: prevState.bad + 1, visible: true };
    });
       this.countTotalFeedback();
  };

  countTotalFeedback = () => {
     
    this.setState(prevState => {
      return { total: prevState.total + 1 };
    });
    this.countPositiveFeedbackPercentage();
  };
  countPositiveFeedbackPercentage = () => {
    this.setState((prevState) => {
      console.log('good :>> ', prevState.good);
      console.log('total :>> ', this.state.total);
      return { percentage: ((prevState.good+prevState.neutral )/ prevState.total) * 100 };
    
    });
  };

  render() {
    return (
      <div>
        <div>
          <h3>Please leave feedback</h3>

          <FeedbackOptions
            onGood={this.handelGood}
            onNeutral={this.handelNeutral}
            onBad={this.handelBad}
          />
          {/* <div>
            <button type="button" onClick={this.handelGood}>
              Good
            </button>
            <button type="button" onClick={this.handelNeutral}>
              Neutral
            </button>
            <button type="button" onClick={this.handelBad}>
              Bad
            </button>
          </div> */}

          <h3>Statistics</h3>
          <p>{this.state.visible ? '' : 'No feedback given'}</p>
          {this.state.visible && (
            <LeaveFeedback
              Good={this.state.good}
              Neutral={this.state.neutral}
              Bad={this.state.bad}
              Total={this.state.total}
              Percentage={this.state.percentage}
            />
          )}

          {/* <div>
            <p>
              Good: <span>{this.state.good}</span>
            </p>
            <p>
              Neutral: <span>{this.state.neutral}</span>
            </p>
            <p>
              Bad: <span>{this.state.bad}</span>
            </p>
          </div> */}
        </div>
      </div>
    );
  }
}
export default Statistics;
