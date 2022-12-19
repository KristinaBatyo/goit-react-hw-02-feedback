import { Statisitc } from 'components/statistics/Statictic.jsx';
import { Component } from 'react';
import {FeedbackTitle, FeedbackContainer, ButtonDiv, Button} from './FeedbackOptions.styled.jsx';




export class FeedbackOptions extends Component {
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
        <FeedbackContainer>
            <FeedbackTitle>Please leave feedback</FeedbackTitle>
            <ButtonDiv>
                <Button type="button" name="good" onClick={this.handleIncrement}>Good</Button>
                <Button type="button" name="neutral" onClick={this.handleIncrement}>Neutral</Button>
                <Button type="button" name="bad" onClick={this.handleIncrement}>Bad</Button>
            </ButtonDiv>
            <Statisitc good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.totalFeedback()} positivePercentage={this.positivePercentage()}/>
        </FeedbackContainer>

    );
}
}