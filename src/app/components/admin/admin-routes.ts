import { AdminComponent } from "./admin.component";

import { Route, Router,Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {ProductPageComponent} from './product-page/product-page.component';
import {AddProductComponent} from './add-product/add-product.component';

export const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: 'ProductPage',
                component: ProductPageComponent
            },
            {
                path: 'addProduct',
                component: AddProductComponent
            },
            //sub path
            {
                path: 'edit/:productId/:skuId',
                component: AddProductComponent
            },
        ]
    }
];
/*
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
*/
