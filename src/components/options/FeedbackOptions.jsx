
import { ButtonStyled, ButtonDiv } from "./FeedbackOptions.styled";



export const ButtonList = ()  => {
    return (
    <ButtonDiv>
    <ButtonStyled type="button" name="good">Good</ButtonStyled>
    <ButtonStyled type="button" name="neutral">Neutral</ButtonStyled>
    <ButtonStyled type="button" name="bad">Bad</ButtonStyled>
    </ButtonDiv>
    )
}
