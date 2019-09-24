// @ts-ignore
import styled from "styled-components";
import {withFormik, FormikProps} from "formik";
import * as Yup from "yup";
import Wrapper from "./styles/Wrapper";
import InputWrapper from "./styles/InputWrapper";
import Label from "./styles/Label";
import Input from "./styles/Input";
import React from "react";
import Error from "./styles/Error";

interface FormValues {
    email: string;
    password: string;
}

interface OtherProps {
    title?: string;
}

interface MyFormProps {
    initialEmail?: string;
    initialPassword?: string;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        title
    } = props;

    return (
        <Wrapper>
            <h1>{title}</h1>
            <Error>{errors.email}</Error>
            <Error>{errors.password}</Error>
            <form onSubmit={handleSubmit}>
                <InputWrapper>
                    <Label>Email</Label>
                    <Input
                        width={50}
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label>Password</Label>
                    <Input
                        width={50}
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                </InputWrapper>
                <button
                    type="submit"
                    disabled={isSubmitting || !!(errors.email && touched.email) || !!(errors.password && touched.password)}
                >
                    Sign In
                </button>
            </form>
        </Wrapper>
    );

};

const SuperForm = withFormik<MyFormProps, FormValues>({
    mapPropsToValues: props => ({
        email: props.initialEmail || "",
        password: props.initialPassword || ""
    }),
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email("Email is invaild")
            .required("Email is required")
            .min(20, "Too short!"),
        password: Yup.string().required("Password is required").min(20, "Pass is short!")
    }),
    handleSubmit(
        {email, password}: FormValues,
        {props, setSubmitting, setErrors}
    ) {
        console.log(email, password);
    }

})(InnerForm);

export default SuperForm;