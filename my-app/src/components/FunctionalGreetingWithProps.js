import React from "react";

const FunctionalGreetingWithProps = (props) => {
    return <h1>Hello {props.name}! I see that you're {props.age} years old; {props.greeting} </h1>;
}

export default FunctionalGreetingWithProps;