import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewqueryPage } from '../newquery/newquery';

/**
 * Generated class for the QueriesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-queries',
  templateUrl: 'queries.html',
})
export class QueriesPage {
    items: any[];
    queryAnswers: {};

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.queryAnswers = {};
        this.items = [];
        this.items.push({
            question: 'What is the best weather for traveling in New Zealand?',
            tags: ['traveling'],
            answers: [
                { A: 'Hot', Count: 0 },
                { A: 'Cold', Count: 0 },
                { A: 'Doesn\'t matter', Count: 0 }
            ],
            showDetails: false,
            totalVotes: 0            
        });

        this.items.push({
            question: 'Who will win the NBA playoffs?',
            tags: ['sports'],
            answers: [
                { A: 'Cleveland', Count: 0 },
                { A: 'Golden State', Count: 0 },
                { A: 'San Antonio', Count: 0 }
            ],
            showDetails: false,
            totalVotes: 0
        });

        this.items.push({
            question: 'What is the best Italian food?',
            tags: ['food'],
            answers: [
                { A: 'Pasta', Count: 0 },
                { A: 'Pizza', Count: 0 },
                { A: 'Calzone', Count: 0 }
            ],
            showDetails: false,
            totalVotes: 0
        });

        if (this.navParams.data != undefined && this.navParams.get('item') != undefined) {
            this.items.splice(0, 0, this.navParams.get('item'));
        }
    }

    toggleDetails(data) {
        if (data.showDetails) {
            data.showDetails = false;
            //data.icon = 'ios-add-circle-outline';
        } else {
            data.showDetails = true;
            //data.icon = 'ios-remove-circle-outline';
        }
    }

    submitVote(query, answer) {
        if (this.queryAnswers[query.question] == undefined) {
            for (var i = 0; i < query.answers.length; i++) {
                if (query.answers[i].A == answer.A) {
                    query.answers[i].Count++;
                }
            }

            query.totalVotes++;
            this.queryAnswers[query.question] = "true";
        }
    }

    openNewQuery() {
        this.navCtrl.push(NewqueryPage, {});
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QueriesPage');
  }

}
