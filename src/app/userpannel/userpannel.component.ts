import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userpannel',
  templateUrl: './userpannel.component.html',
  styleUrls: ['./userpannel.component.css']
})
export class UserpannelComponent implements OnInit {
  tableData = [{
    firstName : 'Shubham',
    lastName : 'Gupta',
    email : 'Shubham55@gmail.com',
    address : 'Noida',
    phoneNumber : '9998887776',
  },
  {
    firstName : 'Ritesh',
    lastName : 'Verma',
    email : 'ritesh8@gmail.com',
    address : 'Delhi',
    phoneNumber : '9999999999',
  },
  {
    firstName : 'Sumit',
    lastName : 'Singh',
    email : 'Sumit98@gmail.com',
    address : 'Surat',
    phoneNumber : '1234567890',
  },
  {
    firstName : 'vijay',
    lastName : 'Singh',
    email : 'vijay98@gmail.com',
    address : 'Surat',
    phoneNumber : '1234567899',
  },
  {
    firstName : 'Sumit',
    lastName : 'pal',
    email : 'Sumit989@gmail.com',
    address : 'Surat',
    phoneNumber : '1234447890',
  },
{
    firstName : 'Ankit',
    lastName : 'Sharma',
    email : 'ankit22@gmail.com',
    address : 'Mumbai',
    phoneNumber : '7777777777',
  }];

  allTableData : any;

  constructor() { }

  ngOnInit(): void {
    this.allTableData = JSON.parse(JSON.stringify(this.tableData));
  }
  applyFilter(filterValue: any) {
    let filterValueLower = filterValue.target.value.toLowerCase();
    if(filterValueLower === '' ) {
        this.tableData=this.allTableData;
    } 
    else {
      this.tableData = this.allTableData.filter((user: any) => user.firstName.toLowerCase().includes(filterValueLower));
    }
 }

}
