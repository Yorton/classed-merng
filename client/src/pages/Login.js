import React, { userContext, useState, useContext } from 'react';
import gql from 'graphql-tag';
import {useMutation} from '@apollo/react-hooks';
import {Form, Button} from 'semantic-ui-react';

import {AuthContext} from '../context/auth';
import { useForm } from '../util/hooks';

function Login(props){

    const context = useContext(AuthContext);

    const [errors, setErrors] = useState({});

    const {onChange, onSubmit, values} = useForm(loginUserCallback,{
        username: '',
        password: ''
    });

    const [loginUser, {loading}] = useMutation(LOGIN_USER,{

        update(_, result){//update(proxy, result)
         
            console.log("login", result.data.login);

            context.login(result.data.login);
        
            props.history.push('/'); //redirect to home page
        },
        
 
        // update(_, {data: {login: userData}}){//update(proxy, result)

        //     context.login(userData);

        //     props.history.push('/'); //redirect to home page
        // },
        onError(err){
            //console.log(err.graphQLErrors[0].extensions.errors);
            setErrors(err.graphQLErrors[0].extensions.errors);
        },
        variables: values
    });

   function loginUserCallback(){
        loginUser();
   }

   

    return (
        <div className="form-container">
            <form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
                <h1>Login page</h1>
                <Form.Input
                    label="Username"
                    placeholder="Username..."
                    name="username"
                    type="text"
                    value={values.username}
                    error={errors.username ? true : false}
                    onChange={onChange}
                />
                <Form.Input
                    label="Password"
                    placeholder="Password..."
                    name="password"
                    type="password"
                    value={values.password}
                    error={errors.password ? true : false}
                    onChange={onChange}
                />
                 <div className="field">
                    <Button type="submit" primary>
                        Login
                    </Button>
                 </div>
               
            </form>
            {
                Object.keys(errors).length > 0 && (
                    <div className="ui error message">
                        <ul className="list">
                            {
                                Object.values(errors).map(value => (
                                    <li key={value}>{value}</li>
                                ))
                            }
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

const LOGIN_USER = gql`
    mutation login(
        $username: String!
        $password: String!
    ){
        login(
                username: $username
                password: $password
        ){
            id
            email
            username
            createdAt
            token
        }
    }
`;

export default Login;
