import LoginForm from '@/components/forms/LoginForm'
import LoginPageStyles from './loginPage.module.css'
import ToggleTheme from '@/components/layouts/ToggleTheme'
import Logo from '@/components/layouts/Navbar/Logo'

const Login = () => {
  return (
    <div className={LoginPageStyles.login_page}>
      <div className={LoginPageStyles.toogle_theme}>
        <ToggleTheme />
      </div>
      <LoginForm />
    </div>
  )
}

export default Login