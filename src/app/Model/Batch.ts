export class Batch {
    batchId : number;
    batchName : string;
    status : string;
    constructor(batchId : number, batchName : string, status : string)
    {
        this.batchId = batchId;
        this.batchName = batchName;
        this.status = status;
    }
}