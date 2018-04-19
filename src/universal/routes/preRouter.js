import React from 'react'
import { Router, Route, Link ,Switch} from 'react-router-dom'

import WithAuth from '@/components/withAuth'
import routerconfig from './routeConfig'



const PreRouter = () => (

    <Switch>
        {routerconfig.map(props => <WithAuth {...props} key={props.path}/>)}
    </Switch>
    
)




export default PreRouter