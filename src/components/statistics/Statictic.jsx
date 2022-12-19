import {StatisticsContainer, StatisticsTitle, StatisticsParagraph, ButtonDiv, Button} from "./Statistics.styled";


export const Statisitc = ({good, neutral, bad }) => {
    return (
        <StatisticsContainer>
        <StatisticsTitle>Please leave feedback</StatisticsTitle>
        <ButtonDiv>
        <Button type="button">Good</Button>
        <Button type="button">Neutral</Button>
        <Button type="button">Bad</Button>
        </ButtonDiv>
        <StatisticsTitle>Statistics</StatisticsTitle>
        <StatisticsParagraph>Good: {good}</StatisticsParagraph>
        <StatisticsParagraph>Neutral: {neutral}</StatisticsParagraph>
        <StatisticsParagraph>Bad: {bad}</StatisticsParagraph>
        </StatisticsContainer>
    );
}

