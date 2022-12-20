
import { ButtonStyled, ButtonDiv } from "./FeedbackOptions.styled";


// export const Button = ()  => {
//     <ButtonStyled type="button" name="good" onClick={this.handleIncrement}>Good</ButtonStyled>
//     <ButtonStyled type="button" name="neutral" onClick={this.handleIncrement}>Neutral</ButtonStyled>
//     <ButtonStyled type="button" name="bad" onClick={this.handleIncrement}>Bad</ButtonStyled>
// }


export const ButtonList = ()  => {
    return (
    <ButtonDiv>
    <ButtonStyled type="button" name="good">Good</ButtonStyled>
    <ButtonStyled type="button" name="neutral">Neutral</ButtonStyled>
    <ButtonStyled type="button" name="bad">Bad</ButtonStyled>
    </ButtonDiv>
    )
}
