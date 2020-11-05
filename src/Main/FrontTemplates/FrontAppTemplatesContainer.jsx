import React from 'react';
import { Route } from 'react-router-dom';
import FrontAppTemplate from './FrontAppTemplate';
import styles from './styles/FrontAppTemplate.module.css';
import img from '../../assets/playform.png'

const FrontAppTemplatesContainer = props => {

    let elementsPlayFormVue = props.frontendTemplates.filter(el => el.name === 'PlayForm.vue').map(el => <FrontAppTemplate name={el.name} description={el.description} script={el.script} key={el.id} />);
    let elementsStoreStateModule = props.frontendTemplates.filter(el => el.name === 'state (module для Play form component)').map(el => <FrontAppTemplate name={el.name} description={el.description} script={el.script} key={el.id} />);

    return (
        <div>
            <Route exact path='/frontend-templates/playform' ><div className={styles.container}>{elementsPlayFormVue}<img src={img} /></div></Route>
            <Route exact path='/frontend-templates/state-example' >{elementsStoreStateModule}</Route>
        </div>
    )
}


export default FrontAppTemplatesContainer