import React from 'react';
import { Route } from 'react-router-dom';
import BackAppTemplate from './BackAppTemplate'

const BackAppTemplateContainer = props => {

    let elementsAppjs = props.backendTemplates.filter(el => el.name === 'app.js').map(el => <BackAppTemplate name={el.name} description={el.description} script={el.script} key={el.id} />)
    let elementsUtilsjs = props.backendTemplates.filter(el => el.name === 'utils.js').map(el => <BackAppTemplate name={el.name} description={el.description} script={el.script} key={el.id} />)
    let elementsIndexjs = props.backendTemplates.filter(el => el.name === 'index.js (folder: routes/passStats)').map(el => <BackAppTemplate name={el.name} description={el.description} script={el.script} key={el.id} />)

    return (
        <div>
            <Route exact path='/backend-templates/app' >{elementsAppjs}</Route>
            <Route exact path='/backend-templates/utils' >{elementsUtilsjs}</Route>
            <Route exact path='/backend-templates/route-example' >{elementsIndexjs}</Route>
        </div>
    )
}


export default BackAppTemplateContainer