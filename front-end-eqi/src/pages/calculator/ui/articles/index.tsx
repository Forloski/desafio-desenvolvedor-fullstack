import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import DefaultArticle from './defaultArticle';
import { StyledContainer, StyledTextContainer } from './styles';

const FilteringButtons: React.FC = () => {
  return (
    <StylesProvider injectFirst>
      <StyledContainer>
        <StyledTextContainer>
          <h4>Title of Something</h4>
          <p>text explaining how something is something of somethings</p>
        </StyledTextContainer>
        <DefaultArticle>
          <h4>Title of Something</h4>
        </DefaultArticle>

        <DefaultArticle>
          <h4>Title of Something</h4>
        </DefaultArticle>
        <DefaultArticle>
          <h4>Title of Something</h4>
        </DefaultArticle>
        <DefaultArticle>
          <h4>Title of Something</h4>
        </DefaultArticle>
      </StyledContainer>
    </StylesProvider>
  );
};

export default FilteringButtons;
