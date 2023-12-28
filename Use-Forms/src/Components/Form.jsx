import React from 'react';
import '../App.css';
import {useForm} from "react-hook-form"

export default function Form() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors, isSubmitSuccessful, isSubmitted },
    } = useForm();

    console.log(watch());

    const formSubmitHandler = (data) => {
               // We can apply all the logics here
        console.log('data:', data);
    };

    return (
        <div className='form-container'>
            <fieldset>
                <legend>Fill this form</legend>
                <form onSubmit={handleSubmit(formSubmitHandler)}>
                    {isSubmitSuccessful && (
                        <div className='success'>
                            <p>Registration Successful</p>
                        </div>
                    )}

                    <label style={{ color: 'black' }}>First Name:</label>
                    <input
                        type='text'
                        name='firstName'
                        {...register('firstName', {
                            required: 'Please provide the name',
                            minLength: {
                                value: 4,
                                message: 'Minimum four characters required',
                            },
                        })}
                    />
                    {errors.firstName && <p className='err'>{errors.firstName.message}</p>}

                    <label style={{ color: 'black' }}>Last Name:</label>
                    <input
                        type='text'
                        name='lastName'
                        {...register('lastName', {
                            required: 'Fill last name',
                            minLength: {
                                value: 4,
                                message: 'Minimum 4 characters are required.',
                            },
                        })}
                    />
                    {errors.lastName && <p className='err'>{errors.lastName.message}</p>}

                    <label style={{ color: 'black' }}>Email:</label>
                    <input
                        type='email'
                        name='email'
                        {...register('email', {
                            required: 'Enter email',
                            minLength: {
                                value: 5,
                                message: 'Type valid email',
                            },
                        })}
                    />
                    {errors.email && <p className='err'>{errors.email.message}</p>}

                    <label style={{ color: 'black' }}>Password:</label>
                    <input
                        type='password'
                        name='password'
                        {...register('password', {
                            required: 'Enter password',
                            maxLength: {
                                value: 4,
                                message: 'Maximum four characters are required',
                            },
                        })}
                    />
                    {errors.password && <p className='err'>{errors.password.message}</p>}

                    <input type='submit' value={'Register'} />
                    <button onClick={()=>{
                        reset()
                    }}>Reset</button>
                </form>
            </fieldset>
        </div>
    );
}
