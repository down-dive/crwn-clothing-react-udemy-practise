import './sign-in.styles.scss'

class SignIn extends React.compoment{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    
    handleSubmit = event => {
        event.preventDefault();

        this.state({email: '', password: ''})

    }

    render() {
        <div className='sign-in'>
            <h2> I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={}>
                <input name='email' type='email' value={this.email} required />
                <label>Email</label>
                <input name='password' type='password' value={this.password} required />
                <label>Password</label>

                <input type="submit" value='Submit Form' />
            </form>

        </div>
    }
}