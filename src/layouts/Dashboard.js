import React from 'react'
import ProductList from '../pages/ProductList'
import ProductDetail from '../pages/ProductDetail'
import Categories from './Categories'
import Navi from './Navi'
import { Grid, GridColumn } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import CardtDetail from '../pages/CardtDetail'
import { ToastContainer } from 'react-toastify'


export default function Dashboard() {
    return (
        <div>
            <ToastContainer position='bottom-right'></ToastContainer>
            <Grid columns={2}>
                <Grid.Row>
                    <GridColumn width={4}>
                    <Categories></Categories>
                    </GridColumn>
                    <GridColumn width={12}>
                       <Route exact path="/" component={ProductList}></Route>
                       <Route exact path="/products" component={ProductList}></Route>
                       <Route path="/products/:id" component={ProductDetail}></Route>                       
                       <Route path="/cart" component={CardtDetail}></Route>                       
                    </GridColumn>
                </Grid.Row>
            </Grid>
          
          
        </div>
    )
}
