import React from 'react';
import styles from './index.module.css';
import BackAppTemplatesContainer from './BackTeamplates/BackAppTemplatesContainer';
import FrontAppTemplatesContainer from './FrontTemplates/FrontAppTemplatesContainer';
import NavigationBackend from './NavigationBackend';
import NavigationFrontend from './NavigationFrontend';
import { backendTemplates } from './codeTemplatesBack.js';
import { frontendTemplates } from './codeTemplatesFront.js';
import { Route, NavLink } from 'react-router-dom';


const Main = _ => {

    return (
        <main className={`${styles.bgWhite} ${styles.mainBox}`}>
            <div className={`${styles.containerDevider}`}>
                <div className={`${styles.contentNavigation}`}>
                    <NavLink to='/backend-templates' >backend</NavLink>
                        <Route path='/backend-templates' component={NavigationBackend}></Route>
                    <NavLink to='/frontend-templates' >frontend</NavLink>
                        <Route path='/frontend-templates' component={NavigationFrontend}></Route>
                </div>
                <div className={`${styles.contentFlow}`}>  
                    <Route path='/backend-templates' render={() => <BackAppTemplatesContainer backendTemplates={backendTemplates} /> }></Route>
                    <Route path='/frontend-templates' render={() => <FrontAppTemplatesContainer frontendTemplates={frontendTemplates} /> }></Route>
                </div>
            </div>
        </main>
    )
}

export default Main