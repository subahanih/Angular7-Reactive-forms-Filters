import { Component, OnInit, Injectable } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
import { FormGroup, FormArray } from '@angular/forms';
declare var $: any;

/**
 * Json node data with nested structure.
 * Each node has a module name, scree name and a path or a list of children
 */
export class FileNode {
  moduleName: string;
  screenName: string;
  children: FileNode[];
  icon: string;
  path: string;
}

/**
 * The Json tree data in string.
 * The data could be parsed into Json object
 */
const TREE_DATA = JSON.stringify({
  Company: 'parent',
  Branch: {},
  Pictures: {
    'Library': 'child',
    Reports: 'child',
    Woods: 'child'
  },
  Downloads: {},
  Users: 'parent'
});

/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
@Injectable()
export class FileDatabase {
  dataChange = new BehaviorSubject<FileNode[]>([]);

  get data(): FileNode[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    // Parse the string to json object.
    const dataObject = JSON.parse(TREE_DATA);

    // Build the tree nodes from Json object. The result is a list of `FileNode` with nested
    //     file node as children.
    const data = this.buildFileTree(dataObject, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `FileNode`.
   */
  buildFileTree(obj: {[key: string]: any}, level: number): FileNode[] {
    return Object.keys(obj).reduce<FileNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new FileNode();
      node.screenName = key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.path = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }
}


@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
  providers: [FileDatabase]
})
export class MenubarComponent implements OnInit {

  nestedTreeControl: NestedTreeControl<FileNode>;
  nestedDataSource: MatTreeNestedDataSource<FileNode>;
  formGroupModule: FormGroup;
  moduleList: { moduleName: String, moduleIcon: String, styleModule: string }[];
  prevSelectedModule: number;

  constructor(database: FileDatabase) {
    this.formGroupModule = new FormGroup({
      formArrayModules: new FormArray([
        new FormGroup({
          // 'iconModule': new FormControl(),
          // 'nameModule': new FormControl()
        })
      ])
    });
    this.loadModules();

    this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();

    database.dataChange.subscribe(data => this.nestedDataSource.data = data);
  }

  ngOnInit() {}

  loadModules() {
    this.moduleList = [
      { moduleName: 'Dashboard',  moduleIcon: '../../../assets/icons/dashboard.png',  styleModule: '#222222'},
      { moduleName: 'Settings',   moduleIcon: '../../../assets/icons/settings.png',   styleModule: '#222222'},
      { moduleName: 'Purchase',   moduleIcon: '../../../assets/icons/purchase.png',   styleModule: '#222222'},
      { moduleName: 'Sales',      moduleIcon: '../../../assets/icons/sales.png',      styleModule: '#222222'},
      { moduleName: 'Stock',      moduleIcon: '../../../assets/icons/stock.png',      styleModule: '#222222'},
      { moduleName: 'Accounts',   moduleIcon: '../../../assets/icons/accounts.png',   styleModule: '#222222'},
      { moduleName: 'Payroll',    moduleIcon: '../../../assets/icons/salary.png',     styleModule: '#222222'},
      { moduleName: 'Reports',    moduleIcon: '../../../assets/icons/reports.png',    styleModule: '#222222'},
    ];

    for (let module = 1; module < this.moduleList.length; module++) {
      (this.formGroupModule.get('formArrayModules') as FormArray)
        .push(new FormGroup({}));
    }
  }

  selectModule(i: number) {
    if (this.prevSelectedModule != null) {
      this.moduleList[this.prevSelectedModule].styleModule = '#222222';
    }
    this.moduleList[i].styleModule = '#333333';
    this.prevSelectedModule = i;
  }

  hasNestedChild = (_: number, nodeData: FileNode) => !nodeData.path;

  private _getChildren = (node: FileNode) => node.children;

}


