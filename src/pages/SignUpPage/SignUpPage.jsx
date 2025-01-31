// import { useSelector } from 'react-redux';
// import {selectIsLogin} from '../../redux/auth/authSelectors'
// import toast from 'react-hot-toast';
import { SignUpForm } from '../../components/SignUpPageComponents/SignUpform/SignUpForm';
import { Container } from '../../components/GlobalStyled/container.styled';
import { H2, RouteLink, FormWrapper, SignUpSection } from './SignUpPage.styled';
const SignUpPage = () => {
  // const isLogin = useSelector(selectIsLogin);

  // isLogin
  //   ? toast.success('Successfully toasted!')
  //   : toast.error('Something was wrong! Try again!');
  return (
    <SignUpSection>
      <Container>
        <H2>Sign Up</H2>
        <FormWrapper>
          <SignUpForm />
          <RouteLink to="/signin">Sign In</RouteLink>
        </FormWrapper>
      </Container>
    </SignUpSection>
  );
};

export default SignUpPage;
