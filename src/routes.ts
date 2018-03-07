import { Routes } from '@angular/router'
import { GalleryComponent } from './app/components/gallery/gallery.component'
import { ImageDetailComponent } from './app/components/image-detail/image-detail.component'
import { LoginComponent } from './app/components/login/login.component'
import { UploadComponent } from './app/components/upload/upload.component'
import { AuthenticationGuard } from './app/services/authenticationGuard.service'

export const appRoutes: Routes = [
    { path: 'gallery', component: GalleryComponent, canActivate: [AuthenticationGuard]},
    { path: 'upload', component: UploadComponent, canActivate: [AuthenticationGuard]},
    { path: 'image/:id', component: ImageDetailComponent, canActivate: [AuthenticationGuard]},
    { path: '', redirectTo: '/gallery', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
]