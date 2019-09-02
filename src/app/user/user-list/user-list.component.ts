import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userData = [
    { name: 'John', age: '28', city: 'Dallas', hobby: 'football' },
    { name: 'Maria', age: '36', city: 'Lisbon', hobby: 'music' },
    { name: 'Chris', age: '22', city: 'California', hobby: 'music' },
    { name: 'Samantha', age: '26', city: 'Paris', hobby: 'TV series' },
    { name: 'Sara', age: '43', city: 'New York', hobby: 'running' },
    { name: 'Steve', age: '31', city: 'Liverpool', hobby: 'football' },
    { name: 'Ethan', age: '27', city: 'Los Angeles', hobby: 'basketball' }
  ];

  selection = new SelectionModel(true, []);
  displayedColumns: string[] = ['select', 'name', 'age', 'city', 'hobby', 'details'];
  dataSource = new MatTableDataSource(this.userData);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}