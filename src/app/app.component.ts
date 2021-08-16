import { Component, OnInit } from '@angular/core';
import { Batch } from './Model/Batch';
import {BatchService} from './Batch.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  batchList: Array<Batch>;
  constructor(private batchService: BatchService){
  }
  ngOnInit(): void {
    this.GetBatch();
  }
  title = 'Batch-Demo';

  PostBatch(){
    
    this.batchList.forEach((item) => {
      item.status = 'In Progress'
    });
    this.batchService.PostBatch(this.batchList).subscribe((result) => {
      console.log(result);
      
    })
  }
  GetBatch(){
  
    this.batchService.GetBatch().subscribe((res)=>
    {
      this.batchList = res;
      this.batchList.sort((a, b) => {
        return a.batchId - b.batchId;
      });
     
    });
  }

  refresh(): void {
    window.location.reload();
}
}
