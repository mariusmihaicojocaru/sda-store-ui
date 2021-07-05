import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {CategoryService} from '../category.service';
import {NestedTreeControl} from '@angular/cdk/tree';
import {CategoryResponseDto} from '../model/category-model';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {ToastrService} from 'ngx-toastr';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-categories-tree-view',
  templateUrl: './categories-tree-view.component.html',
  styleUrls: ['./categories-tree-view.component.css']
})
export class CategoriesTreeViewComponent implements OnInit {

  @Output() categoryChangeEvent: EventEmitter<any> = new EventEmitter();

  treeControl = new NestedTreeControl<CategoryResponseDto>(category => category.subCategories);
  dataSource = new MatTreeNestedDataSource<CategoryResponseDto>();
  role = localStorage.getItem('ROLE');

  constructor(private categoryService: CategoryService,
              private toastr: ToastrService,
              private deleteDialog: MatDialog,
              private updateDialog: MatDialog) {}

  ngOnInit(): void {
      this.getAllRootCategories();
  }

  getAllRootCategories(): void {
    this.categoryService.findAllRootCategories().subscribe((response) => {
      this.dataSource.data = response;
    }, error => {
      console.log(error);
    });
  }

  hasSubcategories = (index: number, node: CategoryResponseDto) =>
    node.subCategories !== undefined
    && node.subCategories !== null
    && node.subCategories.length > 0

  // delete(id: number): void{
  //   this.categoryService.delete(id)
  //   .subscribe((data): any => {
  //     this.toastr.success('API status is ' + data);
  //     this.ngOnInit();
  //   }, error => {
  //     this.toastr.error('API status is ' + error);
  //   });
  // }

  showCategoryDeleteDialog(id: number): void {
    const deleteDialogReference = this.deleteDialog.open(CategoryDeleteDialogComponent, {data: {categoryId: id}});
    deleteDialogReference.afterClosed().subscribe(data => {
      this.getAllRootCategories();
    });
  }

  showCategoryUpdateDialog(id: number): void {
    const updatedDialogReference = this.updateDialog.open(CategoryUpdateDialogComponent, {data: {categoryId: id}});
    updatedDialogReference.afterClosed().subscribe(data => {
    this.getAllRootCategories();
  });
  }

  checkNodeId(node: any): void{
    this.categoryChangeEvent.emit(node.id);
  }

}

@Component({
  selector: 'app-category-delete-dialog',
  templateUrl: 'category-delete-dialog.html'
})
export class CategoryDeleteDialogComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private categoryService: CategoryService,
              private toastrService: ToastrService,
              public deleteDialog: MatDialogRef<CategoriesTreeViewComponent>
              ) {}
  ngOnInit(): void{}

  handleDelete(): void {
    this.categoryService.delete(this.data.categoryId).subscribe((data) => {
      this.toastrService.success('Category deleted');
      this.deleteDialog.close();
    }, error => {
      this.toastrService.error('Cannot delete category');
    });
  }

  handleClose(): void {
    this.deleteDialog.close();
    console.log('"NO" button was pressed');
  }
}

@Component({
  selector: 'app-category-update-dialog',
  templateUrl: 'category-update-dialog.html'
})
export class CategoryUpdateDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public updateDialog: MatDialogRef<CategoriesTreeViewComponent>,
              private categoryService: CategoryService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }

  handleUpdate(): void {
    this.categoryService.update(this.data.categoryId, this.data.name).subscribe((data) => {
      this.toastr.success('The category has been updated.');
      this.updateDialog.close();
  });
  }

  handleClose(): void {
    this.updateDialog.close();
    console.log(' "NO" button was presed');
  }


}
