const LOCAL_STORAGE_KEY = 'scbtRandomusResults';

export interface RandomusResult {
  timestamp: number,
  numbers: number[],
}

class NumbersMemory {
  private results: RandomusResult[];
  constructor() {
    this.results = this.getResultsFromLocalStorage();
  }
  public getResults(){
    return this.results;
  }
  public addResult(result: RandomusResult){
    if(this.results.some((r) => r.timestamp === result.timestamp)){
      console.error('Result with same timestamp is already exists', result);
      return;
    }
    this.results.push(result);
    this.saveResultsToLocalStorage();
  };
  public deleteResult(result: RandomusResult){
    this.results = this.results.filter((r) => r.timestamp !== result.timestamp);
    this.saveResultsToLocalStorage();
  }
  private getResultsFromLocalStorage(){
    return localStorage.getItem(LOCAL_STORAGE_KEY) ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) : [];
  };
  private saveResultsToLocalStorage(){
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.results));
  }
}
export default new NumbersMemory();
