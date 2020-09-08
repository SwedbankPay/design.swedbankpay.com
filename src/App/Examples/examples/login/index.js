import React from "react";
import { DocContainer, ComponentPreview } from "@docutils";

import InputGroup from "@components/InputGroup";
import ButtonComponent from "@components/Button";

const LoginContent = () => (
    <div className="slab slab-secondary slab-elevated">
        <div className="row align-items-center">
            <div className="col-lg-5">
                <h2>Login</h2>
                <form action="#" noValidate>
                    <InputGroup
                        required
                        id="validation-username"
                        type="text"
                        label="Username"
                        prefixType="icon"
                        prefixValue="account_box"
                    />
                    <InputGroup
                        required
                        id="validation-password"
                        type="password"
                        label="Password"
                        prefixType="icon"
                        prefixValue="vpn_key"
                    />
                    <ButtonComponent type="primary" label="Log in" icon="lock_open" btnType="submit" />
                </form>
            </div>
            <div className="col-lg-7 d-none d-lg-block">
                <img src="https://picsum.photos/1000/600?image=744" className="w-100 h-100" />
            </div>
        </div>
    </div>
);

const Login = () => (
    <DocContainer>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <LoginContent />
        </ComponentPreview>
    </DocContainer>
);

export default Login;

export { LoginContent };
