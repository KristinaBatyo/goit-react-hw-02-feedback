import { Component } from "react";
import {StatisticsContainer, StatisticsTitle, StatisticsParagraph} from "./Statistics.styled";


export class Statisitc extends Component {
    render () {
        const { good, neutral, bad } = this.props;
    return (
        <StatisticsContainer>
        <StatisticsTitle>Statistics</StatisticsTitle>
        <StatisticsParagraph>Good: {good}</StatisticsParagraph>
        <StatisticsParagraph>Neutral: {neutral}</StatisticsParagraph>
        <StatisticsParagraph>Bad: {bad}</StatisticsParagraph>
        </StatisticsContainer>
    );
} 
}