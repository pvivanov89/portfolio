import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NoSanitizePipe, SafeResourceUrlPipe } from './pipes/no-sanitize';
import { ProjectDetailsComponent } from './routes/project-details/project-details.component';
import { ProjectsListComponent } from './routes/projects-list/projects-list.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { EmbeddedProjectComponent } from './components/embedded-project/embedded-project.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const defaultLang = 'en';
const langs = ['en', 'de'];
const useLang = langs.find(x => navigator.language.indexOf(x) > 0) ? navigator.language : defaultLang;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    NoSanitizePipe,
    ProjectDetailsComponent,
    ProjectsListComponent,
    EmbeddedProjectComponent,
    SafeResourceUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: useLang,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
