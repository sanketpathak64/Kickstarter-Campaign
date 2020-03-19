import React from 'react';
import Header from './Header';
import { Container} from 'semantic-ui-react';
import Head from 'next/head';
export default props => {
    return(

        <div>
            <Container> 
                
            <head>
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" /> 
            </head>
            <Header />
            {props.children}
            </Container>
            
        </div>
    );
};