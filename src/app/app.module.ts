import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { environment} from '../environments/environment'

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImageDetailComponent } from './components/image-detail/image-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { UploadComponent } from './components/upload/upload.component';

import { AuthenticationGuard } from './services/authenticationGuard.service'
import { UploadService } from './services/upload.service'
import { AuthenticationService } from './services/authentication.service'
import { ImageService } from './services/image.service'

import { appRoutes } from '../routes'

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageDetailComponent,
    NavbarComponent,
    LoginComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthenticationGuard, AuthenticationService, ImageService, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
