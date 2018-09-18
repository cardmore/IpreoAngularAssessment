import { Component, OnInit } from '@angular/core';
import { Cat } from '../cat';
import { CATS } from '../mock-cats';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css','./cats2.component.css']
})
export class CatsComponent implements OnInit {

  cats = CATS;
  isEditing = false;
  selectedCat: Cat;

  cat: Cat = {
  name: 'Suzzy',
  color: 'Black'
  }
  constructor() { }

  ngOnInit() {
  }

  onSelect(cat: Cat): void {
    this.selectedCat = cat;
  }
  

edit = function (editCat) {
              this.isEditing = CATS.indexOf(editCat);
             // this.cat = angular.copy(editCat);
}

editClickHandler = function (editCat) {
            this.edit(editCat);
}

 remove = function (removeCat) {
              var index = CATS.indexOf(removeCat);
              CATS.splice(index, 1);
              if (CATS.length === 0) {
                  this.cat = {};
                  this.cats = undefined;
              }
          }

  deleteClickHandler = function (removeCat) {
              this.remove(removeCat);
  }

reset = function () {
            this.cat = {};
}
resetClickHandler = function () {
            this.reset();
}

//test commitih this change

add = function () {
            var canSave = false;
            if (this.cat !== undefined) {
                if (this.cat['name'] !== undefined && this.cat['color'] !== undefined) {
                    canSave = true;
                }
            }

            if (canSave) {
                var newCat = {};
                if (!this.angular.equals({}, this.cat)) {
                    if (this.isEditing !== false) {
                        CATS[this.isEditing] = this.cat;
                        this.isEditing = false;
                    } else {
                        newCat = this.cat;
                        CATS.push(this.newCat);
                    }

                    this.cats = CATS;
                    this.cat = {};
                }
            }
        }

      addClickHandler = function () {
            this.add();
      }
}
