
import {StatisticsContainer, StatisticsTitle, StatisticsParagraph} from "./Statistics.styled";




export const Statisitc = ({good, neutral, bad, total, positivePercentage}) => {

    return (
        <StatisticsContainer>
            <StatisticsTitle>Statistics</StatisticsTitle>
            <StatisticsParagraph>Good: {good}</StatisticsParagraph>
            <StatisticsParagraph>Neutral: {neutral}</StatisticsParagraph>
            <StatisticsParagraph>Bad: {bad}</StatisticsParagraph>
            <StatisticsParagraph>Total: {total}</StatisticsParagraph>
            <StatisticsParagraph>Positive feedback: {positivePercentage}%</StatisticsParagraph>
        </StatisticsContainer>
    )
}






