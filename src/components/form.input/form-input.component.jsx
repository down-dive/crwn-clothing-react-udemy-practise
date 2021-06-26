import './form-input.styles.scss';

const FormInput = ({ handleChange, lagel, ...otherProps }) => (
    <div className='group'>
        <input className='from-input' onChange={handleChange} {...otherProps} />
        {
            label ?
            (<label className=''>

            </label>)
            : null
        }
    </div>
)