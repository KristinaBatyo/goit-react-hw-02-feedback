import { Statisitc } from 'components/statistics/Statictic.jsx';
import { Component } from 'react';
import { FeedbackContainer} from './Feedback.styled.jsx';
import { ButtonList } from 'components/options/FeedbackOptions.jsx';
import { Notification } from 'components/notification/Notification.jsx';
import { Sections } from 'components/sections/sections.jsx';


export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleIncrement = (e) => {
        const name = e.target.name;
        this.setState(prevState => ({
            [name]: prevState[name] + 1,
        }));
    };

    totalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    positivePercentage = () => {
        return parseInt((this.state.good / this.totalFeedback()) * 100);
    };


    render () {
    return (
        <FeedbackContainer onClick={this.handleIncrement}>
            <Sections title="Please leave feedback"/>
            <ButtonList />
            {this.totalFeedback()? (            <Statisitc good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.totalFeedback()} positivePercentage={this.positivePercentage()}/>)
             : (<Notification message="There is no feedback"></Notification>)}

        </FeedbackContainer>

    );
}
}
