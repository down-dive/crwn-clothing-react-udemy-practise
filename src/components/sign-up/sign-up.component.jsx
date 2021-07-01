import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert("passwords don't match!");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            createUserProfileDocument(user, { displayName });
        } catch (error) {
            console.error(error)
        }
    }
    render() {
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name='displayName'
                        value={displayName}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type="email"
                        name='email'
                        value={email}
                        label='Email'
                        required
                    />
                    <FormInput
                        type="passworkt"
                        name='password'
                        value={password}
                        label='Password'
                        required
                    />
                    <FormInput
                        type="password"
                        name='confirmPassword'
                        value={confirmPassword}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;

