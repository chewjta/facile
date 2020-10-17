import React from "react";
import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faqs";
import { HeaderContainer } from "../containers/header";
import { Feature, OptForm } from "../components";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited workouts, coding tutorials and more.
          </Feature.Title>
          <Feature.SubTitle>One price. At your fingertips.</Feature.SubTitle>
          <OptForm>
            <OptForm.Button>
              <Link to={ROUTES.SIGN_UP}>I am Ready</Link>
            </OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to start? Click to begin the grind.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
