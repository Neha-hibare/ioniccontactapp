import { Component } from '@angular/core';

import {
  ActionSheet,
  ActionSheetController,
  Config,
  NavController
} from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';

import { CategorieUserListPage } from '../cat-userlist/cat.userlist';

// TODO remove


@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html'
})
export class CategoriesPage {
  actionSheet: ActionSheet;
  categories: any[] = [];

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    public confData: ConferenceData,
    public config: Config,
    public inAppBrowser: InAppBrowser,
    public userData: UserData
  ) {}

  ionViewDidLoad() {
    this.confData.getCategories().subscribe((categories: any[]) => {
      this.categories = categories;
    });
  }

  goToCatUserList(categories: any) {
    this.navCtrl.push(CategorieUserListPage, { catName: categories.name });
  }

}


  
  

  

  

