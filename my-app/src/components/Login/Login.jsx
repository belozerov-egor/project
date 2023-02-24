import React from "react";
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import {getLogin} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";


const Login = (props) => {
    let onSubmit = (values) => {
        props.getLogin(values.email, values.password, values.rememberMe, setError);
        reset()
    }
    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: {errors},
        reset,
    } = useForm({
        mode: 'all',

    })
    if (props.isAuth) {
        return <Navigate to="/profile"/>
    }

    return(
        <div>
            <h1> Login </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input {...register('email', {
                        required: "required filed",
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Please enter the valid email'
                        }
                    })}
                           onFocus={() => {
                               clearErrors()
                           }}
                           placeholder={"Email"}/>
                </div>
                {errors.email &&
                    <div style={{color: 'red'}}>{errors.email.message}</div>}
                <div>
                    <input {...register('password',{
                               required: "required filed"
                           })}
                           onFocus={() => {clearErrors()}}
                           placeholder={"Password"}/>
                </div>
                {errors.password && <div style={{color:'red'}}>{errors.password.message}</div>}
                <div>
                    <input {...register('rememberMe')} type={"checkbox"}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
                {errors.server && <div style={{color:'red'}}>{errors.server.message}</div>}
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {isAuth: state.auth.isAuth}
}

export default connect(mapStateToProps, {getLogin})(Login);