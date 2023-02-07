import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../../model/customer/customer';
import {Facility} from '../../../../model/facility/facility';
import {Employee} from '../../../../model/employee/employee';
import {Contract} from '../../../../model/contract/contract';

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {

  contracts: Contract[] = [
    {
      id:1,
      startDate:"2020-12-08",
      endDate:"2020-12-08",
      deposit:0,
      customer:{
        id: 1,
        name: "Nguyễn Thị Hào",
      },
      employee:{
        id: 1,
        name: "Hồ Thị Yến",
      },
      facility:{
        id: 1,
        name: "Room Twin 02",
      }
    },
    {
      id:2,
      startDate:"2020-07-14",
      endDate:"2020-07-21",
      deposit:200000,
      customer:{
        id: 2,
        name: "Phạm Xuân Diệu",
      },
      employee:{
        id: 2,
        name: "Nguyễn Hà Đông",
      },
      facility:{
        id: 2,
        name: "Villa Beach Front",
      }
    },
    {
      id:3,
      startDate:"2021-03-15",
      endDate:"2021-03-17",
      deposit:50000,
      customer:{
        id: 3,
        name: "Hoàng Trần Nhi Nhi"
      },
      employee:{
        id: 3,
        name: "Hồ Thị Yến",
      },
      facility:{
        id: 3,
        name: "House Princess 02",
      }
    },
    {
      id:4,
      startDate:"2021-01-14",
      endDate:"2021-01-18",
      deposit:100000,
      customer:{
        id: 4,
        name: "Nguyễn Mỹ Kim"
      },
      employee:{
        id: 4,
        name: "Nguyễn Hà Đông",
      },
      facility:{
        id: 4,
        name: "House Princess 01",
      }
    },
    {
      id:5,
      startDate:"2021-07-14",
      endDate:"2021-07-15",
      deposit:0,
      customer:{
        id: 5,
        name: "Tôn Nữ Mộc Châu",
      },
      employee:{
        id: 5,
        name: "Nguyễn Hữu Hà",
      },
      facility:{
        id: 5,
        name: "Room Twin 01",
      }
    },
    {
      id:6,
      startDate:"2021-06-01",
      endDate:"2021-06-03",
      deposit:0,
      customer:{
        id: 3,
        name: "Hoàng Trần Nhi Nhi"
      },
      employee:{
        id: 6,
        name: "Nguyễn Công Đạo",
      },
      facility:{
        id: 1,
        name: "Room Twin 02",
      }
    },
  ]
  p = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
