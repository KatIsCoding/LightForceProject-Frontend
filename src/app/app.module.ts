import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { GameComponent } from './game/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuytokensComponent } from './buytokens/buytokens.component';
import { LedgerComponent } from './ledger/ledger.component';
import { HighscoresComponent } from './highscores/highscores.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';

import { NgParticlesModule } from 'ng-particles';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    MainComponent,
    GameComponent,
    BuytokensComponent,
    LedgerComponent,
    HighscoresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatListModule,
    HttpClientModule,
    NgParticlesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
