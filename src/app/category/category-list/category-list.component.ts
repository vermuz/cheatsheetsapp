import { InputModalComponent } from '../../shared/modals/input-modal/input-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../shared/providers/user.service';
import { IUser } from '../../shared/interfaces/iuser';
import { ICategory } from '../../shared/interfaces/icategory';
import { CategoryService } from '../../shared/providers/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories: ICategory[];
  user:IUser;

  constructor(
    private _categoryService: CategoryService,
    private _userService: UserService,
    private _modalInput: NgbModal
    ) { }

  ngOnInit() {
    this._userService.getProfile().subscribe(
      user => this.user = user,
      error => console.log(error)
    )

    this._categoryService.getAll().subscribe(
      categories => this.categories = categories,
      error => console.log(error)
    );
  }

  create() {
    const modalRef = this._modalInput.open(InputModalComponent);

    modalRef.componentInstance.title = "Nueva categoría";

    return modalRef.result.then(
      name => {
        this._categoryService.create(name).subscribe(
          category => this.categories.push(category),
          error => console.log(error)
        );
      }
    ).catch(() => null);
  }

  edit(category: ICategory) {
    const modalRef = this._modalInput.open(InputModalComponent);

    modalRef.componentInstance.title = "Nueva categoría";
    modalRef.componentInstance.text = category.name;

    return modalRef.result.then(
      name => {
        this._categoryService.edit(category.id, name).subscribe(
          categoryEdit => category.name = categoryEdit.name,
          error => console.log(error)
        );
      }
    ).catch(() => null);
  }

  delete(category: ICategory) {
    this._categoryService.delete(category.id).subscribe(
      ok => {
        this.categories = this.categories.filter(c => {
          if(c.id !== category.id) return c;
        });
      },
      error => console.log(error)
    );
  }

}
