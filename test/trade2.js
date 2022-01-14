 const indecator = require('technicalindicators')
// import { Sum, sum } from "technicalindicators";
// {RSI,SMA} from technicalindicators;

function Bot1(raw) {
        this.raw = [];
        this.prices  = [];
        
        this.history;
        this.trends =[];
        this.RSIList=[];
        let period = 14;
        let periodTrend = 14;
        let portSize = 1 ;

        //process
        compute(raw);
        this.result = getResult();


    function sortbyDate(raw) {
        let sortedActivities = raw.slice().sort((a, b) => b.date - a.date);
        this.raw = sortedActivities;
        this.prices = raw.map(item => item.close )
    }
    function checkTrend(){
        this.trends = indecator.SMA.calculate({period : periodTrend, values : this.prices});
    }
    function checkRSI(){
        let inputRSI = {
            values : this.prices,
            period : period,

          };
          
          this.RSIList = indecator.RSI.calculate(inputRSI)
// code for get latest value prize
//           let rsi = new RSI({ values: values, period: 14 })
// let nextRsi = rsi.nextValue(lastBar.closePrice)


    }
    function compute(raw){
        sortbyDate(raw);
        checkTrend();
        checkRSI();
        this.history = new Array();
        for (let index = 14; index < this.prices.length; index++) {
            // if(this.prices[index] >= this.trends[index-14] && this.RSIList[index-14] <= 30 && portSize > 0){
            if( this.RSIList[index-14] <= 30 && portSize > 0){
                //buy signal
                this.history.push({"prize":this.prices[index],"date":this.raw[index].date});
                portSize = -1


            // }else if(this.prices[index] < this.trends[index-14] && this.RSIList[index-14] >= 70 && portSize < 0){
            }else if(this.RSIList[index-14] >= 65 && portSize < 0){//may 70
                //sell signal
                this.history.push({"prize":this.prices[index],"date":this.raw[index].date});
                portSize = 1
            }
            
        }
    }
    function getDiff(){
        let diffs =new Array();
        for (let index = 0; index < this.history.length-1; index++) {
            let diff = this.history[index+1].prize- this.history[index].prize
            diffs.push(diff)
        }
        return diffs;
      }
    function getResult(){
          let diffs = getDiff()
          return {"LOG":this.history,"DIFF":diffs,"SUM":diffs.reduce((a, b) => a + b, 0)};

      }
}

// exporting looks different from Node.js but is almost as simple
// export {Bot1};
module.exports = {
    Bot1:Bot1

}